type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  text,
  light = false,
  align = "left",
}: SectionIntroProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`text-[0.72rem] font-medium uppercase tracking-[0.32em] ${light ? "text-gold" : "text-bronze"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-[clamp(2.5rem,5vw,4.4rem)] font-normal leading-[0.98] text-balance ${eyebrow ? "mt-4" : ""} ${light ? "text-ivory" : "text-ink"}`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-6 text-base leading-relaxed text-pretty md:text-lg ${light ? "text-ivory/75" : "text-ash"}`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
