import { BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react";

import { RegisterForm } from "@/components/terrano/auth-forms";
import { PageHeader, PublicNav, Section } from "@/components/terrano/shell";

export const metadata = {
  title: "Criar conta",
  description:
    "Crie uma conta no Terrano para publicar demandas, cadastrar máquinas agrícolas e iniciar negociações regionais.",
  alternates: {
    canonical: "/cadastro",
  },
};

export default function SignupPage() {
  return (
    <main className="min-h-screen">
      <PublicNav />
      <Section tone="gray">
        <PageHeader
          eyebrow="Cadastro Terrano"
          title="Comece com uma conta para contratar ou anunciar."
          text="O cadastro já cria seu acesso ao MVP. Depois, a validação manual de telefone, documento e anúncios entra no painel administrativo."
        />
      </Section>
      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
          <RegisterForm />
          <aside className="grid gap-4">
            <TrustCard
              icon={ShieldCheck}
              title="Uma conta, dois lados"
              text="O mesmo usuário pode publicar demandas como produtor e anunciar máquinas como proprietário."
            />
            <TrustCard
              icon={FileCheck2}
              title="Verificação manual no MVP"
              text="Documento, telefone e anúncios ficam com status de revisão para a operação aprovar antes de escalar."
            />
            <TrustCard
              icon={BadgeCheck}
              title="Sem pagamento interno agora"
              text="O cadastro prepara a negociação, propostas e reservas comerciais antes de incluir pagamento na plataforma."
            />
          </aside>
        </div>
      </Section>
    </main>
  );
}

function TrustCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof ShieldCheck;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-lg border border-border bg-background p-6">
      <Icon className="size-7 text-lime" />
      <h2 className="mt-5 font-display text-2xl font-black">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
    </article>
  );
}
