import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  size?: "page" | "home";
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  children,
  size = "page",
}: PageHeroProps) {
  const isHome = size === "home";

  return (
    <section className={`relative overflow-hidden border-b border-[var(--border-subtle)] ${isHome ? "min-h-[88vh]" : "py-20 md:py-28"}`}>
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={`object-cover ${isHome ? "opacity-55 scale-105" : "opacity-42"}`}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060a12] via-[#060a12]/92 to-[#060a12]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-transparent to-[#060a12]/40" />
        </>
      )}
      {!image && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--accent-glow)_0%,_transparent_50%)] opacity-30" />}

      <div className={`container-wide relative ${isHome ? "flex flex-col justify-center min-h-[88vh] py-20 md:py-28" : ""}`}>
        {eyebrow && (
          <p className="text-[var(--accent)] text-sm font-medium tracking-wide mb-4">{eyebrow}</p>
        )}
        <h1
          className={`font-bold text-white tracking-tight leading-[1.08] mb-6 ${
            isHome ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl" : "text-4xl md:text-5xl max-w-4xl"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p className={`text-[var(--text-secondary)] leading-relaxed mb-8 ${isHome ? "text-lg md:text-xl max-w-2xl" : "text-lg max-w-2xl"}`}>
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
