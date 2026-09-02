import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { PublicNav } from "./public-nav";

export { PublicNav };

export function LogoMark() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Terrano">
      <Image alt="" width={40} height={40} src="/logo.svg" title="Terrano" className="size-10" />
      <span>
        <span className="block font-display text-xl font-extrabold tracking-tight">Terrano</span>
        <span className="block -mt-1 text-[10px] font-black uppercase text-muted-foreground">
          Máquinas que movem o campo
        </span>
      </span>
    </Link>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-bold uppercase text-muted-foreground shadow-sm shadow-ink/5">
      <span className="size-2 rounded-full bg-lime" />
      {children}
    </span>
  );
}

export function PrimaryButton({
  children,
  href,
  light = false,
  analyticsLabel,
}: {
  children: React.ReactNode;
  href: string;
  light?: boolean;
  analyticsLabel?: string;
}) {
  return (
    <Link
      href={href}
      data-analytics-event="cta_click"
      data-analytics-label={analyticsLabel}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-extrabold transition ${
        light
          ? "bg-card text-foreground hover:bg-surface"
          : "bg-primary text-primary-foreground hover:bg-ink"
      }`}
    >
      {children}
      <ArrowRight className="size-4" />
    </Link>
  );
}

export function ImagePanel({
  image,
  title,
  className = "",
}: {
  image: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-surface ${className}`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(31,30,27,0.04), rgba(31,30,27,0.72)), url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      role="img"
      aria-label={title}
    />
  );
}

export function Section({
  children,
  tone = "gray",
  id,
  className = "",
}: {
  children: React.ReactNode;
  tone?: "gray" | "white" | "dark";
  id?: string;
  className?: string;
}) {
  const tones = {
    gray: "bg-background",
    white: "bg-card",
    dark: "bg-primary text-primary-foreground",
  };

  return (
    <section id={id} className={`overflow-hidden border-b border-border ${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-[1400px] px-5 py-20">{children}</div>
    </section>
  );
}

export function StatCard({
  label,
  value,
  icon: Icon,
  badge = "Terrano",
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  badge?: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <Icon className="size-5 text-lime" />
        <span className="rounded-md bg-surface px-2.5 py-1 text-[11px] font-black uppercase text-muted-foreground">
          {badge}
        </span>
      </div>
      <p className="mt-6 font-display text-3xl font-black">{value}</p>
      <p className="mt-1 text-sm font-semibold text-muted-foreground">{label}</p>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  text,
  action,
}: {
  eyebrow: string;
  title: string;
  text: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] sm:text-7xl">{title}</h1>
      </div>
      <div>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">{text}</p>
        {action && <div className="mt-6">{action}</div>}
      </div>
    </div>
  );
}

export function AppShell({
  title,
  role,
  children,
}: {
  title: string;
  role: string;
  children: React.ReactNode;
}) {
  const links = [
    ["Contratante", "/dashboard"],
    ["Proprietário", "/proprietario"],
    ["Admin", "/admin"],
    ["Explorar", "/explorar"],
  ];

  return (
    <main className="min-h-screen bg-background">
      <PublicNav />
      <div className="mx-auto grid max-w-[1400px] gap-5 px-5 py-6 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-lg border border-border bg-card p-3 lg:sticky lg:top-24">
          <div className="px-3 py-4">
            <p className="text-xs font-black uppercase text-lime">{role}</p>
            <h1 className="mt-1 font-display text-2xl font-black">{title}</h1>
          </div>
          <nav className="grid gap-1">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-3 py-2 text-sm font-bold text-muted-foreground transition hover:bg-surface hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <section>{children}</section>
      </div>
    </main>
  );
}
