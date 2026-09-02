"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Clock,
  Play,
  Search,
  ShoppingBag,
  Star,
  X,
} from "lucide-react";

import droneHero from "@/assets/drone-hero.png";
import useCreator from "@/assets/use-creator.jpg";
import useRealestate from "@/assets/use-realestate.jpg";
import usePro from "@/assets/use-pro.jpg";
import expert from "@/assets/expert.jpg";
import moment from "@/assets/moment.jpg";
import videoMain from "@/assets/video-main.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import fpv from "@/assets/fpv.jpg";
import pilot1 from "@/assets/pilot-1.jpg";
import pilot2 from "@/assets/pilot-2.jpg";

/* ---------------------------------- UI ---------------------------------- */

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

function PillButton({
  children,
  variant = "dark",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "dark" | "lime" | "light";
  className?: string;
}) {
  const styles = {
    dark: "bg-primary text-primary-foreground hover:bg-ink",
    lime: "bg-lime text-lime-foreground hover:brightness-95",
    light: "bg-card text-foreground border border-border hover:bg-surface",
  } as const;
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

function ArrowCircle({ className = "" }: { className?: string }) {
  return (
    <span
      className={`grid size-9 shrink-0 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-lime ${className}`}
    >
      <ArrowUpRight className="size-4" />
    </span>
  );
}

/* -------------------------------- Sections ------------------------------- */

function Nav() {
  const links = ["Drones", "Solutions", "Learn", "Reviews", "Support"];
  return (
    <header className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5">
      <a href="#" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
        <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
          <X className="size-4" strokeWidth={3} />
        </span>
        ELEVIQ
      </a>
      <nav className="hidden items-center gap-1 rounded-full border border-border bg-card p-1 lg:flex">
        {links.map((l, i) => (
          <a
            key={l}
            href="#"
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              i === 0 ? "bg-lime text-lime-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground md:flex">
          <Search className="size-4" />
          <span>Search</span>
        </div>
        <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
          <ShoppingBag className="size-4" />
        </span>
        <PillButton variant="light" className="hidden px-5 py-2 sm:inline-flex">
          Explore Models
        </PillButton>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-10 pb-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-5xl leading-[1.02] font-extrabold tracking-tight uppercase sm:text-6xl lg:text-7xl">
            Professional
            <br />
            Drones{" "}
            <span className="text-muted-foreground/50">
              for Every
              <br />
              Flight Mission
            </span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Find your perfect drone. Professional aerial platforms for creators, businesses and pilots —
            discover, compare and buy with total confidence.
          </p>
          <PillButton className="mt-8">
            Find Your Drone
            <span className="grid size-5 place-items-center rounded-full bg-lime text-lime-foreground">
              <X className="size-3" strokeWidth={3} />
            </span>
          </PillButton>
        </div>
        <div className="relative">
          <Image
            src={droneHero}
            alt="Eleviq professional drone with lime accents"
            priority
            className="w-full rounded-3xl object-cover"
          />
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 pr-8">
          <div className="flex -space-x-3">
            {[pilot1, pilot2, expert].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Pilot"
                width={600}
                height={700}
                className="size-10 rounded-full border-2 border-card object-cover"
              />
            ))}
          </div>
          <div className="text-xs">
            <div className="flex items-center gap-1 font-semibold">
              <Star className="size-3.5 fill-lime text-lime" /> 4.9
              <span className="font-normal text-muted-foreground">· 1,200+ reviews</span>
            </div>
            <p className="text-muted-foreground">Trusted by 5,000+ Pilots</p>
          </div>
        </div>
        <div className="flex items-center gap-6 rounded-2xl border border-border bg-card p-4 pr-8">
          <div>
            <p className="font-display text-2xl font-bold">50+</p>
            <p className="text-xs text-muted-foreground">Curated Models</p>
          </div>
          <BadgeCheck className="size-5 text-lime" />
        </div>
        <div className="flex items-center gap-6 rounded-2xl bg-lime p-4 pr-8 text-lime-foreground">
          <div>
            <p className="font-display text-2xl font-bold">15min</p>
            <p className="text-xs font-medium">Expert Response</p>
          </div>
          <BadgeCheck className="size-5" />
        </div>
      </div>
    </section>
  );
}

const useCases = [
  {
    img: useCreator,
    title: "Content Creators",
    tags: ["4K Video", "Smart Tracking", "Easy to Fly"],
  },
  {
    img: useRealestate,
    title: "Business & Real Estate",
    tags: ["Stable Footage", "High Resolution", "Reliable Flight"],
  },
  {
    img: usePro,
    title: "Professionals",
    tags: ["Long Flight Time", "Advanced Sensors", "Pro Workflow"],
  },
];

function UseCases() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20">
      <Tag>Who is this for</Tag>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_3fr]">
        <div>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Built for
            <br />
            Every Way
            <br />
            of Flying
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Whether you're creating content, flying FPV, running a business or working professionally —
            discover drones tailored to your workflow.
          </p>
          <div className="mt-8 flex gap-2">
            <span className="grid size-10 place-items-center rounded-full border border-border bg-card">
              <ArrowLeft className="size-4" />
            </span>
            <span className="grid size-10 place-items-center rounded-full border border-border bg-card">
              <ArrowRight className="size-4" />
            </span>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {useCases.map((c) => (
            <article key={c.title} className="group flex flex-col">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src={c.img}
                  alt={c.title}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-ink/60 px-3 py-1 text-[11px] font-medium text-primary-foreground backdrop-blur"
                    >
                      {t}
                    </span>
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
  "Too Many Models, Too Little Clarity",
  "Afraid of Buying the Wrong Drone",
  "Hard to Understand Technical Specifications",
  "Concerned About Warranty & Support",
];

function Guidance() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20">
      <Tag>Problems & Solutions</Tag>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-xl text-4xl font-bold sm:text-5xl">
          Choosing the Right Drone Shouldn't Be Complicated
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          From comparing specifications to understanding real-world performance, we guide you with total
          clarity.
        </p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          {pains.map((p, i) => (
            <div
              key={p}
              className="flex items-center gap-6 rounded-3xl border border-border bg-card p-5 transition-colors hover:bg-surface"
            >
              <span className="font-display text-4xl font-extrabold text-muted-foreground/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-medium sm:text-base">{p}</p>
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src={expert}
            alt="Eleviq drone expert smiling in a park"
            className="h-full min-h-[420px] w-full object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-card/95 p-5 backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Free consultation
                </p>
                <h3 className="mt-1 font-display text-xl font-bold">Expert Guidance Before You Buy</h3>
                <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">
                  Our specialists recommend setups designed around real-world use cases, not marketing
                  buzzwords.
                </p>
              </div>
              <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold whitespace-nowrap text-lime-foreground">
                15min
              </span>
            </div>
            <PillButton variant="lime" className="mt-4 px-5 py-2 text-xs">
              Explore Models
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Moment() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={moment}
        alt="Pilot looking up at a drone hovering in a dark forest"
        className="h-[70vh] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 pb-14 text-center text-primary-foreground">
        <Tag>A New Perspective</Tag>
        <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
          Extraordinary
          <br />
          Moments
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-primary-foreground/70">
          Every flight is an opportunity to capture something extraordinary.
        </p>
      </div>
    </section>
  );
}

const products = [
  { img: product1, name: "ELEVIQ VISION X", price: "$799", old: "$899", tags: [] },
  {
    img: product2,
    name: "ELEVIQ PULSE X",
    price: "$899",
    old: "$999",
    tags: ["Freestyle", "FPV Racing", "Action Sports"],
  },
  { img: product3, name: "ELEVIQ NOVA PRO", price: "$1,099", old: "$1,299", tags: [] },
  { img: product4, name: "ELEVIQ ATLAS", price: "$1,299", old: "$1,499", tags: [] },
];

function Products() {
  const filters = ["Creators", "FPV", "Business", "Professional", "All Models"];
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 text-center">
      <Tag>Popular Models</Tag>
      <h2 className="mx-auto mt-6 max-w-lg text-4xl font-bold sm:text-5xl">
        Explore Our Best-Selling Drones
      </h2>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        From beginner-friendly models to advanced aerial systems, discover drones carefully selected for
        creators, FPV pilots, businesses and professionals.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              f === "All Models"
                ? "bg-lime text-lime-foreground"
                : "border border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <article key={p.name} className="rounded-3xl border border-border bg-card p-4 text-left">
            <div className="overflow-hidden rounded-2xl bg-surface">
              <Image
                src={p.img}
                alt={p.name}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            {p.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-surface px-3 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="font-display text-sm font-bold">{p.name}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Price <s>{p.old}</s>{" "}
                  <span className="text-sm font-bold text-foreground">{p.price}</span>
                </p>
              </div>
              <span
                className={`grid size-9 place-items-center rounded-full ${
                  i === 1 ? "bg-lime text-lime-foreground" : "bg-primary text-primary-foreground"
                }`}
              >
                <X className="size-4" strokeWidth={3} />
              </span>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center gap-2">
        <span className="grid size-10 place-items-center rounded-full border border-border bg-card">
          <ArrowLeft className="size-4" />
        </span>
        <span className="grid size-10 place-items-center rounded-full border border-border bg-card">
          <ArrowRight className="size-4" />
        </span>
      </div>
    </section>
  );
}

function Learn() {
  const articles = [
    { tag: "Industry", title: "Drone Regulations Explained", time: "7 min Reading Time" },
    { tag: "Comparison", title: "FPV vs Camera Drones", time: "8 min Reading Time" },
    { tag: "Guide", title: "Master Cinematic Drone Shots", time: "6 min Reading Time" },
    { tag: "Tips", title: "5 Mistakes Every Beginner Makes", time: "4 min Reading Time" },
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20">
      <div className="text-center">
        <Tag>Learning Hub</Tag>
        <h2 className="mt-6 text-4xl font-bold sm:text-5xl">Learn Before You Fly</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Explore expert guides, flight tutorials, buying advice and industry insights to choose the right
          drone and fly with confidence.
        </p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-5">
        <article className="relative overflow-hidden rounded-3xl lg:col-span-2">
          <Image
            src={useCreator}
            alt="How to choose your first drone"
            className="h-full min-h-[320px] w-full object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-ink/60 p-5 text-primary-foreground backdrop-blur">
            <span className="rounded-full bg-lime px-3 py-1 text-[11px] font-semibold text-lime-foreground">
              New Guide
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold">How to Choose Your First Drone</h3>
            <p className="mt-1 text-xs text-primary-foreground/70">Expert tips, flight basics, buying advice</p>
          </div>
        </article>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {articles.map((a) => (
            <article
              key={a.title}
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-colors hover:bg-surface"
            >
              <span className="w-fit rounded-full bg-surface px-3 py-1 text-[11px] font-medium text-muted-foreground">
                {a.tag}
              </span>
              <div>
                <h3 className="mt-6 font-display text-lg leading-snug font-bold">{a.title}</h3>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3.5" /> {a.time}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MoreThanStore() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20">
      <Tag>Why Eleviq</Tag>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-4xl font-bold sm:text-5xl">
          More Than
          <br />a Drone Store
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          From choosing the right model to long-term support, we take care of every step of your journey.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl border border-border bg-card p-8">
          <h3 className="font-display text-lg font-bold">Expert Guidance</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Talk to real pilots before you buy. Our specialists help you choose the right drone for your
            goals — no guesswork.
          </p>
          <PillButton variant="dark" className="mt-6 px-5 py-2 text-xs">
            Talk to a Specialist
          </PillButton>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <Image
            src={expert}
            alt="Eleviq specialist"
            className="h-full min-h-[220px] w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8">
          <p className="text-sm font-medium text-muted-foreground">Average Response Time</p>
          <p className="font-display text-5xl font-extrabold">15 min</p>
        </div>
        <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8">
          <p className="text-sm font-medium text-muted-foreground">Official Warranty</p>
          <p className="font-display text-5xl font-extrabold">
            2 Years <span className="text-2xl text-muted-foreground">Coverage</span>
          </p>
        </div>
        <div className="flex flex-col justify-center rounded-3xl bg-lime p-8 text-lime-foreground">
          <p className="font-display text-4xl font-extrabold">5,000+</p>
          <p className="mt-1 text-sm font-semibold">Pilots Trust Eleviq</p>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <Image
            src={usePro}
            alt="Professional drone pilot on site"
            className="h-full min-h-[220px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Videos() {
  const items = [
    { img: useCreator, tag: "Tutorial", title: "Getting Started with Your First Drone" },
    { img: product1, tag: "Comparison", title: "Vision X vs Nova Pro: Which One?" },
    { img: videoMain, tag: "FPV", title: "FPV Freestyle in the Mountains" },
    { img: product3, tag: "Buying Guide", title: "Everything You Need Before Buying" },
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20">
      <div className="text-center">
        <Tag>Featured Videos</Tag>
        <h2 className="mt-6 text-4xl font-bold sm:text-5xl">See Eleviq Drones in Action</h2>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-5">
        <div className="relative overflow-hidden rounded-3xl lg:col-span-3">
          <Image
            src={videoMain}
            alt="Eleviq Vision X cinematic performance test"
            className="h-full min-h-[360px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <div className="absolute bottom-5 left-5 text-primary-foreground">
            <h3 className="font-display text-2xl font-bold">
              Eleviq Vision X<br />
              Cinematic Performance Test
            </h3>
            <p className="mt-1 text-xs text-primary-foreground/70">
              Stunning aerial footage captured in demanding light conditions.
            </p>
          </div>
          <span className="absolute right-5 bottom-5 grid size-12 place-items-center rounded-full bg-lime text-lime-foreground">
            <Play className="size-5 fill-current" />
          </span>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-2">
          {items.map((v) => (
            <article
              key={v.title}
              className="flex items-center gap-4 rounded-3xl border border-border bg-card p-3 transition-colors hover:bg-surface"
            >
              <Image
                src={v.img}
                alt={v.title}
                width={800}
                height={600}
                className="h-16 w-24 shrink-0 rounded-2xl object-cover"
              />
              <div className="min-w-0">
                <span className="rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                  {v.tag}
                </span>
                <h3 className="mt-1 truncate font-display text-sm font-semibold">{v.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20">
      <Tag>Testimonials</Tag>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-4xl font-bold sm:text-5xl">
          Trusted by Pilots.
          <br />
          Chosen for Every Mission.
        </h2>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          From first-time flyers to professional pilots — our customers trust Eleviq for performance and
          reliability.
        </p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-3">
            {[pilot1, pilot2, expert].map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-3xl">
                <Image
                  src={src}
                  alt="Eleviq pilot"
                  className="aspect-[5/6] w-full object-cover"
                />
                <span className="absolute right-2 bottom-2 flex items-center gap-0.5 rounded-full bg-card px-2 py-0.5 text-[10px] font-semibold">
                  <Star className="size-2.5 fill-lime text-lime" /> 5.0
                </span>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="font-display text-4xl font-extrabold">5,000+</p>
            <p className="mt-1 text-sm text-muted-foreground">Pilots Trust Eleviq</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src={moment}
            alt="Pilot with drone"
            className="h-full min-h-[300px] w-full object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 flex gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-card">
              <ArrowLeft className="size-4" />
            </span>
            <span className="grid size-9 place-items-center rounded-full bg-card">
              <ArrowRight className="size-4" />
            </span>
          </div>
        </div>
        <figure className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8">
          <div>
            <figcaption className="font-display font-bold">John Carter</figcaption>
            <p className="text-xs text-muted-foreground">Professional Photographer</p>
            <blockquote className="mt-6 text-sm leading-relaxed text-muted-foreground">
              "Choosing my first drone felt overwhelming until I found Eleviq. Their recommendations were
              spot on, the delivery was fast, and the support team answered every question I had. I was
              flying confidently within a couple of days."
            </blockquote>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-lime text-lime" />
              ))}
            </div>
            <span className="grid size-9 place-items-center rounded-full bg-lime text-lime-foreground">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </figure>
      </div>
    </section>
  );
}

function FpvCta() {
  const stats = [
    { k: "AI", v: "Precise Control" },
    { k: "10ms", v: "Ultra-Low Response" },
    { k: "4K HDR", v: "Real-Time Transmission" },
  ];
  return (
    <section className="relative overflow-hidden">
      <Image
        src={fpv}
        alt="Pilot wearing FPV goggles under a drone at dusk"
        className="h-[75vh] w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/40" />
      <div className="absolute inset-x-0 bottom-0 pb-14 text-center text-primary-foreground">
        <h2 className="font-display text-4xl font-bold sm:text-6xl">
          Experience Flight
          <br />
          Beyond the Screen.
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-primary-foreground/70">
          True immersion with ultra-low latency and real-time HD transmission.
        </p>
        <div className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-3 px-6">
          {stats.map((s, i) => (
            <div
              key={s.k}
              className={`flex items-center gap-3 rounded-2xl px-5 py-3 text-left ${
                i === 2 ? "bg-lime text-lime-foreground" : "bg-card text-foreground"
              }`}
            >
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

function Footer() {
  const cols = [
    { title: "Explore", links: ["Content Creators", "FPV Pilots", "Business", "Professionals"] },
    { title: "Navigation", links: ["Products", "Learning Hub", "Reviews", "Support"] },
    { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] },
  ];
  return (
    <footer className="mx-auto max-w-[1400px] px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
              <X className="size-4" strokeWidth={3} />
            </span>
            ELEVIQ
          </a>
          <h2 className="mt-6 max-w-md font-display text-4xl font-bold sm:text-5xl">
            Engineered for{" "}
            <span className="text-muted-foreground/50">Every Perspective.</span>
          </h2>
          <PillButton className="mt-8">
            Find Your Drone
            <span className="grid size-5 place-items-center rounded-full bg-lime text-lime-foreground">
              <X className="size-3" strokeWidth={3} />
            </span>
          </PillButton>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-sm font-semibold">Follow Us</h3>
            <div className="mt-4 flex gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground"
                >
                  <ArrowUpRight className="size-3.5" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
        <p>© 2026 Eleviq. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#">Cookie Policy</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
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
      <Videos />
      <Testimonials />
      <FpvCta />
      <Footer />
    </main>
  );
}
