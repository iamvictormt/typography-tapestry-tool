import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, Clock, MapPin } from "lucide-react";
import { brl, fmtDate, type Job } from "@/lib/jobs";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-lime-foreground text-base">z</span>
      zup
    </Link>
  );
}

export function Nav() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <Logo />
      <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
        <Link to="/vagas" className="hover:text-foreground" activeProps={{ className: "text-foreground" }}>Vagas</Link>
        <a href="/#como-funciona" className="hover:text-foreground">Como funciona</a>
        <a href="/#empresas" className="hover:text-foreground">Para empresas</a>
      </nav>
      <div className="flex items-center gap-2">
        <button className="hidden rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-surface sm:block">Entrar</button>
        <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-ink">Criar conta</button>
      </div>
    </header>
  );
}

export function JobCard({ job }: { job: Job }) {
  return (
    <Link
      to="/vagas/$id"
      params={{ id: job.id }}
      className="group flex flex-col justify-between gap-6 rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">{job.category}</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-surface transition-colors group-hover:bg-lime">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold">{job.role}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{job.company} · {job.businessType}</p>
      </div>
      <div className="space-y-2 text-sm text-muted-foreground">
        <p className="flex items-center gap-2"><MapPin className="h-4 w-4" />{job.neighborhood}, {job.city}</p>
        <p className="flex items-center gap-2"><Calendar className="h-4 w-4" />{fmtDate(job.date)}</p>
        <p className="flex items-center gap-2"><Clock className="h-4 w-4" />{job.start} – {job.end}</p>
      </div>
      <div className="flex items-end justify-between border-t border-border pt-4">
        <div>
          <p className="text-xs text-muted-foreground">Diária</p>
          <p className="font-display text-2xl font-bold">{brl(job.pay)}</p>
        </div>
        <span className="text-xs text-muted-foreground">{job.spots} {job.spots > 1 ? "vagas" : "vaga"}</span>
      </div>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl font-bold">zup</p>
          <p className="mt-4 max-w-sm text-sm opacity-70">
            Conectamos estabelecimentos a profissionais para trabalhos por diária ou turno. A plataforma facilita a conexão — não é intermediadora de contratação.
          </p>
        </div>
        <div className="md:col-span-2 text-sm space-y-2">
          <p className="font-semibold">Profissionais</p>
          <Link to="/vagas" className="block opacity-70 hover:opacity-100">Buscar vagas</Link>
          <p className="opacity-70">Criar perfil</p>
        </div>
        <div className="md:col-span-2 text-sm space-y-2">
          <p className="font-semibold">Empresas</p>
          <p className="opacity-70">Publicar diária</p>
          <p className="opacity-70">Cadastro empresarial</p>
        </div>
        <div className="md:col-span-3 text-sm space-y-2">
          <p className="font-semibold">Zup</p>
          <p className="opacity-70">Termos de uso</p>
          <p className="opacity-70">Privacidade</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-primary-foreground/10 px-6 py-6 text-xs opacity-60">© 2026 Zup. Todos os direitos reservados.</div>
    </footer>
  );
}
