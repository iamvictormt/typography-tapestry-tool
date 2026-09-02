"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { LockKeyhole, UserPlus } from "lucide-react";

import { loginAction, registerAction, type AuthActionState } from "@/lib/auth/actions";
import {
  TerranoCheckbox,
  TerranoInput,
  TerranoMaskedInput,
  TerranoSelect,
  maskDocument,
  maskPhone,
} from "@/components/terrano/form-kit";

const initialState: AuthActionState = {};

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-5 w-full rounded-lg bg-primary px-5 py-3 text-sm font-extrabold text-primary-foreground transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Processando..." : children}
    </button>
  );
}

function FormError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
      {message}
    </div>
  );
}

export function RegisterForm() {
  const [state, formAction] = useActionState(registerAction, initialState);

  return (
    <form action={formAction} className="rounded-lg border border-border bg-background p-5 shadow-sm shadow-ink/5">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-lg bg-lime text-lime-foreground">
          <UserPlus className="size-5" />
        </span>
        <div>
          <p className="text-xs font-black uppercase text-lime">Criar acesso</p>
          <h2 className="font-display text-2xl font-black">Conta Terrano</h2>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <TerranoInput label="Nome ou razão social" name="name" required autoComplete="name" />
        <TerranoInput label="E-mail" name="email" type="email" autoComplete="email" />
        <TerranoMaskedInput label="Telefone" name="phone" required autoComplete="tel" placeholder="(00) 00000-0000" mask={maskPhone} />
        <TerranoMaskedInput label="WhatsApp" name="whatsapp" autoComplete="tel" placeholder="se for diferente" mask={maskPhone} />
        <TerranoMaskedInput label="CPF ou CNPJ" name="document" required autoComplete="off" mask={maskDocument} />
        <TerranoInput label="Cidade" name="city" required autoComplete="address-level2" />
        <TerranoInput label="Estado" name="state" required autoComplete="address-level1" placeholder="GO" />
        <TerranoSelect
          label="Perfil inicial"
          name="profile"
          required
          placeholder="Selecione o perfil"
          defaultValue="BOTH"
          options={[
            { value: "CONTRACTOR", label: "Quero contratar máquinas" },
            { value: "OWNER", label: "Quero anunciar máquinas" },
            { value: "BOTH", label: "Quero contratar e anunciar" },
          ]}
        />
        <TerranoInput label="Senha" name="password" type="password" required autoComplete="new-password" />
        <TerranoInput label="Confirmar senha" name="confirmPassword" type="password" required autoComplete="new-password" />
      </div>

      <div className="mt-5">
        <TerranoCheckbox
          name="terms"
          required
          label="Aceito os termos de uso, política de privacidade e regras de intermediação comercial da Terrano."
        />
      </div>

      <div className="mt-5">
        <FormError message={state.message} />
      </div>

      <SubmitButton>Criar conta e entrar</SubmitButton>

      <p className="mt-5 text-center text-sm font-semibold text-muted-foreground">
        Já tem conta?{" "}
        <Link href="/login" className="font-black text-foreground underline decoration-lime decoration-2 underline-offset-4">
          Entrar
        </Link>
      </p>
    </form>
  );
}

export function LoginForm() {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="rounded-lg border border-border bg-background p-5 shadow-sm shadow-ink/5">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-lg bg-lime text-lime-foreground">
          <LockKeyhole className="size-5" />
        </span>
        <div>
          <p className="text-xs font-black uppercase text-lime">Acesso Terrano</p>
          <h2 className="font-display text-2xl font-black">Entrar na conta</h2>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        <TerranoInput
          label="E-mail, telefone ou documento"
          name="identifier"
          required
          autoComplete="username"
          placeholder="voce@fazenda.com ou telefone"
        />
        <TerranoInput label="Senha" name="password" type="password" required autoComplete="current-password" />
      </div>

      <div className="mt-5">
        <FormError message={state.message} />
      </div>

      <SubmitButton>Entrar</SubmitButton>

      <p className="mt-5 text-center text-sm font-semibold text-muted-foreground">
        Ainda não tem acesso?{" "}
        <Link href="/cadastro" className="font-black text-foreground underline decoration-lime decoration-2 underline-offset-4">
          Criar conta
        </Link>
      </p>
    </form>
  );
}
