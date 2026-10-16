import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Briefcase, MessageCircle, Search, Store, UserRound, Zap } from "lucide-react";
import { Footer, JobCard, Nav, Tag } from "@/components/site";
import { jobs } from "@/lib/jobs";
import hero from "@/assets/zup-hero.jpg";
import market from "@/assets/zup-market.jpg";
import restaurant from "@/assets/zup-restaurant.jpg";
import pharmacy from "@/assets/zup-pharmacy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zup — Diárias e turnos perto de você" },
      { name: "description", content: "Zup conecta supermercados, padarias, farmácias e restaurantes a profissionais que buscam trabalho por diária ou turno." },
      { property: "og:title", content: "Zup — Diárias e turnos perto de você" },
      { property: "og:description", content: "Encontre diárias perto de você ou publique uma oportunidade em minutos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-12">
      <div className="flex flex-col justify-between rounded-[2rem] bg-surface p-8 md:col-span-7 md:p-12">
        <div>
          <Tag><Zap className="h-3.5 w-3.5" /> Diárias e turnos, sem complicação</Tag>
          <h1 className="mt-8 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Trabalho pontual, <span className="rounded-2xl bg-lime px-3 text-lime-foreground">conexão</span> imediata.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            O Zup conecta estabelecimentos que precisam de reforço a profissionais buscando uma oportunidade de renda — por diária ou turno.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/vagas" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-ink">
            <Search className="h-4 w-4" /> Encontrar diárias
          </Link>
          <a href="#empresas" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-lime-foreground hover:brightness-95">
            Publicar uma vaga <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-[2rem] md:col-span-5">
        <img src={hero} alt="Atendente sorrindo no balcão de uma padaria" width={1024} height={1280} className="h-full min-h-[420px] w-full object-cover" />
        <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-card/95 p-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-lime"><BadgeCheck className="h-5 w-5 text-lime-foreground" /></span>
            <div>
              <p className="text-sm font-semibold">Selecionada para Atendente</p>
              <p className="text-xs text-muted-foreground">Padaria Pão Dourado · Sáb, 06h–14h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const stats = [
  ["+1.200", "diárias publicadas"],
  ["+8 mil", "profissionais cadastrados"],
  ["24h", "tempo médio para preencher"],
  ["0%", "taxa para profissionais"],
];

function Stats() {
  return (
    <section className="mx-auto mt-6 grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
      {stats.map(([n, l]) => (
        <div key={l} className="rounded-3xl border border-border bg-card p-6">
          <p className="font-display text-3xl font-bold">{n}</p>
          <p className="mt-1 text-sm text-muted-foreground">{l}</p>
        </div>
      ))}
    </section>
  );
}

const segments = [
  { img: market, title: "Supermercados", text: "Reposição, caixa e estoque nos horários de pico." },
  { img: restaurant, title: "Restaurantes", text: "Garçons e cozinha para eventos e fins de semana." },
  { img: pharmacy, title: "Farmácias", text: "Balconistas para cobrir folgas e plantões." },
];

function Segments() {
  return (
    <section className="mx-auto mt-28 max-w-7xl px-6">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <h2 className="font-display text-4xl font-bold tracking-tight md:col-span-7 md:text-5xl">Para todo tipo de negócio que não pode parar.</h2>
        <p className="text-muted-foreground md:col-span-5">Padarias, mercados, farmácias, restaurantes e muito mais publicam oportunidades informando função, data, horário, local e remuneração.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {segments.map((s) => (
          <article key={s.title} className="group relative overflow-hidden rounded-[2rem]">
            <img src={s.img} alt={s.title} loading="lazy" width={896} height={1152} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-card/95 p-5 backdrop-blur">
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const steps = [
  "Empresa publica a oportunidade",
  "Vaga é validada e publicada",
  "Profissionais encontram a diária",
  "Profissional se candidata",
  "Empresa analisa e seleciona",
  "Contato direto via WhatsApp",
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto mt-28 max-w-7xl px-6">
      <div className="rounded-[2rem] bg-ink p-8 text-primary-foreground md:p-14">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="inline-block rounded-full bg-lime px-4 py-1.5 text-xs font-semibold text-lime-foreground">Como funciona</span>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">Da vaga ao contato em seis passos.</h2>
            <p className="mt-4 opacity-70">A seleção não é uma contratação formal nem garantia de pagamento — o Zup apenas facilita a conexão entre as partes.</p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 md:col-span-7">
            {steps.map((s, i) => (
              <li key={s} className="rounded-2xl border border-primary-foreground/10 p-5">
                <span className="font-display text-sm text-lime">0{i + 1}</span>
                <p className="mt-2 font-medium">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  const pro = ["Crie seu perfil com experiências e funções", "Filtre por categoria, cidade, data e valor", "Candidate-se e acompanhe o andamento", "Salve vagas favoritas"];
  const biz = ["Publique diárias com função, horário e valor", "Veja perfis dos interessados", "Selecione e fale direto pelo WhatsApp", "Gerencie vagas e histórico"];
  return (
    <section id="empresas" className="mx-auto mt-28 grid max-w-7xl gap-6 px-6 md:grid-cols-2">
      {[
        { icon: UserRound, title: "Para profissionais", items: pro, cta: "Buscar diárias", lime: false },
        { icon: Store, title: "Para estabelecimentos", items: biz, cta: "Publicar vaga", lime: true },
      ].map((a) => (
        <div key={a.title} className={`rounded-[2rem] p-8 md:p-10 ${a.lime ? "bg-lime text-lime-foreground" : "bg-surface"}`}>
          <a.icon className="h-8 w-8" />
          <h3 className="mt-6 font-display text-3xl font-bold">{a.title}</h3>
          <ul className="mt-6 space-y-3">
            {a.items.map((i) => (
              <li key={i} className="flex gap-3"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0" />{i}</li>
            ))}
          </ul>
          <Link to="/vagas" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
            {a.cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ))}
    </section>
  );
}

function LatestJobs() {
  return (
    <section className="mx-auto mt-28 max-w-7xl px-6">
      <div className="flex items-end justify-between gap-6">
        <div>
          <Tag><Briefcase className="h-3.5 w-3.5" /> Oportunidades abertas</Tag>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">Diárias desta semana</h2>
        </div>
        <Link to="/vagas" className="hidden items-center gap-2 text-sm font-semibold md:inline-flex">Ver todas <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {jobs.slice(0, 4).map((j) => <JobCard key={j.id} job={j} />)}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="mx-auto mt-28 max-w-7xl px-6">
      <div className="grid items-center gap-6 rounded-[2rem] border border-border bg-card p-8 md:grid-cols-12 md:p-14">
        <h2 className="font-display text-4xl font-bold tracking-tight md:col-span-8 md:text-5xl">Precisa de alguém para amanhã? Publique agora.</h2>
        <div className="md:col-span-4 md:text-right">
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:bg-ink">
            <MessageCircle className="h-4 w-4" /> Cadastrar empresa
          </button>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Stats />
      <LatestJobs />
      <Segments />
      <HowItWorks />
      <Audiences />
      <Cta />
      <Footer />
    </div>
  );
}
