import Link from "next/link";
import { BadgeCheck, MessageCircle } from "lucide-react";

import { ConversionBeacon } from "@/components/terrano/analytics";
import { PublicNav, Section } from "@/components/terrano/shell";

export const metadata = {
  title: "Obrigado",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThanksPage() {
  return (
    <main className="min-h-screen">
      <ConversionBeacon name="lead_conversion" label="Obrigado - Lead recebido" />
      <PublicNav />
      <Section tone="gray">
        <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-8 text-center sm:p-12">
          <span className="mx-auto grid size-16 place-items-center rounded-lg bg-lime text-lime-foreground">
            <BadgeCheck className="size-8" />
          </span>
          <h1 className="mt-8 font-display text-5xl font-black leading-tight">
            Recebemos seu interesse.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
            Esta é a página de conversão do MVP. Em produção, daqui sairia a notificação interna, CRM, planilha
            ou primeiro contato operacional pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/explorar"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-extrabold text-primary-foreground"
              data-analytics-event="thank_you_next_click"
              data-analytics-label="Explorar máquinas"
            >
              Explorar máquinas
            </Link>
            <a
              href="https://wa.me/550000000000"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-extrabold"
              data-analytics-event="whatsapp_click"
              data-analytics-label="Obrigado - WhatsApp"
            >
              Chamar no WhatsApp
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
