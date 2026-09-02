import { MapPin, MessageCircle, Send } from "lucide-react";

import { demandFormFields, demands } from "@/lib/terrano-data";
import { TerranoInput } from "@/components/terrano/form-kit";
import { PageHeader, PrimaryButton, PublicNav, Section } from "@/components/terrano/shell";

export const metadata = {
  title: "Demandas de Máquinas Agrícolas",
  description:
    "Publique uma demanda agrícola ou encontre oportunidades próximas para locação de máquinas no Terrano.",
  alternates: {
    canonical: "/demandas",
  },
};

export default function DemandsPage() {
  return (
    <main className="min-h-screen">
      <PublicNav />
      <Section tone="gray">
        <PageHeader
          eyebrow="Demandas disponíveis"
          title="O produtor publica a necessidade. O proprietário envia a proposta."
          text="Essa tela valida o diferencial central do Terrano: matching regional de demandas com máquinas disponíveis."
          action={<PrimaryButton href="/proprietario">Responder como proprietário</PrimaryButton>}
        />
      </Section>
      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
          <div className="grid gap-3">
            {demands.map((demand) => (
              <article key={demand.id} className="rounded-lg border border-border bg-card p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase text-lime">{demand.status}</p>
                    <h2 className="mt-2 font-display text-2xl font-black">{demand.title}</h2>
                    <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-muted-foreground">
                      <MapPin className="size-4" />
                      {demand.city} · {demand.distance}
                    </p>
                  </div>
                  <span className="rounded-lg bg-primary px-4 py-2 text-sm font-black text-primary-foreground">
                    {demand.proposals} propostas
                  </span>
                </div>
                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  <Info label="Área" value={demand.area} />
                  <Info label="Data" value={demand.date} />
                  <Info label="Orçamento" value={demand.budget} />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {demand.requirements.map((item) => (
                    <span key={item} className="rounded-md bg-surface px-3 py-1 text-xs font-bold text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <PrimaryButton href="/proprietario">Enviar proposta</PrimaryButton>
                  <a
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-extrabold"
                    href="https://wa.me/550000000000"
                    data-analytics-event="whatsapp_click"
                    data-analytics-label={`Demanda - ${demand.title}`}
                  >
                    WhatsApp
                    <MessageCircle className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <form
            action="/obrigado"
            className="rounded-lg border border-border bg-background p-5"
            data-analytics-event="lead_demand_submit"
            data-analytics-label="Demandas - Publicar demanda"
          >
            <input type="hidden" name="tipo" value="demand" />
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-lg bg-lime text-lime-foreground">
                <Send className="size-5" />
              </span>
              <div>
                <p className="text-xs font-black uppercase text-muted-foreground">Publicar demanda</p>
                <h2 className="font-display text-xl font-black">Preciso de máquina</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {demandFormFields.map((field) => (
                <TerranoInput key={field} label={field} name={field} />
              ))}
            </div>
            <button className="mt-5 w-full rounded-lg bg-primary px-5 py-3 text-sm font-extrabold text-primary-foreground">
              Publicar demanda
            </button>
          </form>
        </div>
      </Section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-background p-3">
      <p className="text-[11px] font-black uppercase text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-black">{value}</p>
    </div>
  );
}
