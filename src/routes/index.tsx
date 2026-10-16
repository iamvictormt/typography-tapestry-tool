import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Clock, MapPin, Plus, Star, Check } from "lucide-react";
import hero from "@/assets/zup-hero.jpg";
import market from "@/assets/zup-market.jpg";
import pharmacy from "@/assets/zup-pharmacy.jpg";
import restaurant from "@/assets/zup-restaurant.jpg";
import p1 from "@/assets/zup-p1.jpg";
import p2 from "@/assets/zup-p2.jpg";
import why from "@/assets/zup-why.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zup — Diárias e turnos perto de você" },
      {
        name: "description",
        content:
          "Zup conecta supermercados, padarias, farmácias e restaurantes a profissionais que querem trabalhar por diária ou turno.",
      },
      { property: "og:title", content: "Zup — Diárias e turnos perto de você" },
      {
        property: "og:description",
        content: "Publique uma diária em minutos ou encontre um turno perto de casa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const wrap = "mx-auto max-w-[1320px] px-6";

const shifts = [
  { role: "Repositor", place: "Mercado Bom Preço", category: "Supermercado", area: "Pinheiros", time: "07:00 – 15:00", day: "Sáb, 18", pay: 150, img: market },
  { role: "Atendente de balcão", place: "Farmácia Vida", category: "Farmácia", area: "Moema", time: "14:00 – 22:00", day: "Dom, 19", pay: 140, img: pharmacy },
  { role: "Auxiliar de cozinha", place: "Cantina Nonna", category: "Restaurante", area: "Bela Vista", time: "18:00 – 00:00", day: "Sex, 17", pay: 170, img: restaurant },
  { role: "Padeiro", place: "Padaria Estrela", category: "Padaria", area: "Tatuapé", time: "04:00 – 10:00", day: "Seg, 20", pay: 180, img: market },
];

const categories = ["Supermercados", "Padarias", "Farmácias", "Restaurantes", "Bares", "Hortifrútis", "Lanchonetes", "Açougues"];

function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <Hero />
      <Marquee />
      <HowItWorks />
      <Board />
      <Manifesto />
      <Voices />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
      <span className="grid size-8 place-items-center rounded-full bg-lime text-lime-foreground">z</span>
      zup
    </a>
  );
}

function Header() {
  const links = [
    ["Como funciona", "#como-funciona"],
    ["Diárias", "#diarias"],
    ["Depoimentos", "#depoimentos"],
    ["Dúvidas", "#duvidas"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className={`${wrap} flex h-16 items-center justify-between`}>
        <Logo />
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#comecar" className="hidden rounded-full px-4 py-2 text-sm font-medium sm:inline-flex">Entrar</a>
          <a href="#comecar" className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-primary-foreground">
            Começar <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className={`${wrap} pt-14 pb-20 lg:pt-20`}>
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium">
            <span className="size-2 animate-pulse rounded-full bg-lime" /> 312 diárias abertas hoje em São Paulo
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] font-bold tracking-[-0.04em]">
            Turno vago?
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Zup</span>
              <span className="absolute inset-x-0 bottom-[0.08em] -z-0 h-[0.32em] rounded-full bg-lime" />
            </span>{" "}
            resolve.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Estabelecimentos publicam diárias e turnos em minutos. Profissionais encontram trabalho perto de casa,
            escolhem quando querem trabalhar e falam direto com quem contrata.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#comecar" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-medium text-primary-foreground">
              Quero trabalhar <ArrowUpRight className="size-4" />
            </a>
            <a href="#comecar" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-4 font-medium">
              Quero contratar
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img src={hero} alt="Profissional sorrindo durante o turno" className="h-[520px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent" />
            <div className="absolute inset-x-4 bottom-4">
              <ShiftTicket s={shifts[0]!} />
            </div>
          </div>
          <div className="absolute -top-5 -left-5 hidden rounded-2xl bg-lime p-4 text-lime-foreground shadow-xl sm:block">
            <p className="font-display text-3xl font-bold">8 min</p>
            <p className="text-xs font-medium">tempo médio até o 1º interessado</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShiftTicket({ s }: { s: (typeof shifts)[number] }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-card p-4 text-card-foreground shadow-lg">
      <div className="min-w-0">
        <p className="text-xs font-medium text-muted-foreground">{s.day} · {s.time}</p>
        <p className="truncate font-display text-lg font-semibold">{s.role}</p>
        <p className="truncate text-xs text-muted-foreground">{s.place} · {s.area}</p>
      </div>
      <div className="shrink-0 text-right">
        <p className="font-display text-xl font-bold">R$ {s.pay}</p>
        <span className="mt-1 inline-block rounded-full bg-lime px-3 py-1 text-xs font-semibold text-lime-foreground">Candidatar</span>
      </div>
    </div>
  );
}

function Marquee() {
  const row = [...categories, ...categories];
  return (
    <div className="overflow-hidden border-y border-border bg-ink py-5 text-primary-foreground">
      <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-10">
        {row.map((c, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-semibold whitespace-nowrap">
            {c} <span className="size-2 rounded-full bg-lime" />
          </span>
        ))}
      </div>
    </div>
  );
}

const flows = {
  empresa: {
    label: "Para estabelecimentos",
    steps: [
      ["Publique a diária", "Função, data, horário, local, remuneração e requisitos. Leva menos de 3 minutos."],
      ["Receba interessados", "Profissionais próximos se candidatam e você vê perfil, experiência e avaliações."],
      ["Fale direto e feche", "Escolha quem combina com seu turno e combine os detalhes sem intermediários."],
    ],
  },
  pro: {
    label: "Para profissionais",
    steps: [
      ["Crie seu perfil grátis", "Conte suas experiências, funções que domina e os dias em que pode trabalhar."],
      ["Encontre perto de você", "Filtre por categoria, distância e remuneração. Só aparecem vagas que fazem sentido."],
      ["Candidate-se e trabalhe", "Um toque para se candidatar. O estabelecimento entra em contato com você."],
    ],
  },
} as const;

function HowItWorks() {
  const [tab, setTab] = useState<keyof typeof flows>("empresa");
  const f = flows[tab];
  return (
    <section id="como-funciona" className={`${wrap} scroll-mt-20 py-24 lg:py-32`}>
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <p className="mb-4 text-sm font-medium text-muted-foreground">01 — Como funciona</p>
          <h2 className="max-w-2xl font-display text-5xl leading-[1] font-bold tracking-tight text-balance sm:text-6xl">
            Três passos. Dos dois lados.
          </h2>
        </div>
        <div className="inline-flex rounded-full border border-border bg-card p-1">
          {(Object.keys(flows) as (keyof typeof flows)[]).map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                tab === k ? "bg-ink text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {flows[k].label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {f.steps.map(([t, d], i) => (
          <div key={t} className="group flex min-h-[300px] flex-col justify-between rounded-[1.75rem] bg-card p-8 transition-colors hover:bg-lime">
            <span className="font-display text-7xl font-bold text-muted-foreground/30 group-hover:text-lime-foreground/40">
              0{i + 1}
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold">{t}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground group-hover:text-lime-foreground/80">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Board() {
  const filters = ["Todas", "Supermercado", "Farmácia", "Restaurante", "Padaria"];
  const [active, setActive] = useState("Todas");
  return (
    <section id="diarias" className="scroll-mt-16 bg-ink py-24 text-primary-foreground lg:py-32">
      <div className={wrap}>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-4 text-sm font-medium text-primary-foreground/60">02 — Diárias abertas</p>
            <h2 className="font-display text-5xl leading-[1] font-bold tracking-tight sm:text-6xl">
              O quadro de turnos <span className="text-lime">ao vivo.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active === f ? "border-lime bg-lime text-lime-foreground" : "border-primary-foreground/20 text-primary-foreground/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shifts
            .filter((s) => active === "Todas" || s.category === active)
            .map((s) => (
            <article key={s.role} className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-card text-card-foreground">
              <div className="relative h-44 overflow-hidden">
                <img src={s.img} alt={s.place} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-medium backdrop-blur">{s.category}</span>
                <span className="absolute top-3 right-3 rounded-full bg-lime px-3 py-1 text-xs font-semibold text-lime-foreground">{s.day}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">{s.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.place}</p>
                <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2"><Clock className="size-4" /> {s.time}</p>
                  <p className="flex items-center gap-2"><MapPin className="size-4" /> {s.area}</p>
                </div>
                <div className="mt-auto flex items-end justify-between border-t border-border pt-5 mt-6">
                  <div>
                    <p className="text-xs text-muted-foreground">Diária</p>
                    <p className="font-display text-2xl font-bold">R$ {s.pay}</p>
                  </div>
                  <a href="#comecar" aria-label={`Candidatar-se: ${s.role}`} className="grid size-11 place-items-center rounded-full bg-ink text-primary-foreground transition-colors group-hover:bg-lime group-hover:text-lime-foreground">
                    <ArrowUpRight className="size-5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a href="#comecar" className="mt-10 inline-flex items-center gap-2 font-medium text-lime">
          Ver todas as diárias <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function Manifesto() {
  const stats = [
    ["12 mil", "profissionais cadastrados"],
    ["1.800", "estabelecimentos"],
    ["4,8", "nota média dos turnos"],
  ];
  const reasons = [
    ["Contato direto", "Empresa e profissional conversam sem intermediário e sem taxa de agência."],
    ["Perto de casa", "Filtre por distância, categoria e remuneração antes de se candidatar."],
    ["Quem é quem", "Perfil com experiência e avaliações dos dois lados, antes de fechar o turno."],
    ["Grátis para quem trabalha", "Profissional não paga nada para ver diárias e se candidatar."],
  ];
  return (
    <section id="porque" className={`${wrap} scroll-mt-20 py-24 lg:py-32`}>
      <p className="mb-4 text-sm font-medium text-muted-foreground">03 — Por que Zup</p>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
        <h2 className="font-display text-5xl leading-[1] font-bold tracking-tight text-balance sm:text-6xl">
          Sem agência, sem taxa escondida, sem grupo de WhatsApp lotado.
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty lg:pb-3">
          Só quem precisa de alguém hoje e quem quer trabalhar hoje — frente a frente.
        </p>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {reasons.map(([t, d]) => (
            <li key={t} className="rounded-[1.75rem] bg-card p-7">
              <span className="grid size-9 place-items-center rounded-full bg-lime text-lime-foreground">
                <Check className="size-4" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{t}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{d}</p>
            </li>
          ))}
        </ul>
        <div className="relative min-h-[440px] overflow-hidden rounded-[1.75rem] lg:col-span-5">
          <img
            src={why}
            alt="Profissional organizando as prateleiras de um mercado de bairro"
            loading="lazy"
            width={912}
            height={1200}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20" />
          <div className="absolute inset-x-7 bottom-7">
            <p className="font-display text-3xl leading-tight font-bold text-balance text-primary-foreground">
              Em média, 8 minutos até o primeiro interessado.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-px overflow-hidden rounded-[1.75rem] bg-border sm:grid-cols-3">
        {stats.map(([n, l]) => (
          <div key={l} className="bg-background p-10">
            <p className="font-display text-6xl font-bold tracking-tight">{n}</p>
            <p className="mt-3 text-sm text-muted-foreground">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const voices = [
  { q: "Faltou um repositor no sábado às 6h. Às 6h20 eu já tinha três pessoas interessadas.", n: "Marcos Lima", r: "Gerente, Mercado Bom Preço", img: p1 },
  { q: "Escolho os dias que trabalho e tiro uma renda extra perto de casa. Mudou meu mês.", n: "Juliana Reis", r: "Atendente, usa o Zup há 8 meses", img: p2 },
];

function Voices() {
  return (
    <section id="depoimentos" className={`${wrap} scroll-mt-20 pb-24 lg:pb-32`}>
      <p className="mb-10 text-sm font-medium text-muted-foreground">04 — Quem usa</p>
      <div className="grid gap-4 lg:grid-cols-2">
        {voices.map((v, i) => (
          <figure key={v.n} className={`flex flex-col justify-between gap-12 rounded-[1.75rem] p-8 lg:p-10 ${i === 0 ? "bg-lime text-lime-foreground" : "bg-card"}`}>
            <div className="flex gap-1">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" />)}</div>
            <blockquote className="font-display text-2xl leading-snug font-semibold text-balance sm:text-3xl">“{v.q}”</blockquote>
            <figcaption className="flex items-center gap-4">
              <img src={v.img} alt={v.n} className="size-14 rounded-full object-cover" />
              <div>
                <p className="font-semibold">{v.n}</p>
                <p className="text-sm opacity-70">{v.r}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

const faqs = [
  ["O Zup cobra do profissional?", "Não. Criar perfil e se candidatar é sempre grátis para profissionais."],
  ["Como o estabelecimento paga a diária?", "O pagamento é combinado diretamente entre o estabelecimento e o profissional."],
  ["Quais tipos de estabelecimento podem usar?", "Supermercados, padarias, farmácias, restaurantes e qualquer comércio que precise de reforço por turno."],
  ["Em quanto tempo recebo interessados?", "Na maioria das cidades, os primeiros profissionais aparecem em poucos minutos após a publicação."],
];

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="duvidas" className={`${wrap} scroll-mt-20 pb-24 lg:pb-32`}>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="mb-4 text-sm font-medium text-muted-foreground">05 — Dúvidas</p>
          <h2 className="font-display text-5xl leading-[1] font-bold tracking-tight">Perguntas frequentes</h2>
        </div>
        <div className="divide-y divide-border border-y border-border lg:col-span-8">
          {faqs.map(([q, a], i) => (
            <button key={q} onClick={() => setOpen(open === i ? -1 : i)} className="block w-full py-6 text-left">
              <div className="flex items-center justify-between gap-6">
                <span className="font-display text-xl font-semibold">{q}</span>
                <Plus className={`size-5 shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`} />
              </div>
              {open === i && <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="comecar" className={`${wrap} scroll-mt-20 pb-24`}>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="flex min-h-[340px] flex-col justify-between rounded-[2rem] bg-ink p-10 text-primary-foreground">
          <p className="text-sm text-primary-foreground/60">Para profissionais</p>
          <div>
            <h3 className="font-display text-4xl leading-tight font-bold sm:text-5xl">Seu próximo turno<br />está a uma rua.</h3>
            <a href="#top" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 font-medium text-lime-foreground">
              Criar perfil grátis <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
        <div className="flex min-h-[340px] flex-col justify-between rounded-[2rem] bg-lime p-10 text-lime-foreground">
          <p className="text-sm opacity-70">Para estabelecimentos</p>
          <div>
            <h3 className="font-display text-4xl leading-tight font-bold sm:text-5xl">Cubra a escala<br />ainda hoje.</h3>
            <a href="#top" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-primary-foreground">
              Publicar uma diária <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className={`${wrap} flex flex-col items-start justify-between gap-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center`}>
        <Logo />
        <p>© 2026 Zup. Trabalho por diária, perto de você.</p>
      </div>
      <div className={`${wrap} overflow-hidden`}>
        <p className="font-display text-[22vw] leading-[0.8] font-bold tracking-[-0.06em] text-surface select-none">zup</p>
      </div>
    </footer>
  );
}
