import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Footer, Nav, PageHeader, Tag, pill, pillBase } from "@/components/site";
import hero from "@/assets/zup-hero.jpg";
import night from "@/assets/zup-night.jpg";

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "Como funciona o Zup — Da vaga ao contato" },
      { name: "description", content: "Veja como o Zup conecta estabelecimentos e profissionais em seis passos: publicação, candidatura, seleção e contato direto." },
      { property: "og:title", content: "Como funciona o Zup" },
      { property: "og:description", content: "Da vaga ao contato em seis passos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const steps = [
  ["Empresa cria a oportunidade", "Função, data, horário, local, valor e requisitos."],
  ["Vaga é publicada", "A oportunidade passa por validações antes de ir ao ar."],
  ["Profissionais encontram", "Busca por categoria, cidade, data e remuneração."],
  ["Candidatura enviada", "O profissional se candidata em poucos toques."],
  ["Empresa analisa", "Perfis, experiências, funções e localização aproximada."],
  ["Contato direto", "Após a seleção, a conversa segue pelo WhatsApp."],
];

const jobStates = ["Rascunho", "Publicada", "Encerrada"];
const appStates = ["Enviada", "Visualizada", "Selecionada"];

function Flow({ title, items, extra }: { title: string; items: string[]; extra: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8">
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {items.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <span className={`rounded-full px-4 py-2 text-sm font-semibold ${i === items.length - 1 ? "bg-lime text-lime-foreground" : "bg-surface"}`}>{s}</span>
            {i < items.length - 1 && <ArrowRight className="size-4 text-muted-foreground" />}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">{extra}</p>
    </div>
  );
}

function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <PageHeader tag="Como funciona" title={<>Da Vaga ao Contato <span className="text-muted-foreground/50">em Seis Passos</span></>} text="Um fluxo simples para quem precisa de reforço e para quem procura uma oportunidade de renda." />
      <section className="mx-auto grid max-w-[1400px] gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(([t, d], i) => (
          <div key={t} className={`flex flex-col justify-between gap-10 rounded-3xl p-8 ${i === 5 ? "bg-lime text-lime-foreground" : "border border-border bg-card"}`}>
            <span className={`font-display text-5xl font-extrabold ${i === 5 ? "" : "text-muted-foreground/30"}`}>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-display text-xl font-bold">{t}</h3>
              <p className={`mt-2 text-sm ${i === 5 ? "opacity-80" : "text-muted-foreground"}`}>{d}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl">
            <img src={hero} alt="Atendente de padaria" loading="lazy" width={1024} height={1280} className="h-full min-h-[420px] w-full object-cover object-top" />
          </div>
          <div className="flex flex-col gap-4">
            <Tag>Transparência</Tag>
            <h2 className="text-4xl font-bold sm:text-5xl">Acompanhe Cada Etapa</h2>
            <Flow title="Estados da vaga" items={jobStates} extra="Uma vaga também pode ser cancelada ou suspensa pela moderação." />
            <Flow title="Estados da candidatura" items={appStates} extra="Outros estados possíveis: não selecionada e cancelada." />
            <div className="flex items-start gap-3 rounded-3xl bg-surface p-6 text-sm text-muted-foreground">
              <BadgeCheck className="mt-0.5 size-5 shrink-0 text-foreground" />
              A seleção não é contratação formal nem garantia de pagamento. O Zup apenas facilita a conexão entre as partes.
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={night} alt="Profissional olhando o celular" loading="lazy" width={1600} height={912} className="h-[60vh] w-full object-cover" />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-x-0 bottom-0 pb-14 text-center text-primary-foreground">
          <h2 className="font-display text-4xl font-bold sm:text-6xl">Pronto Para Começar?</h2>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/vagas" className={`${pillBase} ${pill.lime}`}>Buscar diárias</Link>
            <Link to="/empresas" className={`${pillBase} ${pill.light}`}>Sou empresa</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
