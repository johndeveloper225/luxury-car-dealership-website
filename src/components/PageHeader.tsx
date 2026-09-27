import { Photo } from "./Photo.tsx";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  tall?: boolean;
};

export function PageHeader({ eyebrow, title, subtitle, image, imageAlt, tall = false }: PageHeaderProps) {
  return (
    <header className={`relative flex items-end overflow-hidden bg-ink text-ivory ${tall ? "min-h-[82vh]" : "min-h-[62vh]"}`}>
      <Photo
        src={image}
        alt={imageAlt}
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/45" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-32 lg:px-10 lg:pb-20">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2.7rem,6vw,5.4rem)] font-normal leading-[0.96] text-balance">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-ivory/75 md:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </header>
  );
}
