import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Clock, MapPin, Plus, Star, Check, MessageCircle } from "lucide-react";
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
  const [step, setStep] = useState(0);
  const f = flows[tab];
  const img = tab === "empresa" ? market : p1;
  return (
    <section id="como-funciona" className={`${wrap} scroll-mt-20 py-24 lg:py-32`}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="flex flex-col">
          <p className="mb-4 text-sm font-medium text-muted-foreground">01 — Como funciona</p>
          <h2 className="max-w-xl font-display text-5xl leading-[1] font-bold tracking-tight text-balance sm:text-6xl">
            Três passos. Dos dois lados.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Quem contrata e quem trabalha usam o mesmo Zup — cada um do seu jeito.
          </p>

          <div className="mt-10 inline-flex w-fit rounded-full border border-border bg-card p-1">
            {(Object.keys(flows) as (keyof typeof flows)[]).map((k) => (
              <button
                key={k}
                onClick={() => { setTab(k); setStep(0); }}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  tab === k ? "bg-ink text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {flows[k].label}
              </button>
            ))}
          </div>

          <ol className="mt-8 divide-y divide-border border-y border-border">
            {f.steps.map(([t, d], i) => {
              const on = step === i;
              return (
                <li key={t}>
                  <button onClick={() => setStep(i)} className="flex w-full gap-6 py-6 text-left">
                    <span className={`grid size-12 shrink-0 place-items-center rounded-full font-display text-lg font-bold transition-colors ${on ? "bg-lime text-lime-foreground" : "bg-card text-muted-foreground"}`}>
                      0{i + 1}
                    </span>
                    <span className="flex-1">
                      <span className={`block font-display text-2xl font-semibold transition-colors ${on ? "text-foreground" : "text-muted-foreground"}`}>{t}</span>
                      <span className={`grid transition-all duration-300 ${on ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <span className="overflow-hidden leading-relaxed text-muted-foreground">{d}</span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-ink">
          <img src={img} alt="" className="absolute inset-0 size-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
          <div className="absolute top-6 left-6 rounded-full bg-card/90 px-4 py-2 text-sm font-medium backdrop-blur">
            Passo 0{step + 1} de 03
          </div>
          <div className="absolute inset-x-6 bottom-6">
            <div className="rounded-2xl bg-card p-6 text-card-foreground shadow-xl">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-lime text-lime-foreground"><Check className="size-4" /></span>
                <p className="font-display text-xl font-semibold">{f.steps[step]?.[0]}</p>
              </div>
              <div className="mt-5 flex gap-1.5">
                {f.steps.map((_, i) => (
                  <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-lime" : "bg-muted"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
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
      <p className="mb-4 text-sm font-medium text-muted-foreground">02 — Por que Zup</p>
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
  { q: "Faltou um repositor no sábado às 6h. Às 6h20 eu já tinha três pessoas interessadas.", n: "Marcos Lima", r: "Gerente, Mercado Bom Preço", img: p2 },
  { q: "Escolho os dias que trabalho e tiro uma renda extra perto de casa. Mudou meu mês.", n: "Juliana Reis", r: "Atendente, usa o Zup há 8 meses", img: p1 },
];

function Voices() {
  return (
    <section id="depoimentos" className={`${wrap} scroll-mt-20 pb-24 lg:pb-32`}>
      <p className="mb-4 text-sm font-medium text-muted-foreground">03 — Quem usa</p>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
        <h2 className="font-display text-5xl leading-[1] font-bold tracking-tight text-balance sm:text-6xl">
          Quem já trocou um turno, <span className="text-lime">conta melhor.</span>
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty lg:pb-3">
          Histórias de quem precisou de reforço e de quem quis trabalhar naquele dia.
        </p>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-2">
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
  ["O Zup cobra do profissional?", "Não. Criar perfil, ver as diárias e se candidatar é sempre grátis para quem trabalha."],
  ["Como o estabelecimento paga a diária?", "O pagamento é combinado diretamente entre o estabelecimento e o profissional, antes do turno começar."],
  ["Como escolho quem vai trabalhar?", "Você vê quem se candidatou, compara distância, experiência e avaliação, e conversa direto com quem interessa."],
  ["Preciso ter experiência para me candidatar?", "Depende da diária. Cada anúncio lista os requisitos — tem vaga para quem nunca trabalhou no ramo e vaga que pede prática."],
  ["Em quais cidades o Zup funciona?", "Começamos por São Paulo e abrimos cidades novas a cada mês. Cadastre seu bairro e a gente avisa quando chegar."],
  ["Posso publicar mais de uma diária?", "Sim. Publique quantas precisar e repita uma diária antiga para o mesmo horário da semana seguinte."],
];

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="duvidas" className={`${wrap} scroll-mt-20 py-24 lg:py-32`}>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="mb-4 text-sm font-medium text-muted-foreground">04 — Dúvidas</p>
          <h2 className="font-display text-5xl leading-[1] font-bold tracking-tight text-balance sm:text-6xl">
            Perguntas que todo mundo faz <span className="text-lime">antes do primeiro turno.</span>
          </h2>
        </div>
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty lg:pb-3">
          Se a sua não estiver na lista, é só falar com a gente.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map(([q, a], i) => {
              const on = open === i;
              return (
                <div key={q}>
                  <button
                    onClick={() => setOpen(on ? -1 : i)}
                    aria-expanded={on}
                    className="group flex w-full items-center gap-5 py-6 text-left"
                  >
                    <span className={`font-display text-sm font-bold tabular-nums ${on ? "text-lime" : "text-muted-foreground/50"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`flex-1 font-display text-xl leading-snug font-semibold transition-colors sm:text-2xl ${on ? "text-foreground" : "text-foreground/75 group-hover:text-foreground"}`}>
                      {q}
                    </span>
                    <span className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${on ? "border-lime bg-lime text-lime-foreground" : "border-border text-muted-foreground group-hover:border-foreground/40"}`}>
                      <Plus className={`size-4 transition-transform duration-300 ${on ? "rotate-45" : ""}`} />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-out ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pl-11 leading-relaxed text-muted-foreground">{a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="flex h-full flex-col justify-between gap-10 rounded-[1.75rem] bg-ink p-8 text-primary-foreground lg:p-10">
            <MessageCircle className="size-7 text-lime" />
            <div>
              <h3 className="font-display text-3xl leading-tight font-bold text-balance sm:text-4xl">
                Não achou a sua pergunta?
              </h3>
              <p className="mt-4 max-w-sm leading-relaxed text-primary-foreground/60">
                Conta o que está faltando e a gente responde. Sem formulário longo, sem robô.
              </p>
            </div>
            <a href="#comecar" className="inline-flex w-fit items-center gap-2 rounded-full bg-lime px-6 py-3.5 font-medium text-lime-foreground transition-transform hover:-translate-y-0.5">
              Falar com o Zup <ArrowUpRight className="size-4" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="comecar" className={`${wrap} scroll-mt-20 py-24 lg:py-32`}>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="mb-4 text-sm font-medium text-muted-foreground">05 — Começar</p>
          <h2 className="font-display text-5xl leading-[1] font-bold tracking-tight text-balance sm:text-6xl">
            Escolha o seu lado e <span className="text-lime">comece agora.</span>
          </h2>
        </div>
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty lg:pb-3">
          Dos dois lados, levar menos de dois minutos é o normal.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <article className="group flex flex-col overflow-hidden rounded-[2rem] bg-ink text-primary-foreground">
          <div className="h-52 overflow-hidden lg:h-64">
            <img src={p1} alt="Profissional em loja" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-1 flex-col justify-between gap-10 p-8 lg:p-10">
            <div>
              <p className="text-sm font-medium text-primary-foreground/60">Para profissionais</p>
              <h3 className="mt-4 font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl">
                Seu próximo turno está a uma rua.
              </h3>
              <ul className="mt-7 space-y-3">
                {[
                  "Perfil em dois minutos, sem currículo",
                  "Diárias perto de casa, filtradas por categoria",
                  "Candidate-se e converse direto com o comércio",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-primary-foreground/70">
                    <Check className="mt-1 size-4 shrink-0 text-lime" />
                    <span className="leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#top" className="inline-flex w-fit items-center gap-2 rounded-full bg-lime px-6 py-3.5 font-medium text-lime-foreground transition-transform hover:-translate-y-0.5">
              Criar perfil grátis <ArrowUpRight className="size-4" />
            </a>
          </div>
        </article>

        <article className="group flex flex-col overflow-hidden rounded-[2rem] bg-lime text-lime-foreground">
          <div className="h-52 overflow-hidden lg:h-64">
            <img src={market} alt="Comércio" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-1 flex-col justify-between gap-10 p-8 lg:p-10">
            <div>
              <p className="text-sm font-medium opacity-70">Para estabelecimentos</p>
              <h3 className="mt-4 font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl">
                Cubra a escala ainda hoje.
              </h3>
              <ul className="mt-7 space-y-3">
                {[
                  "Publique função, data, horário e valor",
                  "Veja quem se candidatou, perto ou longe",
                  "Escolha, combine e pague direto",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 opacity-80">
                    <Check className="mt-1 size-4 shrink-0" />
                    <span className="leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#top" className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
              Publicar uma diária <ArrowUpRight className="size-4" />
            </a>
          </div>
        </article>
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
