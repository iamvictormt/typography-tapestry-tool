import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, ClipboardList, MessageCircle, Users } from "lucide-react";
import { Footer, Nav, PageHeader, Tag, pill, pillBase } from "@/components/site";
import market from "@/assets/zup-market.jpg";
import restaurant from "@/assets/zup-restaurant.jpg";
import pharmacy from "@/assets/zup-pharmacy.jpg";
import p1 from "@/assets/zup-p1.jpg";

export const Route = createFileRoute("/empresas")({
  head: () => ({
    meta: [
      { title: "Zup para empresas — Publique diárias e encontre reforço" },
      { name: "description", content: "Supermercados, padarias, farmácias e restaurantes publicam diárias no Zup, recebem candidaturas e falam direto com os profissionais." },
      { property: "og:title", content: "Zup para empresas" },
      { property: "og:description", content: "Publique uma diária em minutos e encontre reforço para o seu negócio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const features = [
  { icon: ClipboardList, t: "Publique diárias", d: "Função, descrição, categoria, data, horário, valor e quantidade de vagas." },
  { icon: Users, t: "Veja candidatos", d: "Perfil, experiências, funções e localização aproximada de cada interessado." },
  { icon: BadgeCheck, t: "Selecione", d: "Atualize o andamento de cada candidatura com um toque." },
  { icon: MessageCircle, t: "Fale no WhatsApp", d: "Inicie a conversa diretamente com o profissional selecionado." },
];

const segs = [
  { img: market, t: "Supermercados" },
  { img: restaurant, t: "Restaurantes" },
  { img: pharmacy, t: "Farmácias" },
];

function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <PageHeader tag="Para estabelecimentos" title={<>Reforço Para <span className="text-muted-foreground/50">o Seu Negócio</span></>} text="Cubra faltas, picos de movimento e eventos com profissionais disponíveis perto de você.">
        <div className="mt-8 flex flex-wrap gap-3">
          <button className={`${pillBase} ${pill.dark}`}>Cadastrar empresa</button>
          <button className={`${pillBase} ${pill.light}`}>Falar com o time</button>
        </div>
      </PageHeader>

      <section className="mx-auto grid max-w-[1400px] gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={f.t} className={`rounded-3xl p-8 ${i === 0 ? "bg-lime text-lime-foreground" : "border border-border bg-card"}`}>
            <f.icon className="size-7" />
            <h3 className="mt-10 font-display text-xl font-bold">{f.t}</h3>
            <p className={`mt-2 text-sm ${i === 0 ? "opacity-80" : "text-muted-foreground"}`}>{f.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <Tag>Segmentos</Tag>
        <h2 className="mt-6 text-4xl font-bold sm:text-5xl">Feito Para Negócios Que Não Param</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {segs.map((s) => (
            <article key={s.t} className="group relative overflow-hidden rounded-3xl">
              <img src={s.img} alt={s.t} loading="lazy" width={896} height={1152} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute bottom-4 left-4 rounded-full bg-card px-4 py-2 text-sm font-semibold">{s.t}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-20">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col justify-between rounded-3xl bg-primary p-10 text-primary-foreground">
            <div>
              <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-lime-foreground">Painel da empresa</span>
              <h2 className="mt-6 font-display text-4xl font-bold">Tudo num só lugar</h2>
              <ul className="mt-6 space-y-3 text-sm opacity-80">
                {["Resumo de vagas e candidaturas", "Editar, encerrar e consultar vagas", "Histórico de oportunidades anteriores", "Configurações da empresa e responsável"].map((x) => (
                  <li key={x} className="flex gap-2"><BadgeCheck className="size-4 shrink-0 text-lime" />{x}</li>
                ))}
              </ul>
            </div>
            <button className={`${pillBase} ${pill.lime} mt-10 w-fit`}>Começar grátis</button>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <img src={p1} alt="Dona de restaurante" loading="lazy" width={768} height={896} className="h-full min-h-[420px] w-full object-cover object-top" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-card/95 p-5 text-sm backdrop-blur">
              "Publiquei de manhã e à tarde já tinha falado com três pessoas."
              <p className="mt-2 text-xs text-muted-foreground">Márcia · Cantina Nonna Lia</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
