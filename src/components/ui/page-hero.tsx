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
  const leftTextHero = isLight && image;

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
            className={`object-cover ${
              isHome && isLight ? "object-[88%_center]" : isLight ? "object-[75%_center]" : "object-center"
            } ${isLight ? "opacity-100 scale-100" : "opacity-55 scale-105"}`}
            priority
            sizes="100vw"
          />
          {isLight ? (
            <>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  isHome
                    ? "from-white from-0% via-white/92 via-38% to-transparent to-62%"
                    : "from-white/97 via-white/82 via-42% to-transparent to-70%"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-[#060a12] via-[#060a12]/92 to-[#060a12]/55" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-transparent to-[#060a12]/40" />
            </>
          )}
        </>
      )}

      <div
        className={`relative ${
          leftTextHero
            ? isHome
              ? "container-wide flex flex-col justify-center min-h-[78vh] md:min-h-[82vh] py-16 md:py-24"
              : "px-5 sm:px-8 lg:px-12 xl:px-16"
            : `container-wide ${isHome ? "flex flex-col justify-center min-h-[78vh] md:min-h-[82vh] py-16 md:py-24" : ""}`
        }`}
      >
        <div
          className={
            leftTextHero
              ? `${
                  isHome
                    ? "max-w-xl lg:max-w-[34rem] xl:max-w-[36rem] lg:ml-6 xl:ml-10"
                    : "max-w-xl md:max-w-2xl mr-auto"
                } rounded-2xl border border-slate-200/90 bg-white/90 backdrop-blur-md shadow-lg shadow-slate-300/40 p-6 sm:p-8`
              : undefined
          }
        >
          {eyebrow && (
            <p className="text-orange-700 text-sm font-semibold tracking-wide mb-4">{eyebrow}</p>
          )}
          <h1
            className={`font-bold tracking-tight leading-[1.08] mb-6 ${
              isLight ? "text-slate-950" : "text-white"
            } ${
              isHome ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl" : "text-4xl md:text-5xl max-w-4xl"
            }`}
          >
            {title}
          </h1>
          {description && (
            <p
              className={`leading-relaxed mb-8 ${
                isLight ? "text-slate-700" : "text-[var(--text-secondary)]"
              } ${isHome ? "text-lg md:text-xl max-w-2xl" : "text-lg max-w-2xl"}`}
            >
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
