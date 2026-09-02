import { CalendarDays, MessageCircle } from "lucide-react";

import { demands, kpis, proposals, statusFlow } from "@/lib/terrano-data";
import { AppShell, PrimaryButton, StatCard } from "@/components/terrano/shell";

export const metadata = {
  title: "Painel do Contratante",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardPage() {
  return (
    <AppShell title="Visão geral" role="Área do contratante">
      <div className="grid gap-5">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((kpi) => (
            <StatCard key={kpi.label} {...kpi} />
          ))}
        </div>
        <section className="grid gap-5 xl:grid-cols-[1fr_0.82fr]">
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase text-lime">Minhas demandas</p>
                <h2 className="font-display text-2xl font-black">Propostas recebidas</h2>
              </div>
              <PrimaryButton href="/demandas">Nova demanda</PrimaryButton>
            </div>
            <div className="mt-5 grid gap-3">
              {demands.slice(0, 2).map((demand) => (
                <article key={demand.id} className="rounded-lg border border-border bg-background p-4">
                  <p className="text-xs font-black uppercase text-muted-foreground">{demand.status}</p>
                  <h3 className="mt-1 font-display text-xl font-black">{demand.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-muted-foreground">
                    {demand.city} · {demand.area} · {demand.date}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-xs font-black uppercase text-lime">Negociação</p>
            <h2 className="font-display text-2xl font-black">Comparar propostas</h2>
            <div className="mt-5 grid gap-3">
              {proposals.map((proposal) => (
                <article key={proposal.machine} className="rounded-lg border border-border bg-background p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-black">{proposal.machine}</h3>
                      <p className="text-sm font-semibold text-muted-foreground">{proposal.owner}</p>
                    </div>
                    <span className="rounded-md bg-lime px-2.5 py-1 text-xs font-black text-lime-foreground">
                      {proposal.status}
                    </span>
                  </div>
                  <p className="mt-4 font-display text-2xl font-black">{proposal.value}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{proposal.includes}</p>
                  <div className="mt-4 flex gap-2">
                    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-black text-primary-foreground">
                      Aceitar
                    </button>
                    <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-black">
                      <MessageCircle className="size-4" />
                      Conversar
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="rounded-lg border border-border bg-card p-5">
          <div className="flex items-center gap-3">
            <CalendarDays className="size-5 text-lime" />
            <h2 className="font-display text-2xl font-black">Status da reserva</h2>
          </div>
          <div className="mt-5 grid gap-2 md:grid-cols-7">
            {statusFlow.map((status, index) => (
              <div key={status} className={`rounded-lg p-3 text-xs font-black ${index < 3 ? "bg-lime text-lime-foreground" : "bg-background text-muted-foreground"}`}>
                {status}
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
