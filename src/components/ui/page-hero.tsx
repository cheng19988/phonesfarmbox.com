import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";

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

/** Hero assets are pre-exported WebP (PNG sources excluded from Vercel deploy). */
function HeroImage({ src, ...props }: ComponentProps<typeof Image>) {
  const path = typeof src === "string" ? src : "";
  const skipOptimizer =
    path.includes("/hero-import/") || path.includes("/factory/deploy-");
  return <Image src={src} unoptimized={skipOptimizer} quality={95} {...props} />;
}

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

  /* Homepage: full-bleed banner — image spans the viewport, copy overlaid on the left. */
  if (isHome && isLight && image) {
    return (
      <section className="relative overflow-hidden border-b border-slate-200 min-h-[520px] sm:min-h-[600px] md:min-h-[72vh] lg:min-h-[78vh]">
        <HeroImage
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-[62%_center]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/95 via-32% to-white/40 to-50% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/15" />

        <div className="relative container-wide flex flex-col justify-center min-h-[520px] sm:min-h-[600px] md:min-h-[72vh] lg:min-h-[78vh] py-12 md:py-16 lg:py-20">
          <div className="max-w-xl lg:max-w-[34rem]">
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

  const leftTextHero = isLight && image;

  return (
    <section
      className={`relative overflow-hidden border-b border-slate-200 ${
        isHome ? "min-h-[78vh] md:min-h-[82vh]" : "py-16 md:py-24 min-h-[320px] md:min-h-[380px]"
      } ${isLight && !image ? "bg-gradient-to-br from-slate-100 to-slate-200" : ""}`}
    >
      {image && (
        <>
          <HeroImage
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
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 via-40% to-transparent to-58%" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
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
