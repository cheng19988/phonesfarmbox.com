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
  /** light = visible product photo background (default). dark = legacy cinematic overlay. */
  theme?: "light" | "dark";
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  children,
  size = "page",
  theme = "light",
}: PageHeroProps) {
  const isHome = size === "home";
  const isLight = theme === "light";

  return (
    <section
      className={`relative overflow-hidden border-b border-[var(--border-subtle)] ${
        isHome ? "min-h-[78vh] md:min-h-[82vh]" : "py-16 md:py-24 min-h-[320px] md:min-h-[380px]"
      } ${isLight && !image ? "bg-gradient-to-br from-slate-100 to-slate-200" : ""}`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={`object-cover ${isHome && isLight ? "object-[72%_center]" : "object-center"} ${isLight ? "opacity-100 scale-100" : "opacity-55 scale-105"}`}
            priority
            sizes="100vw"
          />
          {isLight ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/78 to-white/25 md:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-[#060a12] via-[#060a12]/92 to-[#060a12]/55" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-transparent to-[#060a12]/40" />
            </>
          )}
        </>
      )}

      <div className={`container-wide relative ${isHome ? "flex flex-col justify-center min-h-[78vh] md:min-h-[82vh] py-16 md:py-24" : ""}`}>
        {eyebrow && (
          <p className="text-[var(--accent-strong)] text-sm font-semibold tracking-wide mb-4">{eyebrow}</p>
        )}
        <h1
          className={`font-bold tracking-tight leading-[1.08] mb-6 ${
            isLight ? "text-slate-900" : "text-white"
          } ${
            isHome ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl" : "text-4xl md:text-5xl max-w-4xl"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`leading-relaxed mb-8 ${
              isLight ? "text-slate-600" : "text-[var(--text-secondary)]"
            } ${isHome ? "text-lg md:text-xl max-w-2xl" : "text-lg max-w-2xl"}`}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
