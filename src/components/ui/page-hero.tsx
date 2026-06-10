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

function HeroCopy({
  eyebrow,
  title,
  description,
  children,
  isHome,
  isLight,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  isHome: boolean;
  isLight: boolean;
}) {
  return (
    <>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h1
        className={`font-bold tracking-tight leading-[1.08] mb-5 ${
          isLight ? "text-slate-950" : "text-white"
        } ${
          isHome
            ? "text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl"
            : "text-4xl md:text-5xl max-w-4xl"
        }`}
      >
        {title}
      </h1>
      {description && (
        <p
          className={`leading-relaxed mb-8 ${
            isLight ? "text-slate-700" : "text-[var(--text-secondary)]"
          } ${isHome ? "text-base md:text-lg max-w-xl" : "text-lg max-w-2xl"}`}
        >
          {description}
        </p>
      )}
      {children}
    </>
  );
}

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

  /* Homepage: split layout — copy left, product photo right (no floating card on full-bleed bg). */
  if (isHome && isLight && image) {
    return (
      <section className="border-b border-slate-200 bg-gradient-to-b from-white via-white to-slate-50/80">
        <div className="container-wide py-10 sm:py-14 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <HeroCopy
                eyebrow={eyebrow}
                title={title}
                description={description}
                isHome={isHome}
                isLight={isLight}
              >
                {children}
              </HeroCopy>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[16/10] sm:aspect-[5/3] lg:aspect-[4/3] xl:aspect-[16/11] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-lg shadow-slate-300/40">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover object-center lg:object-[68%_center]"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const leftTextHero = isLight && image;

  return (
    <section
      className={`relative overflow-hidden border-b border-slate-200 ${
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
              isLight ? "object-[75%_center]" : "object-center opacity-55 scale-105"
            } ${isLight ? "opacity-100 scale-100" : ""}`}
            priority
            sizes="100vw"
          />
          {isLight ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-white/97 via-white/85 via-45% to-transparent to-72%" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
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
            ? "container-wide py-16 md:py-24"
            : `container-wide ${isHome ? "flex flex-col justify-center min-h-[78vh] md:min-h-[82vh] py-16 md:py-24" : ""}`
        }`}
      >
        <div className={leftTextHero ? "max-w-xl md:max-w-2xl" : undefined}>
          <HeroCopy
            eyebrow={eyebrow}
            title={title}
            description={description}
            isHome={isHome}
            isLight={isLight}
          >
            {children}
          </HeroCopy>
        </div>
      </div>
    </section>
  );
}
