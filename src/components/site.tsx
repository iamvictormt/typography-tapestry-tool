import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Calendar, Clock, MapPin, Menu, X, Zap } from "lucide-react";
import { brl, fmtDate, type Job } from "@/lib/jobs";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

export const pill = {
  dark: "bg-primary text-primary-foreground hover:bg-ink",
  lime: "bg-lime text-lime-foreground hover:brightness-95",
  light: "bg-card text-foreground border border-border hover:bg-surface",
} as const;
export const pillBase = "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";

export function ArrowCircle({ className = "" }: { className?: string }) {
  return (
    <span className={`grid size-9 shrink-0 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-lime ${className}`}>
      <ArrowUpRight className="size-4" />
    </span>
  );
}

export function Mark({ className = "size-8" }: { className?: string }) {
  return (
    <span className={`grid place-items-center rounded-lg bg-primary text-lime ${className}`}>
      <Zap className="size-4 fill-current" strokeWidth={2.5} />
    </span>
  );
}

const links = [
  { to: "/vagas", label: "Vagas" },
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/empresas", label: "Empresas" },
  { to: "/dicas", label: "Dicas" },
  { to: "/depoimentos", label: "Depoimentos" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-[1400px] items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
          <Mark /> zup
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-border bg-card p-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "bg-lime !text-lime-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden rounded-full px-4 py-2 text-sm font-semibold hover:bg-surface sm:block">Entrar</button>
          <button className={`${pillBase} ${pill.dark} hidden px-5 py-2.5 sm:inline-flex`}>
            Criar conta <ArrowRight className="size-4" />
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Abrir menu" className="grid size-10 place-items-center rounded-full border border-border bg-card lg:hidden">
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-medium hover:bg-surface" activeProps={{ className: "bg-lime text-lime-foreground" }}>
                {l.label}
              </Link>
            ))}
            <button className={`${pillBase} ${pill.dark} mt-2 justify-center`}>Criar conta</button>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ---------------------------- Layout standards ---------------------------- */
/** Container: every section shares the same max width + gutter */
export const container = "mx-auto max-w-[1400px] px-6";
/** Vertical rhythm: every regular section uses the same spacing */
export const sectionY = "py-20 lg:py-28";
/** Type scale */
export const h2Class = "font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl";
export const leadClass = "text-base leading-relaxed text-muted-foreground text-pretty";

/** Standard section heading: tag + title + supporting text (split or centered) */
export function SectionHeader({ tag, title, text, center = false }: { tag: string; title: ReactNode; text?: string; center?: boolean }) {
  if (center)
    return (
      <div className="mx-auto max-w-2xl text-center">
        <Tag>{tag}</Tag>
        <h2 className={`${h2Class} mt-6`}>{title}</h2>
        {text && <p className={`${leadClass} mx-auto mt-5 max-w-lg`}>{text}</p>}
      </div>
    );
  return (
    <div>
      <Tag>{tag}</Tag>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <h2 className={`${h2Class} max-w-2xl`}>{title}</h2>
        {text && <p className={`${leadClass} max-w-md lg:justify-self-end`}>{text}</p>}
      </div>
    </div>
  );
}

/** Page intro matching the LP section headings */
export function PageHeader({ tag, title, text, children }: { tag: string; title: ReactNode; text: string; children?: ReactNode }) {
  return (
    <section className={`${container} pt-16 pb-12 lg:pt-20`}>
      <Tag>{tag}</Tag>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <h1 className="max-w-3xl font-display text-5xl leading-[1.02] font-extrabold tracking-tight text-balance uppercase sm:text-6xl">{title}</h1>
        <p className={`${leadClass} max-w-md lg:justify-self-end`}>{text}</p>
      </div>
      {children}
    </section>
  );
}

export function JobCard({ job }: { job: Job }) {
  return (
    <Link to="/vagas/$id" params={{ id: job.id }} className="group flex flex-col justify-between gap-6 rounded-3xl border border-border bg-card p-6 transition-colors hover:bg-surface">
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">{job.category}</span>
          <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground transition-colors group-hover:bg-lime group-hover:text-lime-foreground">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <h3 className="mt-5 font-display text-xl font-bold">{job.role}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{job.company} · {job.businessType}</p>
      </div>
      <div className="space-y-2 text-sm text-muted-foreground">
        <p className="flex items-center gap-2"><MapPin className="size-4" />{job.neighborhood}, {job.city}</p>
        <p className="flex items-center gap-2"><Calendar className="size-4" />{fmtDate(job.date)}</p>
        <p className="flex items-center gap-2"><Clock className="size-4" />{job.start} – {job.end}</p>
      </div>
      <div className="flex items-end justify-between border-t border-border pt-4">
        <div>
          <p className="text-xs text-muted-foreground">Diária</p>
          <p className="font-display text-2xl font-extrabold">{brl(job.pay)}</p>
        </div>
        <span className="text-xs text-muted-foreground">{job.spots} {job.spots > 1 ? "vagas" : "vaga"}</span>
      </div>
    </Link>
  );
}

export function Footer() {
  const cols = [
    { title: "Profissionais", links: [["Buscar diárias", "/vagas"], ["Como funciona", "/como-funciona"], ["Dicas", "/dicas"]] },
    { title: "Empresas", links: [["Publicar diária", "/empresas"], ["Depoimentos", "/depoimentos"]] },
    { title: "Zup", links: [["Início", "/"], ["Termos de uso", "/"], ["Privacidade", "/"]] },
  ] as const;
  return (
    <footer className="mx-auto max-w-[1400px] px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold"><Mark /> zup</Link>
          <h2 className="mt-6 max-w-md font-display text-4xl font-bold sm:text-5xl">
            Conectando Quem <span className="text-muted-foreground/50">Precisa a Quem Faz.</span>
          </h2>
          <Link to="/vagas" className={`${pillBase} ${pill.dark} mt-8`}>
            Encontrar diárias
            <span className="grid size-5 place-items-center rounded-full bg-lime text-lime-foreground"><ArrowRight className="size-3" strokeWidth={3} /></span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map(([l, to]) => (
                  <li key={l}><Link to={to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-sm font-semibold">Siga o Zup</h3>
            <div className="mt-4 flex gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground"><ArrowUpRight className="size-3.5" /></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10 max-w-2xl text-xs text-muted-foreground">
        O Zup apenas facilita a conexão entre estabelecimentos e profissionais. A seleção não representa contratação formal nem garantia de pagamento.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
        <p>© 2026 Zup. Todos os direitos reservados.</p>
        <div className="flex gap-6"><span>Cookies</span><span>Privacidade</span><span>Termos de uso</span></div>
      </div>
    </footer>
  );
}
