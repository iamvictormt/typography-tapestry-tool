import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Clock,
  MapPin,
  Star,
  Zap,
  MessageCircle,
  ShieldCheck,
  SlidersHorizontal,
  Heart,
} from "lucide-react";

import hero from "@/assets/zup-hero.jpg";
import market from "@/assets/zup-market.jpg";
import restaurant from "@/assets/zup-restaurant.jpg";
import pharmacy from "@/assets/zup-pharmacy.jpg";
import moment from "@/assets/zup-moment.jpg";
import night from "@/assets/zup-night.jpg";
import p1 from "@/assets/zup-p1.jpg";
import p2 from "@/assets/zup-p2.jpg";
import { brl, fmtDate, jobs } from "@/lib/jobs";
import { ArrowCircle, Footer, Nav, Tag, pill, pillBase } from "@/components/site";

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

/* -------------------------------- Sections ------------------------------- */

function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-10 pb-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-5xl leading-[1.02] font-extrabold tracking-tight uppercase sm:text-6xl lg:text-7xl">
            Diárias
            <br />
            e Turnos{" "}
            <span className="text-muted-foreground/50">
              Perto
              <br />
              de Você
            </span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            O Zup conecta supermercados, padarias, farmácias e restaurantes a profissionais que buscam uma
            oportunidade de renda — de forma rápida, simples e direta.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/vagas" className={`${pillBase} ${pill.dark}`}>
              Encontrar diárias
              <span className="grid size-5 place-items-center rounded-full bg-lime text-lime-foreground">
                <ArrowRight className="size-3" strokeWidth={3} />
              </span>
            </Link>
            <a href="/empresas" className={`${pillBase} ${pill.light}`}>Publicar uma vaga</a>
          </div>
        </div>
        <div className="relative">
          <img src={hero} alt="Atendente sorrindo no balcão de uma padaria" width={1024} height={1280} className="aspect-[4/3] w-full rounded-3xl object-cover object-top" />
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-card/95 p-3 pr-5 backdrop-blur">
            <span className="grid size-9 place-items-center rounded-full bg-lime text-lime-foreground"><BadgeCheck className="size-4" /></span>
            <div className="text-xs">
              <p className="font-semibold">Candidatura selecionada</p>
              <p className="text-muted-foreground">Atendente · Sáb, 06h–14h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 pr-8">
          <div className="flex -space-x-3">
            {[p1, p2, hero].map((src, i) => (
              <img key={i} src={src} alt="Profissional Zup" loading="lazy" width={600} height={700} className="size-10 rounded-full border-2 border-card object-cover object-top" />
            ))}
          </div>
          <div className="text-xs">
            <div className="flex items-center gap-1 font-semibold">
              <Star className="size-3.5 fill-lime text-lime" /> 4.9
              <span className="font-normal text-muted-foreground">· 1.200+ avaliações</span>
            </div>
            <p className="text-muted-foreground">+8 mil profissionais cadastrados</p>
          </div>
        </div>
        <div className="flex items-center gap-6 rounded-2xl border border-border bg-card p-4 pr-8">
          <div>
            <p className="font-display text-2xl font-bold">1.200+</p>
            <p className="text-xs text-muted-foreground">Diárias publicadas</p>
          </div>
          <BadgeCheck className="size-5 text-lime" />
        </div>
        <div className="flex items-center gap-6 rounded-2xl bg-lime p-4 pr-8 text-lime-foreground">
          <div>
            <p className="font-display text-2xl font-bold">24h</p>
            <p className="text-xs font-medium">Para preencher uma vaga</p>
          </div>
          <BadgeCheck className="size-5" />
        </div>
      </div>
    </section>
  );
}

const useCases = [
  { img: market, title: "Supermercados", tags: ["Reposição", "Caixa", "Estoque"] },
  { img: restaurant, title: "Restaurantes & Bares", tags: ["Garçom", "Cozinha", "Eventos"] },
  { img: pharmacy, title: "Farmácias", tags: ["Balconista", "Plantão", "Atendimento"] },
];

function UseCases() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20">
      <Tag>Para quem é</Tag>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_3fr]">
        <div>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Feito para
            <br />
            Negócios que
            <br />
            Não Param
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Padarias, mercados, farmácias, restaurantes e muito mais publicam diárias informando função,
            data, horário, local e remuneração.
          </p>
          <div className="mt-8 flex gap-2">
            <span className="grid size-10 place-items-center rounded-full border border-border bg-card"><ArrowLeft className="size-4" /></span>
            <span className="grid size-10 place-items-center rounded-full border border-border bg-card"><ArrowRight className="size-4" /></span>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {useCases.map((c) => (
            <article key={c.title} className="group flex flex-col">
              <div className="relative overflow-hidden rounded-3xl">
                <img src={c.img} alt={c.title} loading="lazy" width={896} height={1152} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full bg-ink/60 px-3 py-1 text-[11px] font-medium text-primary-foreground backdrop-blur">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <h3 className="font-display font-semibold">{c.title}</h3>
                <ArrowCircle />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const pains = [
  "Funcionário faltou e o movimento não espera",
  "Pico de fim de semana sem equipe suficiente",
  "Grupos de WhatsApp desorganizados para achar gente",
  "Profissionais sem um lugar confiável para achar diárias",
];

function Guidance() {
  return (
    <section id="empresas" className="mx-auto max-w-[1400px] px-6 py-20">
      <Tag>Problemas & Soluções</Tag>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-xl text-4xl font-bold sm:text-5xl">Encontrar Reforço Não Deveria Ser Complicado</h2>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Publique a oportunidade, veja quem tem interesse e converse direto com o profissional escolhido.
        </p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          {pains.map((p, i) => (
            <div key={p} className="flex items-center gap-6 rounded-3xl border border-border bg-card p-5 transition-colors hover:bg-surface">
              <span className="font-display text-4xl font-extrabold text-muted-foreground/30">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm font-medium sm:text-base">{p}</p>
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-3xl">
          <img src={p1} alt="Dona de restaurante sorrindo" loading="lazy" width={768} height={896} className="h-full min-h-[420px] w-full object-cover object-top" />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-card/95 p-5 backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Para estabelecimentos</p>
                <h3 className="mt-1 font-display text-xl font-bold">Publique uma Diária em Minutos</h3>
                <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">
                  Informe função, data, horário, valor e requisitos. Receba candidaturas e selecione quem combina com a vaga.
                </p>
              </div>
              <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold whitespace-nowrap text-lime-foreground">Grátis</span>
            </div>
            <button className={`${pillBase} ${pill.lime} mt-4 px-5 py-2 text-xs`}>Cadastrar empresa</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Moment() {
  return (
    <section className="relative overflow-hidden">
      <img src={moment} alt="Comércio de rua ao entardecer" loading="lazy" width={1600} height={912} className="h-[70vh] w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 pb-14 text-center text-primary-foreground">
        <Tag>Uma nova forma de trabalhar</Tag>
        <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
          Renda Quando
          <br />
          Você Quiser
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-primary-foreground/70">
          Cada turno é uma oportunidade de ganhar, aprender e ser lembrado para a próxima.
        </p>
      </div>
    </section>
  );
}

const catImg: Record<string, string> = { Estoque: market, Caixa: market, Farmácia: pharmacy, Atendimento: hero, Cozinha: restaurant, Limpeza: market };

function Products() {
  const filters = ["Atendimento", "Cozinha", "Estoque", "Farmácia", "Todas"];
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 text-center">
      <Tag>Oportunidades abertas</Tag>
      <h2 className="mx-auto mt-6 max-w-lg text-4xl font-bold sm:text-5xl">Diárias Desta Semana</h2>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        Encontre oportunidades próximas, filtre por categoria e remuneração e candidate-se em poucos toques.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <Link key={f} to="/vagas" search={f === "Todas" ? {} : { categoria: f }} className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${f === "Todas" ? "bg-lime text-lime-foreground" : "border border-border bg-card text-muted-foreground hover:text-foreground"}`}>
            {f}
          </Link>
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {jobs.slice(0, 4).map((j, i) => (
          <Link key={j.id} to="/vagas/$id" params={{ id: j.id }} className="rounded-3xl border border-border bg-card p-4 text-left">
            <div className="overflow-hidden rounded-2xl bg-surface">
              <img src={catImg[j.category] ?? market} alt={j.role} loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {[j.category, fmtDate(j.date), `${j.start}–${j.end}`].map((t) => (
                <span key={t} className="rounded-full bg-surface px-3 py-1 text-[11px] font-medium text-muted-foreground">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate font-display text-sm font-bold">{j.role}</h3>
                <p className="mt-0.5 flex items-center gap-1 truncate text-xs text-muted-foreground">
                  <MapPin className="size-3" /> {j.neighborhood} · <span className="text-sm font-bold text-foreground">{brl(j.pay)}</span>
                </p>
              </div>
              <span className={`grid size-9 shrink-0 place-items-center rounded-full ${i === 1 ? "bg-lime text-lime-foreground" : "bg-primary text-primary-foreground"}`}>
                <ArrowUpRight className="size-4" strokeWidth={3} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/vagas" className={`${pillBase} ${pill.dark} mt-10`}>Ver todas as vagas <ArrowRight className="size-4" /></Link>
    </section>
  );
}

function Learn() {
  const articles = [
    { tag: "Perfil", title: "Como montar um perfil que chama atenção", time: "4 min de leitura" },
    { tag: "Empresas", title: "Como escrever uma vaga clara e atrativa", time: "5 min de leitura" },
    { tag: "Segurança", title: "Boas práticas no contato via WhatsApp", time: "3 min de leitura" },
    { tag: "Dicas", title: "5 atitudes que fazem você ser chamado de novo", time: "4 min de leitura" },
  ];
  return (
    <section id="dicas" className="mx-auto max-w-[1400px] px-6 py-20">
      <div className="text-center">
        <Tag>Central de dicas</Tag>
        <h2 className="mt-6 text-4xl font-bold sm:text-5xl">Prepare-se Para o Próximo Turno</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Guias para profissionais e estabelecimentos aproveitarem o melhor do Zup.
        </p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-5">
        <article className="relative overflow-hidden rounded-3xl lg:col-span-2">
          <img src={p2} alt="Profissional sorrindo" loading="lazy" width={768} height={896} className="h-full min-h-[320px] w-full object-cover object-top" />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-ink/60 p-5 text-primary-foreground backdrop-blur">
            <span className="rounded-full bg-lime px-3 py-1 text-[11px] font-semibold text-lime-foreground">Novo guia</span>
            <h3 className="mt-3 font-display text-2xl font-bold">Sua Primeira Diária no Zup</h3>
            <p className="mt-1 text-xs text-primary-foreground/70">Cadastro, candidatura e o que levar no dia</p>
          </div>
        </article>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {articles.map((a) => (
            <article key={a.title} className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-colors hover:bg-surface">
              <span className="w-fit rounded-full bg-surface px-3 py-1 text-[11px] font-medium text-muted-foreground">{a.tag}</span>
              <div>
                <h3 className="mt-6 font-display text-lg leading-snug font-bold">{a.title}</h3>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground"><Clock className="size-3.5" /> {a.time}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MoreThanStore() {
  const features = [
    { icon: MessageCircle, t: "Contato direto", d: "Após a seleção, empresa e profissional conversam pelo WhatsApp, sem intermediários." },
    { icon: ShieldCheck, t: "Empresas verificadas", d: "Cadastros empresariais revisados e vagas moderadas pela equipe Zup." },
    { icon: SlidersHorizontal, t: "Filtros inteligentes", d: "Busque por categoria, cidade, data e valor da diária." },
    { icon: Heart, t: "Favoritos e histórico", d: "Salve vagas e acompanhe cada candidatura em um só lugar." },
  ];
  const stats = [
    ["24h", "para preencher uma vaga"],
    ["0%", "de taxa para profissionais"],
    ["8 mil+", "profissionais cadastrados"],
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20">
      <Tag>Por que o Zup</Tag>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-4xl font-bold sm:text-5xl">
          Mais que um
          <br />
          Mural de Vagas
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Do anúncio ao primeiro contato, o Zup organiza cada etapa da conexão entre as partes.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.t} className="rounded-3xl border border-border bg-card p-6 transition-colors hover:bg-surface">
            <span className="grid size-11 place-items-center rounded-full bg-lime text-lime-foreground">
              <f.icon className="size-5" />
            </span>
            <h3 className="mt-6 font-display text-lg font-bold">{f.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid divide-y divide-primary-foreground/10 rounded-3xl bg-primary text-primary-foreground sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map(([k, v]) => (
          <div key={v} className="flex items-baseline gap-3 px-8 py-6">
            <span className="font-display text-4xl font-extrabold text-lime">{k}</span>
            <span className="text-sm opacity-70">{v}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const howPaths = [
  {
    label: "Para estabelecimentos",
    title: "Precisa de Reforço?",
    cta: { text: "Publicar uma vaga", to: "/empresas" as const, dark: true },
    steps: [
      {
        t: "Publique a oportunidade",
        d: "Informe função, data, horário, localização, remuneração e requisitos. Leva poucos minutos.",
      },
      {
        t: "Veja os interessados",
        d: "Profissionais próximos se candidatam e você visualiza o perfil de cada um.",
      },
      {
        t: "Converse e escolha",
        d: "Entre em contato direto com quem combina com a vaga e feche o turno.",
      },
    ],
  },
  {
    label: "Para profissionais",
    title: "Procura Renda Extra?",
    cta: { text: "Ver diárias abertas", to: "/vagas" as const, dark: false },
    steps: [
      {
        t: "Crie seu perfil",
        d: "Cadastre-se gratuitamente e conte sua experiência e funções que você domina.",
      },
      {
        t: "Encontre vagas perto de você",
        d: "Descubra diárias e turnos abertos na sua região, para os próximos dias.",
      },
      {
        t: "Candidate-se",
        d: "Filtre por categoria e remuneração e se candidate em poucos toques.",
      },
    ],
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-[1400px] px-6 py-20">
      <div className="text-center">
        <Tag>Como funciona</Tag>
        <h2 className="mx-auto mt-6 max-w-xl text-4xl font-bold sm:text-5xl">
          Simples Para os Dois Lados
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Do anúncio ao primeiro contato, o caminho é curto: publicar, encontrar e conversar.
        </p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {howPaths.map((path, pi) => (
          <article key={path.label} className="flex flex-col rounded-3xl border border-border bg-card p-8">
            <div className="flex items-center justify-between gap-4">
              <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${pi === 1 ? "bg-lime text-lime-foreground" : "bg-surface text-muted-foreground"}`}>
                {path.label}
              </span>
              <h3 className="font-display text-xl font-bold">{path.title}</h3>
            </div>
            <ol className="mt-8 flex flex-1 flex-col gap-6">
              {path.steps.map((s, i) => (
                <li key={s.t} className="flex items-start gap-4">
                  <span className={`grid size-9 shrink-0 place-items-center rounded-full font-display text-sm font-bold ${i === path.steps.length - 1 ? "bg-lime text-lime-foreground" : "bg-surface text-foreground"}`}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display font-bold">{s.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link to={path.cta.to} className={`${pillBase} mt-8 w-fit ${path.cta.dark ? pill.dark : pill.lime}`}>
              {path.cta.text}
              <ArrowRight className="size-4" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Sábado à noite dois garçons faltaram. Publiquei a vaga no Zup de manhã e à tarde já tinha conversado com três pessoas. Hoje uso toda semana para reforçar a equipe.",
    name: "Márcia Andrade",
    role: "Dona da Cantina Nonna Lia",
    side: "Estabelecimento",
    img: p1,
  },
  {
    quote:
      "Preenchi um turno de reposição na terça e no dia seguinte já estava trabalhando. O anúncio dizia data, horário e valor — sem enrolação, sem intermediário.",
    name: "Diego Ferreira",
    role: "Repositor · 4 diárias no Zup",
    side: "Profissional",
    img: p2,
  },
  {
    quote:
      "Precisava de balconista para o plantão de domingo. Em duas horas tinha cinco candidaturas com perfil e experiência. Escolhi e conversei direto pelo WhatsApp.",
    name: "Renata Gomes",
    role: "Farmácia Vida Saudável",
    side: "Estabelecimento",
    img: hero,
  },
  {
    quote:
      "Faço diárias entre um freela e outro. Pelo Zup consigo ver só as vagas do meu bairro, filtrar pelo valor da diária e saber antes se o horário compensa.",
    name: "Camila Duarte",
    role: "Atendente · 11 diárias no Zup",
    side: "Profissional",
    img: p1,
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section id="depoimentos" className="mx-auto max-w-[1400px] px-6 py-20">
      <Tag>Depoimentos</Tag>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-4xl font-bold sm:text-5xl">
          Quem Precisa.
          <br />
          Quem Quer Trabalhar.
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Estabelecimentos e profissionais usam o Zup para se encontrar com mais rapidez e confiança.
        </p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <figure className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 sm:p-10">
          <div>
            <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${t.side === "Profissional" ? "bg-lime text-lime-foreground" : "bg-surface text-muted-foreground"}`}>
              {t.side}
            </span>
            <blockquote className="mt-6 font-display text-xl leading-snug font-bold sm:text-2xl">
              "{t.quote}"
            </blockquote>
          </div>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <figcaption className="flex items-center gap-4">
              <img src={t.img} alt={t.name} loading="lazy" width={200} height={200} className="size-14 rounded-full object-cover object-top" />
              <div>
                <p className="font-display font-bold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
                <div className="mt-1 flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-lime text-lime" />)}</div>
              </div>
            </figcaption>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-muted-foreground">
                {active + 1} / {testimonials.length}
              </span>
              <button onClick={prev} aria-label="Depoimento anterior" className="grid size-10 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-surface">
                <ArrowLeft className="size-4" />
              </button>
              <button onClick={next} aria-label="Próximo depoimento" className="grid size-10 place-items-center rounded-full bg-lime text-lime-foreground transition-transform hover:scale-105">
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </figure>
        <div className="flex flex-col gap-4">
          {testimonials
            .filter((_, i) => i !== active)
            .slice(0, 3)
            .map((x) => (
              <button key={x.name} onClick={() => setActive(testimonials.indexOf(x))} className="flex flex-1 items-center gap-5 rounded-3xl border border-border bg-card p-6 text-left transition-colors hover:bg-surface">
                <img src={x.img} alt={x.name} loading="lazy" width={200} height={200} className="size-14 shrink-0 rounded-2xl object-cover object-top" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="truncate font-display font-bold">{x.name}</p>
                    <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${x.side === "Profissional" ? "bg-lime text-lime-foreground" : "bg-surface text-muted-foreground"}`}>{x.side}</span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">"{x.quote}"</p>
                </div>
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}

function FpvCta() {
  const stats = [
    { k: "Perto", v: "Vagas no seu bairro" },
    { k: "Direto", v: "Contato via WhatsApp" },
    { k: "R$ 0", v: "Para se cadastrar" },
  ];
  return (
    <section className="relative overflow-hidden">
      <img src={night} alt="Profissional olhando o celular em frente a um supermercado" loading="lazy" width={1600} height={912} className="h-[75vh] w-full object-cover" />
      <div className="absolute inset-0 bg-ink/40" />
      <div className="absolute inset-x-0 bottom-0 pb-14 text-center text-primary-foreground">
        <h2 className="font-display text-4xl font-bold sm:text-6xl">
          Sua Próxima Diária
          <br />
          Está a um Toque.
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-primary-foreground/70">
          Crie seu perfil, ative os alertas e receba oportunidades perto de você.
        </p>
        <div className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-3 px-6">
          {stats.map((s, i) => (
            <div key={s.k} className={`flex items-center gap-3 rounded-2xl px-5 py-3 text-left ${i === 2 ? "bg-lime text-lime-foreground" : "bg-card text-foreground"}`}>
              <div>
                <p className="font-display text-lg font-extrabold">{s.k}</p>
                <p className="text-[11px] font-medium opacity-70">{s.v}</p>
              </div>
              <BadgeCheck className="size-4 opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <UseCases />
      <Guidance />
      <Moment />
      <Products />
      <Learn />
      <MoreThanStore />
      <HowItWorks />
      <Testimonials />
      <FpvCta />
      <Footer />
    </main>
  );
}
