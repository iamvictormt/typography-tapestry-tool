import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { Footer, Nav, PageHeader } from "@/components/site";
import p2 from "@/assets/zup-p2.jpg";
import market from "@/assets/zup-market.jpg";
import restaurant from "@/assets/zup-restaurant.jpg";
import pharmacy from "@/assets/zup-pharmacy.jpg";

export const Route = createFileRoute("/dicas")({
  head: () => ({
    meta: [
      { title: "Dicas Zup — Guias para profissionais e empresas" },
      { name: "description", content: "Guias práticos para montar seu perfil, escrever vagas claras e aproveitar ao máximo cada diária no Zup." },
      { property: "og:title", content: "Central de dicas Zup" },
      { property: "og:description", content: "Prepare-se para o próximo turno." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const articles = [
  { tag: "Perfil", t: "Como montar um perfil que chama atenção", time: "4 min", img: market },
  { tag: "Empresas", t: "Como escrever uma vaga clara e atrativa", time: "5 min", img: restaurant },
  { tag: "Segurança", t: "Boas práticas no contato via WhatsApp", time: "3 min", img: pharmacy },
  { tag: "Dicas", t: "5 atitudes que fazem você ser chamado de novo", time: "4 min" },
  { tag: "Empresas", t: "Como definir um valor justo para a diária", time: "6 min" },
  { tag: "Perfil", t: "O que levar no seu primeiro dia de trabalho", time: "3 min" },
];

function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <PageHeader tag="Central de dicas" title={<>Prepare-se Para <span className="text-muted-foreground/50">o Próximo Turno</span></>} text="Guias para profissionais e estabelecimentos aproveitarem o melhor do Zup." />
      <section className="mx-auto max-w-[1400px] px-6 pb-20">
        <article className="relative overflow-hidden rounded-3xl">
          <img src={p2} alt="Profissional sorrindo" width={768} height={896} className="h-[60vh] w-full object-cover object-top" />
          <div className="absolute inset-x-4 bottom-4 max-w-lg rounded-2xl bg-ink/60 p-6 text-primary-foreground backdrop-blur">
            <span className="rounded-full bg-lime px-3 py-1 text-[11px] font-semibold text-lime-foreground">Novo guia</span>
            <h2 className="mt-3 font-display text-3xl font-bold">Sua Primeira Diária no Zup</h2>
            <p className="mt-1 text-sm text-primary-foreground/70">Cadastro, candidatura e o que levar no dia</p>
          </div>
        </article>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article key={a.t} className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:bg-surface">
              {a.img && <img src={a.img} alt={a.t} loading="lazy" width={896} height={1152} className="aspect-[16/10] w-full object-cover" />}
              <div className="flex flex-1 flex-col justify-between p-6">
                <span className="w-fit rounded-full bg-surface px-3 py-1 text-[11px] font-medium text-muted-foreground">{a.tag}</span>
                <div>
                  <h3 className="mt-6 font-display text-lg leading-snug font-bold">{a.t}</h3>
                  <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="size-3.5" /> {a.time} de leitura</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
