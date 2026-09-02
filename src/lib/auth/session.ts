import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

import { db } from "@/lib/db";
import type { AccountProfile } from "@/generated/prisma/enums";
import { sessionCookieName } from "@/lib/auth/constants";

type SessionPayload = {
  userId: string;
  name: string;
  profile: AccountProfile;
  expiresAt: number;
};

function getAuthSecret() {
  const secret = process.env.AUTH_SECRET;

  if (!secret) {
    throw new Error("AUTH_SECRET is not configured.");
  }

  return secret;
}

function encodePayload(payload: SessionPayload) {
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}

function signPayload(encodedPayload: string) {
  return createHmac("sha256", getAuthSecret()).update(encodedPayload).digest("base64url");
}

function decodeSession(value?: string) {
  if (!value) {
    return null;
  }

  const [encodedPayload, signature] = value.split(".");

  if (!encodedPayload || !signature) {
    return null;
  }

  const expectedSignature = signPayload(encodedPayload);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (signatureBuffer.length !== expectedBuffer.length || !timingSafeEqual(signatureBuffer, expectedBuffer)) {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8")) as SessionPayload;

    if (payload.expiresAt < Date.now()) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export async function createSession(user: { id: string; name: string; profile: AccountProfile }) {
  const maxAge = 60 * 60 * 24 * 7;
  const payload = encodePayload({
    userId: user.id,
    name: user.name,
    profile: user.profile,
    expiresAt: Date.now() + maxAge * 1000,
  });

  const cookieStore = await cookies();
  cookieStore.set(sessionCookieName, `${payload}.${signPayload(payload)}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(sessionCookieName);
}

export async function getSessionPayload() {
  const cookieStore = await cookies();
  return decodeSession(cookieStore.get(sessionCookieName)?.value);
}

export async function getCurrentUser() {
  const session = await getSessionPayload();

  if (!session) {
    return null;
  }

  return db.user.findUnique({
    where: {
      id: session.userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      city: true,
      state: true,
      profile: true,
      verificationStatus: true,
    },
  });
}

export function getDefaultRedirect(profile: AccountProfile) {
  if (profile === "ADMIN") {
    return "/admin";
  }

  if (profile === "OWNER") {
    return "/proprietario";
  }

  return "/dashboard";
}
