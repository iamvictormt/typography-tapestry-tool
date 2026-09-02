import Link from "next/link";
import { ArrowRight, MessageCircle, Tractor } from "lucide-react";

import { LoginForm } from "@/components/terrano/auth-forms";
import { PublicNav, Section } from "@/components/terrano/shell";

export const metadata = {
  title: "Entrar",
  description: "Entre na sua conta Terrano para gerenciar demandas, máquinas, propostas e reservas.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <main className="min-h-screen">
      <PublicNav />
      <Section tone="gray">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-black uppercase text-muted-foreground">
              <span className="size-2 rounded-full bg-lime" />
              Acesso ao MVP
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] sm:text-7xl">
              Entre para mover sua negociação no campo.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              Acompanhe demandas, propostas, conversas e reservas comerciais em um só lugar.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                ["Produtores", "publicam demandas e comparam propostas recebidas"],
                ["Proprietários", "cadastram máquinas e respondem oportunidades próximas"],
                ["Operação", "aprova usuários, anúncios e acompanha conversões"],
              ].map(([title, text]) => (
                <div key={title} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <Tractor className="mt-0.5 size-5 text-lime" />
                  <p className="text-sm font-semibold text-muted-foreground">
                    <strong className="text-foreground">{title}:</strong> {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <LoginForm />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                href="/cadastro"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-extrabold transition hover:bg-surface"
              >
                Criar conta
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://wa.me/550000000000"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-extrabold transition hover:bg-surface"
              >
                WhatsApp
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
