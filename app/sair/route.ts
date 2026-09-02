import { redirect } from "next/navigation";

export async function GET() {
  const { destroySession } = await import("@/lib/auth/session");

  await destroySession();
  redirect("/login");
}
