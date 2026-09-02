"use client";

import { useRouter } from "next/navigation";
import { Send } from "lucide-react";

import { TerranoInput, TerranoMaskedInput, maskPhone } from "@/components/terrano/form-kit";

type LeadFormProps = {
  intent: "demand" | "owner";
  title: string;
  description: string;
  fields: string[];
  submitLabel: string;
};

export function LeadForm({ intent, title, description, fields, submitLabel }: LeadFormProps) {
  const router = useRouter();

  return (
    <form
      className="rounded-lg border border-border bg-card p-5"
      data-analytics-event={intent === "demand" ? "lead_demand_submit" : "lead_owner_submit"}
      data-analytics-label={title}
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const params = new URLSearchParams({
          tipo: intent,
          nome: String(formData.get("nome") ?? ""),
        });
        const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"];

        attributionKeys.forEach((key) => {
          const value =
            new URLSearchParams(window.location.search).get(key) ?? window.localStorage.getItem(`terrano_${key}`);

          if (value) {
            params.set(key, value);
          }
        });

        router.push(`/obrigado?${params.toString()}`);
      }}
    >
      <div className="flex items-start gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-lime text-lime-foreground">
          <Send className="size-5" />
        </span>
        <div>
          <h2 className="font-display text-2xl font-black">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="min-w-0 sm:col-span-2">
          <TerranoInput label="Nome ou empresa" name="nome" required autoComplete="name" className="bg-background" />
        </div>
        <div className="min-w-0">
          <TerranoMaskedInput
            label="WhatsApp"
            name="whatsapp"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            mask={maskPhone}
            className="bg-background"
          />
        </div>
        <div className="min-w-0">
          <TerranoInput label="Cidade e estado" name="localizacao" required autoComplete="address-level2" className="bg-background" />
        </div>
        {fields.map((field) => (
          <div key={field} className="min-w-0">
            <TerranoInput
              label={field}
              name={field
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "_")}
              className="bg-background"
            />
          </div>
        ))}
      </div>
      <button className="mt-5 w-full rounded-lg bg-primary px-5 py-3 text-sm font-extrabold text-primary-foreground">
        {submitLabel}
      </button>
    </form>
  );
}
