import { Filter, MapPin, Star } from "lucide-react";

import { machines, quickFilters } from "@/lib/terrano-data";
import { ImagePanel, PageHeader, PrimaryButton, PublicNav, Section } from "@/components/terrano/shell";

export const metadata = {
  title: "Explorar Máquinas Agrícolas",
  description:
    "Pesquise tratores, colheitadeiras, pulverizadores e implementos agrícolas disponíveis para locação regional.",
  alternates: {
    canonical: "/explorar",
  },
};

export default function ExplorePage() {
  return (
    <main className="min-h-screen">
      <PublicNav />
      <Section tone="gray">
        <PageHeader
          eyebrow="Explorar máquinas"
          title="Equipamentos disponíveis perto da operação."
          text="Pesquisa inicial por categoria, cidade, distância, data, forma de cobrança, operador e faixa de preço."
          action={<PrimaryButton href="/demandas">Não achei, publicar demanda</PrimaryButton>}
        />
      </Section>
      <Section tone="white">
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-black text-primary-foreground">
            <Filter className="size-4" />
            Filtros
          </span>
          {quickFilters.map((filter) => (
            <button key={filter} className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-bold text-muted-foreground">
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {machines.map((machine) => (
            <article key={machine.id} className="rounded-lg border border-border bg-card p-4">
              <ImagePanel image={machine.image} title={machine.title} className="aspect-[4/3]" />
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase text-lime">{machine.category}</p>
                  <h2 className="mt-1 font-display text-xl font-black">{machine.title}</h2>
                  <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-muted-foreground">
                    <MapPin className="size-4" />
                    {machine.city} · {machine.distance}
                  </p>
                </div>
                <span className="flex items-center gap-1 rounded-md bg-surface px-2 py-1 text-xs font-black">
                  <Star className="size-3 fill-lime text-lime" />
                  {machine.rating}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {machine.specs.map((spec) => (
                  <span key={spec} className="rounded-md bg-surface px-2.5 py-1 text-xs font-bold text-muted-foreground">
                    {spec}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="font-display text-lg font-black">{machine.price}</p>
                <PrimaryButton href="/cadastro">Solicitar proposta</PrimaryButton>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
