import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Footer, JobCard, Nav } from "@/components/site";
import { categories, jobs } from "@/lib/jobs";

type S = { q?: string; categoria?: string; cidade?: string; min?: number };

export const Route = createFileRoute("/vagas/")({
  validateSearch: (s: Record<string, unknown>): S => ({
    q: typeof s.q === "string" ? s.q : undefined,
    categoria: typeof s.categoria === "string" ? s.categoria : undefined,
    cidade: typeof s.cidade === "string" ? s.cidade : undefined,
    min: s.min ? Number(s.min) || undefined : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Vagas por diária e turno — Zup" },
      { name: "description", content: "Encontre diárias em supermercados, padarias, farmácias e restaurantes. Filtre por categoria, cidade e remuneração." },
      { property: "og:title", content: "Vagas por diária e turno — Zup" },
      { property: "og:description", content: "Oportunidades de trabalho pontual perto de você." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Vagas,
});

const cities = Array.from(new Set(jobs.map((j) => j.city)));
const sel = "rounded-full border border-border bg-card px-4 py-3 text-sm";

function Vagas() {
  const s = Route.useSearch();
  const navigate = useNavigate({ from: "/vagas/" });
  const set = (patch: Partial<S>) => navigate({ search: (p) => ({ ...p, ...patch }), replace: true });

  const list = jobs.filter((j) =>
    (!s.q || `${j.role} ${j.company}`.toLowerCase().includes(s.q.toLowerCase())) &&
    (!s.categoria || j.category === s.categoria) &&
    (!s.cidade || j.city === s.cidade) &&
    (!s.min || j.pay >= s.min),
  );

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] bg-surface p-8 md:p-12">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">Encontre sua próxima diária</h1>
          <p className="mt-3 text-muted-foreground">{list.length} oportunidades abertas</p>
          <div className="mt-8 grid gap-3 md:grid-cols-12">
            <label className="relative md:col-span-5">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={s.q ?? ""} onChange={(e) => set({ q: e.target.value || undefined })} placeholder="Função ou empresa" className={`${sel} w-full pl-11`} />
            </label>
            <select value={s.categoria ?? ""} onChange={(e) => set({ categoria: e.target.value || undefined })} className={`${sel} md:col-span-3`}>
              <option value="">Todas as categorias</option>
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select value={s.cidade ?? ""} onChange={(e) => set({ cidade: e.target.value || undefined })} className={`${sel} md:col-span-2`}>
              <option value="">Todas as cidades</option>
              {cities.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select value={s.min ?? ""} onChange={(e) => set({ min: Number(e.target.value) || undefined })} className={`${sel} md:col-span-2`}>
              <option value="">Qualquer valor</option>
              <option value="130">A partir de R$ 130</option>
              <option value="150">A partir de R$ 150</option>
              <option value="180">A partir de R$ 180</option>
            </select>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((j) => <JobCard key={j.id} job={j} />)}
        </div>
        {list.length === 0 && <p className="mt-16 text-center text-muted-foreground">Nenhuma vaga encontrada com esses filtros.</p>}
      </section>
      <Footer />
    </div>
  );
}
