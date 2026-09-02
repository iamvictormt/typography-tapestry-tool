"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { AccountProfile } from "@/generated/prisma/enums";
import { db } from "@/lib/db";
import { createSession, destroySession, getDefaultRedirect } from "@/lib/auth/session";
import { hashPassword, verifyPassword } from "@/lib/auth/password";

export type AuthActionState = {
  message?: string;
};

const profileValues = [AccountProfile.CONTRACTOR, AccountProfile.OWNER, AccountProfile.BOTH] as const;

const registerSchema = z
  .object({
    name: z.string().trim().min(3, "Informe seu nome ou razão social."),
    email: z.string().trim().email("Informe um e-mail válido.").optional().or(z.literal("")),
    phone: z.string().trim().min(10, "Informe um telefone válido."),
    whatsapp: z.string().trim().optional(),
    document: z.string().trim().min(11, "Informe CPF ou CNPJ."),
    city: z.string().trim().min(2, "Informe a cidade."),
    state: z.string().trim().min(2, "Informe o estado."),
    profile: z.enum(profileValues),
    password: z.string().min(8, "A senha precisa ter pelo menos 8 caracteres."),
    confirmPassword: z.string(),
    terms: z.literal("on", {
      errorMap: () => ({ message: "Aceite os termos para criar a conta." }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem.",
    path: ["confirmPassword"],
  });

const loginSchema = z.object({
  identifier: z.string().trim().min(3, "Informe e-mail, telefone ou documento."),
  password: z.string().min(1, "Informe sua senha."),
});

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

function normalizeOptionalEmail(value?: string) {
  const email = value?.trim().toLowerCase();
  return email ? email : null;
}

export async function registerAction(_state: AuthActionState, formData: FormData): Promise<AuthActionState> {
  const parsed = registerSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      message: parsed.error.issues[0]?.message ?? "Revise os dados do cadastro.",
    };
  }

  const email = normalizeOptionalEmail(parsed.data.email);
  const phone = onlyDigits(parsed.data.phone);
  const whatsapp = onlyDigits(parsed.data.whatsapp ?? parsed.data.phone);
  const document = onlyDigits(parsed.data.document);

  const existingUser = await db.user.findFirst({
    where: {
      OR: [{ phone }, { document }, ...(email ? [{ email }] : [])],
    },
    select: {
      id: true,
    },
  });

  if (existingUser) {
    return {
      message: "Já existe uma conta com esse telefone, documento ou e-mail.",
    };
  }

  const user = await db.user.create({
    data: {
      name: parsed.data.name,
      email,
      phone,
      whatsapp,
      document,
      city: parsed.data.city,
      state: parsed.data.state.toUpperCase(),
      profile: parsed.data.profile,
      passwordHash: hashPassword(parsed.data.password),
      termsAcceptedAt: new Date(),
    },
    select: {
      id: true,
      name: true,
      profile: true,
    },
  });

  await createSession(user);
  redirect(`${getDefaultRedirect(user.profile)}?bem-vindo=1`);
}

export async function loginAction(_state: AuthActionState, formData: FormData): Promise<AuthActionState> {
  const parsed = loginSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      message: parsed.error.issues[0]?.message ?? "Informe seus dados de acesso.",
    };
  }

  const identifier = parsed.data.identifier.toLowerCase();
  const digits = onlyDigits(identifier);
  const user = await db.user.findFirst({
    where: {
      OR: [
        { email: identifier },
        ...(digits ? [{ phone: digits }, { document: digits }] : []),
      ],
    },
    select: {
      id: true,
      name: true,
      profile: true,
      passwordHash: true,
    },
  });

  if (!user?.passwordHash || !verifyPassword(parsed.data.password, user.passwordHash)) {
    return {
      message: "Dados de acesso inválidos.",
    };
  }

  await createSession(user);
  redirect(getDefaultRedirect(user.profile));
}

export async function logoutAction() {
  await destroySession();
  redirect("/login");
}
