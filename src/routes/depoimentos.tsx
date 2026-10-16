import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Footer, Nav, PageHeader } from "@/components/site";
import p1 from "@/assets/zup-p1.jpg";
import p2 from "@/assets/zup-p2.jpg";
import hero from "@/assets/zup-hero.jpg";
import market from "@/assets/zup-market.jpg";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Depoimentos — Quem usa o Zup" },
      { name: "description", content: "Veja o que estabelecimentos e profissionais dizem sobre encontrar diárias e reforço com o Zup." },
      { property: "og:title", content: "Depoimentos Zup" },
      { property: "og:description", content: "Quem precisa e quem quer trabalhar, conectados." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const items = [
  { img: p1, name: "Márcia Andrade", role: "Dona da Cantina Nonna Lia", q: "Sábado à noite dois garçons faltaram. Publiquei a vaga de manhã e à tarde já tinha conversado com três pessoas." },
  { img: p2, name: "Rafael Souza", role: "Repositor e garçom", q: "Consigo pegar diárias perto de casa nos dias que tenho livres. Já virei fixo em dois lugares." },
  { img: hero, name: "Juliana Lima", role: "Atendente", q: "Montei meu perfil em cinco minutos e na mesma semana fui selecionada para uma padaria do bairro." },
  { img: market, name: "Carlos Mendes", role: "Gerente, Mercado Vila Nova", q: "Nos fins de semana de pico, o Zup virou nossa forma de completar a equipe sem dor de cabeça." },
];

function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <PageHeader tag="Depoimentos" title={<>Quem Precisa. <span className="text-muted-foreground/50">Quem Quer Trabalhar.</span></>} text="Estabelecimentos e profissionais usam o Zup para se encontrar com rapidez e confiança." />
      <section className="mx-auto grid max-w-[1400px] gap-4 px-6 sm:grid-cols-3">
        {[["1.200+", "Diárias conectadas"], ["4.9", "Avaliação média"], ["8.000+", "Profissionais"]].map(([k, v], i) => (
          <div key={v} className={`rounded-3xl p-8 ${i === 1 ? "bg-lime text-lime-foreground" : "border border-border bg-card"}`}>
            <p className="font-display text-5xl font-extrabold">{k}</p>
            <p className="mt-1 text-sm opacity-70">{v}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto grid max-w-[1400px] gap-4 px-6 py-20 md:grid-cols-2">
        {items.map((t) => (
          <figure key={t.name} className="grid overflow-hidden rounded-3xl border border-border bg-card sm:grid-cols-[200px_1fr]">
            <img src={t.img} alt={t.name} loading="lazy" width={768} height={896} className="h-56 w-full object-cover object-top sm:h-full" />
            <div className="flex flex-col justify-between p-8">
              <blockquote className="text-sm leading-relaxed text-muted-foreground">"{t.q}"</blockquote>
              <div className="mt-6">
                <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-lime text-lime" />)}</div>
                <figcaption className="mt-3 font-display font-bold">{t.name}</figcaption>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </figure>
        ))}
      </section>
      <Footer />
    </main>
  );
}
