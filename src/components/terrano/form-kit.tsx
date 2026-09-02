"use client";

import * as React from "react";
import { ChevronDown, Check, Search, SlidersHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FieldShellProps = {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
};

function FieldShell({ label, hint, error, children }: FieldShellProps) {
  return (
    <label className="grid gap-2">
      <span className="flex items-center justify-between gap-3">
        <span className="text-xs font-black uppercase text-muted-foreground">{label}</span>
        {hint && <span className="text-xs font-bold text-muted-foreground/80">{hint}</span>}
      </span>
      {children}
      {error && <span className="text-xs font-bold text-destructive">{error}</span>}
    </label>
  );
}

const fieldClass =
  "h-12 w-full rounded-lg border border-border bg-card px-3 text-sm font-semibold text-foreground shadow-sm shadow-ink/5 outline-none transition placeholder:text-muted-foreground/60 hover:border-muted-foreground/35 focus:border-lime focus:ring-2 focus:ring-lime/45 disabled:cursor-not-allowed disabled:bg-surface disabled:text-muted-foreground";

export function TerranoInput({
  label,
  hint,
  error,
  icon: Icon,
  className,
  ...props
}: React.ComponentProps<"input"> & {
  label: string;
  hint?: string;
  error?: string;
  icon?: typeof Search;
}) {
  return (
    <FieldShell label={label} hint={hint} error={error}>
      <span className="relative block">
        {Icon && <Icon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />}
        <input className={cn(fieldClass, Icon && "pl-10", className)} {...props} />
      </span>
    </FieldShell>
  );
}

export function TerranoMaskedInput({
  mask,
  ...props
}: Omit<React.ComponentProps<typeof TerranoInput>, "onChange" | "value"> & {
  mask: (value: string) => string;
}) {
  const [value, setValue] = React.useState("");

  return (
    <TerranoInput
      {...props}
      value={value}
      onChange={(event) => setValue(mask(event.target.value))}
    />
  );
}

export function TerranoTextarea({
  label,
  hint,
  error,
  className,
  ...props
}: React.ComponentProps<"textarea"> & {
  label: string;
  hint?: string;
  error?: string;
}) {
  return (
    <FieldShell label={label} hint={hint} error={error}>
      <textarea
        className={cn(
          "min-h-32 w-full resize-y rounded-lg border border-border bg-card px-3 py-3 text-sm font-semibold leading-6 text-foreground shadow-sm shadow-ink/5 outline-none transition placeholder:text-muted-foreground/60 hover:border-muted-foreground/35 focus:border-lime focus:ring-2 focus:ring-lime/45",
          className,
        )}
        {...props}
      />
    </FieldShell>
  );
}

export function TerranoSelect({
  label,
  hint,
  name,
  required,
  placeholder,
  options,
  defaultValue,
}: {
  label: string;
  hint?: string;
  name?: string;
  required?: boolean;
  placeholder: string;
  defaultValue?: string;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <FieldShell label={label} hint={hint}>
      <Select name={name} required={required} defaultValue={defaultValue}>
        <SelectTrigger className={cn(fieldClass, "justify-between py-0 font-semibold")}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="rounded-lg border-border bg-card p-1 shadow-xl shadow-ink/10">
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="rounded-md py-2 text-sm font-semibold focus:bg-lime focus:text-lime-foreground"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FieldShell>
  );
}

export function TerranoDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn(fieldClass, "flex items-center justify-between gap-3 text-left")}>
          <span className="flex items-center gap-2">
            <SlidersHorizontal className="size-4 text-lime" />
            Filtros rápidos
          </span>
          <ChevronDown className="size-4 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-64 rounded-lg border-border bg-card p-2 shadow-xl shadow-ink/10">
        <DropdownMenuLabel className="text-xs font-black uppercase text-muted-foreground">Preferências</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked className="rounded-md py-2 font-semibold focus:bg-lime focus:text-lime-foreground">
          Operador incluso
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="rounded-md py-2 font-semibold focus:bg-lime focus:text-lime-foreground">
          Combustível incluso
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked className="rounded-md py-2 font-semibold focus:bg-lime focus:text-lime-foreground">
          Disponível esta semana
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="rounded-md py-2 font-semibold focus:bg-lime focus:text-lime-foreground">
          Limpar filtros
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function TerranoCheckbox({
  label,
  checked = false,
  name,
  required,
  value = "on",
}: {
  label: string;
  checked?: boolean;
  name?: string;
  required?: boolean;
  value?: string;
}) {
  return (
    <label className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm font-semibold text-muted-foreground shadow-sm shadow-ink/5">
      <input
        name={name}
        type="checkbox"
        value={value}
        required={required}
        defaultChecked={checked}
        className="peer sr-only"
      />
      <span
        className={cn(
          "mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border border-border transition peer-checked:border-lime peer-checked:bg-lime peer-checked:text-lime-foreground",
          "peer-checked:[&_svg]:opacity-100",
          checked && "border-lime bg-lime text-lime-foreground",
        )}
      >
        <Check className={cn("size-3.5 opacity-0 transition", checked && "opacity-100")} />
      </span>
      {label}
    </label>
  );
}

export function TerranoRadioGroup() {
  const options = ["Por hora", "Por hectare", "Por diária"];

  return (
    <div className="grid gap-2">
      <p className="text-xs font-black uppercase text-muted-foreground">Cobrança</p>
      <div className="grid gap-2 sm:grid-cols-3">
        {options.map((option, index) => (
          <label
            key={option}
            className={cn(
              "flex h-12 items-center gap-3 rounded-lg border border-border bg-card px-3 text-sm font-black shadow-sm shadow-ink/5",
              index === 1 && "border-lime ring-2 ring-lime/35",
            )}
          >
            <span
              className={cn(
                "grid size-4 place-items-center rounded-full border border-muted-foreground/35",
                index === 1 && "border-lime",
              )}
            >
              {index === 1 && <span className="size-2 rounded-full bg-lime" />}
            </span>
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export function TerranoSwitch({ label, checked = true }: { label: string; checked?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-4 shadow-sm shadow-ink/5">
      <span className="text-sm font-bold text-muted-foreground">{label}</span>
      <span className={cn("flex h-7 w-12 items-center rounded-full p-1 transition", checked ? "bg-lime" : "bg-surface")}>
        <span className={cn("size-5 rounded-full bg-card shadow-sm transition", checked && "translate-x-5")} />
      </span>
    </div>
  );
}

export function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 10) {
    return digits.replace(/^(\d{0,2})(\d{0,4})(\d{0,4}).*/, (_, ddd, first, second) =>
      [ddd && `(${ddd}`, ddd.length === 2 && ") ", first, second && `-${second}`].filter(Boolean).join(""),
    );
  }

  return digits.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
}

export function maskDocument(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 14);

  if (digits.length <= 11) {
    return digits.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2}).*/, (_, a, b, c, d) =>
      [a, b && `.${b}`, c && `.${c}`, d && `-${d}`].filter(Boolean).join(""),
    );
  }

  return digits.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2}).*/, "$1.$2.$3/$4-$5");
}

export function maskCurrency(value: string) {
  const digits = value.replace(/\D/g, "");
  const amount = Number(digits || "0") / 100;

  return amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function maskDate(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 8)
    .replace(/^(\d{2})(\d)/, "$1/$2")
    .replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
}
