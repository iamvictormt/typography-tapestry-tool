import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  MessagesSquare,
  ShieldCheck,
  Tractor,
  Wrench,
} from "lucide-react";

import {
  categories,
  demandFormFields,
  demands,
  fieldImage,
  heroImage,
  machineFormFields,
  machines,
} from "@/lib/terrano-data";
import { LeadForm } from "@/components/terrano/lead-form";
import { Eyebrow, ImagePanel, PrimaryButton, PublicNav, Section, StatCard } from "@/components/terrano/shell";

const promises = [
  { value: "24h", label: "para receber os primeiros contatos", icon: Clock3 },
  { value: "80km", label: "de raio médio de atendimento", icon: MapPin },
  { value: "2 lados", label: "produtores e proprietários na mesma conta", icon: MessagesSquare },
];

const steps = [
  {
    title: "Publique sua necessidade",
    text: "Informe máquina, operação, área, data, localização e se precisa de operador.",
  },
  {
    title: "Receba propostas próximas",
    text: "Proprietários compatíveis visualizam a demanda e enviam condições de atendimento.",
  },
  {
    title: "Feche a reserva comercial",
    text: "Compare preço, disponibilidade, deslocamento e combine os detalhes pelo chat ou WhatsApp.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <PublicNav />

      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="mx-auto grid max-w-[1400px] gap-6 px-5 py-8 lg:min-h-[calc(100vh-73px)] lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative min-w-0 overflow-hidden rounded-lg bg-card p-6 shadow-sm shadow-ink/5 sm:p-8 lg:flex lg:flex-col lg:justify-between lg:p-9">
            <div>
              <Eyebrow>Terrano - máquinas que movem o campo</Eyebrow>
              <h1 className="mt-7 max-w-4xl text-[2.35rem] font-black leading-[0.98] sm:text-6xl lg:text-7xl">
                Alugue máquinas agrícolas sem perder a janela da safra.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Conectamos produtores que precisam de tratores, colheitadeiras e pulverizadores a
                proprietários com equipamentos disponíveis na região.
              </p>
            </div>
            <div className="mt-10 grid min-w-0 gap-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/cadastro" analyticsLabel="Hero - Preciso de máquina">
                  Preciso de uma máquina
                </PrimaryButton>
                <PrimaryButton href="/cadastro" light analyticsLabel="Hero - Tenho máquina">
                  Tenho máquina para alugar
                </PrimaryButton>
              </div>
              <div className="flex min-w-0 flex-wrap gap-2 text-xs font-bold text-muted-foreground">
                <span className="rounded-md bg-surface px-3 py-2">Sem pagamento interno no início</span>
                <span className="rounded-md bg-surface px-3 py-2">Contato por WhatsApp</span>
                <span className="rounded-md bg-surface px-3 py-2">Verificação manual</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <ImagePanel image={heroImage} title="Trator trabalhando em lavoura" className="min-h-[420px] lg:min-h-[500px]" />
            <div className="grid gap-4 sm:grid-cols-3">
              {promises.map((item) => (
                <StatCard key={item.label} {...item} badge="Campanha" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <Eyebrow>Para produtores</Eyebrow>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
              Quando não encontrar a máquina, publique a demanda.
            </h2>
          </div>
          <div className="grid gap-3">
            {demands.map((demand) => (
              <Link
                key={demand.id}
                href="/demandas"
                className="rounded-lg border border-border bg-background p-5 transition hover:bg-surface"
                data-analytics-event="demand_card_click"
                data-analytics-label={demand.title}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase text-lime">{demand.status}</p>
                    <h3 className="mt-2 font-display text-xl font-black">{demand.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-muted-foreground">
                      {demand.city} · {demand.area} · {demand.date}
                    </p>
                  </div>
                  <span className="rounded-md bg-primary px-3 py-2 text-sm font-black text-primary-foreground">
                    {demand.proposals} propostas
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="gray">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <ImagePanel image={fieldImage} title="Máquina agrícola em operação" className="min-h-[560px]" />
          <div>
            <Eyebrow>Como funciona</Eyebrow>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
              Um fluxo simples para tirar a negociação do improviso.
            </h2>
            <div className="mt-8 grid gap-4">
              {steps.map((step, index) => (
                <article key={step.title} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex items-center gap-4">
                    <span className="grid size-11 place-items-center rounded-lg bg-lime font-display text-lg font-black text-lime-foreground">
                      {index + 1}
                    </span>
                    <h3 className="font-display text-xl font-black">{step.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <Eyebrow>Máquinas disponíveis</Eyebrow>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
              Pesquise frota regional antes de publicar uma demanda.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              Veja disponibilidade, distância aproximada, valor inicial, operador e condições de atendimento.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.slice(0, 5).map((category) => (
                <span key={category} className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-black">
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {machines.map((machine) => (
              <Link
                key={machine.id}
                href="/explorar"
                className="group rounded-lg border border-border bg-background p-4 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10"
                data-analytics-event="machine_card_click"
                data-analytics-label={machine.title}
              >
                <ImagePanel image={machine.image} title={machine.title} className="aspect-[4/3]" />
                <p className="mt-4 text-xs font-black uppercase text-lime">{machine.category}</p>
                <h3 className="mt-2 font-display text-lg font-black">{machine.title}</h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{machine.city}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-black">{machine.price}</p>
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="gray" id="conversao">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <Eyebrow>Solicite acesso</Eyebrow>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
              Entre na lista de operação da Terrano.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              Se você precisa de equipamento ou tem frota disponível, deixe seus dados. A equipe Terrano
              organiza o primeiro contato e valida a disponibilidade na sua região.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                ["Produtor", "publique a necessidade e receba propostas"],
                ["Proprietário", "cadastre máquinas e encontre demandas próximas"],
                ["Empresa rural", "use a mesma conta para contratar e anunciar"],
              ].map(([title, text]) => (
                <div key={title} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <Check className="mt-0.5 size-5 text-lime" />
                  <p className="text-sm font-semibold text-muted-foreground">
                    <strong className="text-foreground">{title}:</strong> {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            <LeadForm
              intent="demand"
              title="Preciso de máquina"
              description="Informe a demanda para receber contatos de proprietários compatíveis."
              fields={demandFormFields.slice(0, 4)}
              submitLabel="Quero receber propostas"
            />
            <LeadForm
              intent="owner"
              title="Tenho máquina disponível"
              description="Cadastre sua frota para receber oportunidades de locação próximas."
              fields={machineFormFields.slice(0, 4)}
              submitLabel="Quero anunciar minha frota"
            />
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow>Confiança para negociar</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
              Mais segurança sem complicar o primeiro contato.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/70">
              A Terrano mantém histórico da proposta, dados do usuário, status da negociação e avaliações
              depois do serviço.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: "Usuários verificados", icon: ShieldCheck },
              { title: "Anúncios revisados", icon: Wrench },
              { title: "Agenda e disponibilidade", icon: CalendarDays },
              { title: "WhatsApp com contexto", icon: MessageCircle },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/7 p-5">
                  <Icon className="size-6 text-lime" />
                  <p className="mt-5 font-display text-xl font-black">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-8 rounded-lg border border-border bg-background p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-lime">Terrano</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
              Máquinas que movem o campo.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/cadastro" analyticsLabel="Final - Solicitar acesso">
              Solicitar acesso
            </PrimaryButton>
            <PrimaryButton href="/explorar" light analyticsLabel="Final - Explorar">
              Ver máquinas
            </PrimaryButton>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-black">Terrano</p>
          <p className="text-sm font-semibold text-muted-foreground">Aluguel de máquinas agrícolas por demanda regional.</p>
        </div>
      </footer>
    </main>
  );
}
