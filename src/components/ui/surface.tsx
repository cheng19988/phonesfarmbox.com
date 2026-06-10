import type { ReactNode } from "react";

export function Surface({
  children,
  className = "",
  padding = "md",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
}) {
  const pad = { sm: "p-4", md: "p-6", lg: "p-8 md:p-10" }[padding];
  return (
    <div
      className={`rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] ${pad} ${
        hover ? "transition-colors hover:border-[var(--border-accent)] hover:bg-[var(--surface-card-hover)]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function CTABand({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <Surface padding="lg" className="text-center bg-gradient-to-b from-[var(--surface-elevated)] to-[var(--surface-card)] border-[var(--border-accent)]">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-3">{title}</h2>
      {description && <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">{description}</p>}
      <div className="flex flex-wrap justify-center gap-4">{children}</div>
    </Surface>
  );
}
