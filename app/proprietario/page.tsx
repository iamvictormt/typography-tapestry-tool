import { CalendarDays, Check, MapPin, Send, Wrench } from "lucide-react";

import { demands, machineFormFields, machines, ownerKpis } from "@/lib/terrano-data";
import { TerranoInput } from "@/components/terrano/form-kit";
import { AppShell, ImagePanel, PrimaryButton, StatCard } from "@/components/terrano/shell";

export const metadata = {
  title: "Painel do Proprietário",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OwnerPage() {
  return (
    <AppShell title="Minhas máquinas" role="Área do proprietário">
      <div className="grid gap-5">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {ownerKpis.map((kpi) => (
            <StatCard key={kpi.label} {...kpi} />
          ))}
        </div>
        <section className="grid gap-5 xl:grid-cols-[1fr_0.78fr]">
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase text-lime">Frota anunciada</p>
                <h2 className="font-display text-2xl font-black">Equipamentos cadastrados</h2>
              </div>
              <PrimaryButton href="/cadastro">Cadastrar máquina</PrimaryButton>
            </div>
            <div className="mt-5 grid gap-3 lg:grid-cols-3">
              {machines.map((machine) => (
                <article key={machine.id} className="rounded-lg border border-border bg-background p-3">
                  <ImagePanel image={machine.image} title={machine.title} className="aspect-[4/3]" />
                  <h3 className="mt-3 font-display text-lg font-black">{machine.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">{machine.availability}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-lg bg-lime text-lime-foreground">
                <Wrench className="size-5" />
              </span>
              <div>
                <p className="text-xs font-black uppercase text-muted-foreground">Novo anúncio</p>
                <h2 className="font-display text-xl font-black">Cadastro de máquina</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-2">
              {machineFormFields.map((field) => (
                <TerranoInput key={field} label={field} className="bg-background" />
              ))}
            </div>
            <button className="mt-5 w-full rounded-lg bg-primary px-5 py-3 text-sm font-extrabold text-primary-foreground">
              Enviar para aprovação
            </button>
          </aside>
        </section>
        <section className="rounded-lg border border-border bg-card p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase text-lime">Matching regional</p>
              <h2 className="font-display text-2xl font-black">Demandas próximas compatíveis</h2>
            </div>
            <span className="rounded-lg bg-surface px-4 py-2 text-sm font-black text-muted-foreground">
              raio ativo: 80 km
            </span>
          </div>
          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {demands.map((demand) => (
              <article key={demand.id} className="rounded-lg border border-border bg-background p-4">
                <p className="flex items-center gap-1 text-xs font-black uppercase text-lime">
                  <MapPin className="size-3.5" />
                  {demand.distance}
                </p>
                <h3 className="mt-3 font-display text-xl font-black">{demand.title}</h3>
                <p className="mt-2 text-sm font-semibold text-muted-foreground">{demand.area} · {demand.date}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-black text-primary-foreground">
                    <Send className="size-4" />
                    Propor
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-black">
                    <CalendarDays className="size-4" />
                    Ver agenda
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="rounded-lg border border-border bg-card p-5">
          <p className="text-xs font-black uppercase text-lime">Proposta rápida</p>
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {["Valor", "Forma de cobrança", "Taxa de deslocamento", "Validade"].map((field) => (
              <TerranoInput key={field} label={field} placeholder={field} className="bg-background" />
            ))}
          </div>
          <label className="mt-4 flex items-center gap-2 text-sm font-bold text-muted-foreground">
            <Check className="size-4 text-lime" />
            Operador incluso e combustível negociável
          </label>
        </section>
      </div>
    </AppShell>
  );
}
