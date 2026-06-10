import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "dark";
  id?: string;
};

const variants = {
  default: "",
  muted: "bg-[var(--surface-muted)] border-y border-[var(--border-subtle)]",
  dark: "bg-[var(--surface-elevated)]",
};

export function Section({ children, className = "", variant = "default", id }: SectionProps) {
  return (
    <section id={id} className={`section ${variants[variant]} ${className}`}>
      <div className="container-wide">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-orange-700 text-xs font-semibold uppercase tracking-[0.2em] mb-3">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[var(--foreground)] tracking-tight leading-[1.1] mb-4">
        {title}
      </h2>
      {description && <p className="text-lg text-[var(--text-secondary)] leading-relaxed">{description}</p>}
    </div>
  );
}
