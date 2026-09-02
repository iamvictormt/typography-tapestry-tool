"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Search } from "lucide-react";

const navLinks = [
  ["Início", "/"],
  ["Explorar", "/explorar"],
  ["Demandas", "/demandas"],
  ["Para proprietários", "/proprietario"],
] as const;

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function LogoMark() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Terrano">
      <Image alt="" width={40} height={40} src="/logo.svg" title="Terrano" className="size-10" priority />
      <span>
        <span className="block font-display text-xl font-extrabold tracking-tight">Terrano</span>
        <span className="block -mt-1 text-[10px] font-black uppercase text-muted-foreground">
          Máquinas que movem o campo
        </span>
      </span>
    </Link>
  );
}

function NavCta() {
  const pathname = usePathname();
  const active = isActivePath(pathname, "/login");

  return (
    <Link
      href="/login"
      data-analytics-event="cta_click"
      data-analytics-label="Nav - Entrar"
      aria-current={active ? "page" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-extrabold transition ${
        active
          ? "bg-lime text-lime-foreground shadow-sm shadow-ink/10"
          : "bg-primary text-primary-foreground hover:bg-ink"
      }`}
    >
      Entrar
      <ArrowRight className="size-4" />
    </Link>
  );
}

export function PublicNav() {
  const pathname = usePathname();
  const isExploreActive = isActivePath(pathname, "/explorar");

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/92 shadow-sm shadow-ink/5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-4">
          <LogoMark />
          <nav className="hidden items-center gap-1 rounded-lg border border-border bg-card p-1 lg:flex" aria-label="Menu principal">
            {navLinks.map(([label, href]) => {
              const active = isActivePath(pathname, href);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-lime text-lime-foreground shadow-sm shadow-ink/10"
                      : "text-muted-foreground hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/explorar"
              aria-label="Buscar máquinas"
              aria-current={isExploreActive ? "page" : undefined}
              className={`grid size-10 place-items-center rounded-lg border border-border transition ${
                isExploreActive
                  ? "bg-lime text-lime-foreground shadow-sm shadow-ink/10"
                  : "bg-card text-foreground hover:bg-surface"
              }`}
              data-analytics-event="nav_search_click"
              data-analytics-label="Buscar máquinas"
            >
              <Search className="size-4" />
            </Link>
            <NavCta />
          </div>
          <button
            className="grid size-10 place-items-center rounded-lg border border-border bg-card lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>
      <div className="h-[73px]" aria-hidden="true" />
    </>
  );
}
