import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, Heart, MapPin, Store, Users } from "lucide-react";
import { Footer, Nav } from "@/components/site";
import { brl, fmtDate, jobs } from "@/lib/jobs";

export const Route = createFileRoute("/vagas/$id")({
  loader: async ({ params }) => {
    const job = jobs.find((j) => j.id === params.id);
    if (!job) throw notFound();
    return job;
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.role} em ${loaderData.neighborhood} — Zup` : "Vaga indisponível — Zup";
    const d = loaderData ? `${loaderData.company} · ${brl(loaderData.pay)} por diária. ${loaderData.description}` : "Esta oportunidade não está disponível.";
    return {
      meta: [
        { title: t }, { name: "description", content: d },
        { property: "og:title", content: t }, { property: "og:description", content: d },
        { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: Detalhe,
  errorComponent: ({ error }) => <div className="p-10">{String(error)}</div>,
  notFoundComponent: () => (
    <div className="min-h-screen"><Nav /><div className="mx-auto max-w-7xl px-6 py-20 text-center">
      <h1 className="font-display text-3xl font-bold">Vaga não encontrada</h1>
      <Link to="/vagas" className="mt-6 inline-block underline">Ver todas as vagas</Link>
    </div></div>
  ),
});

function Detalhe() {
  const job = Route.useLoaderData();
  const info = [
    [Calendar, "Data", fmtDate(job.date)],
    [Clock, "Horário", `${job.start} – ${job.end}`],
    [MapPin, "Local aproximado", `${job.neighborhood}, ${job.city}`],
    [Users, "Vagas", String(job.spots)],
  ] as const;
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <div className="mx-auto max-w-7xl px-6">
        <Link to="/vagas" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> Voltar às vagas</Link>
        <div className="mt-6 grid gap-6 md:grid-cols-12">
          <div className="space-y-6 md:col-span-8">
            <div className="rounded-[2rem] bg-surface p-8 md:p-12">
              <span className="rounded-full bg-card px-3 py-1 text-xs font-medium text-muted-foreground">{job.category}</span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">{job.role}</h1>
              <p className="mt-3 flex items-center gap-2 text-muted-foreground"><Store className="h-4 w-4" />{job.company} · {job.businessType}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {info.map(([Icon, l, v]) => (
                  <div key={l} className="rounded-2xl bg-card p-4">
                    <p className="flex items-center gap-2 text-xs text-muted-foreground"><Icon className="h-4 w-4" />{l}</p>
                    <p className="mt-1 font-semibold">{v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-border bg-card p-8">
              <h2 className="font-display text-2xl font-semibold">Descrição</h2>
              <p className="mt-3 text-muted-foreground">{job.description}</p>
              <h2 className="mt-8 font-display text-2xl font-semibold">Requisitos</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {job.requirements.map((r) => <li key={r} className="rounded-full bg-surface px-4 py-2 text-sm">{r}</li>)}
              </ul>
            </div>
          </div>
          <aside className="md:col-span-4">
            <div className="sticky top-6 rounded-[2rem] bg-ink p-8 text-primary-foreground">
              <p className="text-sm opacity-70">Remuneração da diária</p>
              <p className="mt-1 font-display text-5xl font-bold">{brl(job.pay)}</p>
              <button className="mt-8 w-full rounded-full bg-lime py-4 text-sm font-semibold text-lime-foreground hover:brightness-95">Candidatar-se</button>
              <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-primary-foreground/20 py-4 text-sm font-semibold"><Heart className="h-4 w-4" /> Favoritar</button>
              <p className="mt-6 text-xs opacity-60">O contato via WhatsApp é liberado após a empresa selecionar sua candidatura. O Zup facilita a conexão e não garante contratação ou pagamento.</p>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
