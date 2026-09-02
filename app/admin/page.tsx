import { AlertTriangle, BadgeCheck, Eye, ShieldCheck } from "lucide-react";

import { adminKpis, demands, machines } from "@/lib/terrano-data";
import { AppShell, StatCard } from "@/components/terrano/shell";

export const metadata = {
  title: "Administração",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <AppShell title="Administração" role="Operação Terrano">
      <div className="grid gap-5">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {adminKpis.map((kpi) => (
            <StatCard key={kpi.label} {...kpi} />
          ))}
        </div>
        <section className="grid gap-5 xl:grid-cols-[1fr_0.82fr]">
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-xs font-black uppercase text-lime">Verificações</p>
            <h2 className="font-display text-2xl font-black">Fila manual do MVP</h2>
            <div className="mt-5 grid gap-3">
              {[
                ["Fazenda Santa Clara", "CNPJ enviado, telefone confirmado", "Aprovar usuário"],
                ["Agro Machado", "Foto da máquina pendente", "Solicitar ajuste"],
                ["Irmãos Valente", "Documento aprovado, anúncio em revisão", "Aprovar anúncio"],
              ].map(([name, text, action]) => (
                <article key={name} className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-background p-4">
                  <div>
                    <h3 className="font-display text-lg font-black">{name}</h3>
                    <p className="text-sm font-semibold text-muted-foreground">{text}</p>
                  </div>
                  <button className="rounded-lg bg-primary px-4 py-2 text-sm font-black text-primary-foreground">
                    {action}
                  </button>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-xs font-black uppercase text-lime">Métricas de validação</p>
            <h2 className="font-display text-2xl font-black">Sinais para decidir o próximo passo</h2>
            <div className="mt-5 grid gap-3">
              <Metric title="Demanda publicada sem máquina encontrada" value="31%" icon={AlertTriangle} />
              <Metric title="Proprietários que responderam oportunidade" value="58%" icon={ShieldCheck} />
              <Metric title="Reservas comerciais aceitas" value="27" icon={BadgeCheck} />
              <Metric title="Conversas migradas para WhatsApp" value="74" icon={Eye} />
            </div>
          </div>
        </section>
        <section className="grid gap-5 xl:grid-cols-2">
          <AdminTable title="Máquinas para moderação" rows={machines.map((m) => [m.title, m.owner, m.city, m.availability])} />
          <AdminTable title="Demandas e negociações" rows={demands.map((d) => [d.title, d.city, d.status, `${d.proposals} propostas`])} />
        </section>
      </div>
    </AppShell>
  );
}

function Metric({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: typeof AlertTriangle;
}) {
  return (
    <article className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background p-4">
      <div className="flex items-center gap-3">
        <Icon className="size-5 text-lime" />
        <p className="text-sm font-bold text-muted-foreground">{title}</p>
      </div>
      <p className="font-display text-2xl font-black">{value}</p>
    </article>
  );
}

function AdminTable({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h2 className="font-display text-2xl font-black">{title}</h2>
      <div className="mt-5 overflow-hidden rounded-lg border border-border">
        {rows.map((row) => (
          <div key={row.join("-")} className="grid gap-2 border-b border-border bg-background p-4 text-sm last:border-b-0 md:grid-cols-4">
            {row.map((cell) => (
              <span key={cell} className="font-semibold text-muted-foreground">
                {cell}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
