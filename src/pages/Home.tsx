import { CtaLink } from "../components/CtaLink.tsx";
import { Photo } from "../components/Photo.tsx";
import { Reveal } from "../components/Reveal.tsx";
import { SectionIntro } from "../components/SectionIntro.tsx";
import { VehicleCard } from "../components/VehicleCard.tsx";
import { featuredVehicles } from "../data/vehicles.ts";
import { usePageTitle } from "../lib/usePageTitle.ts";

const reasons = [
  {
    number: "01",
    title: "Curated Collection",
    text: "Exceptional vehicles selected with precision.",
  },
  {
    number: "02",
    title: "Personal Service",
    text: "A personalized experience from consultation to delivery.",
  },
  {
    number: "03",
    title: "Vehicle Expertise",
    text: "Knowledge and attention to every detail.",
  },
  {
    number: "04",
    title: "Exceptional Standards",
    text: "Quality throughout every stage of ownership.",
  },
];

export function Home() {
  usePageTitle("VÉLORA MOTORS | Driven by Excellence.");

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-ink text-ivory">
        <Photo
          src="/images/hero.jpg"
          alt="Matte black Mercedes-AMG GT parked at a harbor with yachts"
          priority
          className="absolute inset-0 h-full w-full object-cover object-[center_72%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/55" />
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-24 pt-28 lg:px-10">
          <div className="max-w-3xl">
            <span className="mb-7 block h-px w-12 bg-gold" />
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-gold">VÉLORA MOTORS</p>
            <h1 className="mt-5 font-serif text-[clamp(3.1rem,7vw,6.8rem)] font-normal leading-[0.92] text-balance">
              Driven by
              <br />
              Excellence.
            </h1>
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/80 md:text-lg">
              Discover a curated collection of exceptional vehicles designed for those who expect more.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CtaLink to="/vehicles">Explore Collection</CtaLink>
              <CtaLink to="/about" variant="ghost" className="text-ivory">
                Our Story
              </CtaLink>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.28em] text-ivory/70 lg:left-10">
          <span className="scroll-line block h-12 w-px bg-ivory/60" aria-hidden="true" />
          Scroll
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Featured"
              title="The Collection"
              text="A carefully selected collection of vehicles defined by performance, craftsmanship, and presence."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {featuredVehicles.map((vehicle, index) => (
              <Reveal key={vehicle.id} delay={index * 80}>
                <VehicleCard vehicle={vehicle} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
          <div className="relative min-h-[420px] lg:col-span-7 lg:min-h-[680px]">
            <Photo
              src="/images/showroom.jpg"
              alt="Black Range Rover Autobiography in a quiet indoor setting"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center bg-ivory px-6 py-16 lg:col-span-5 lg:px-14 lg:py-20">
            <Reveal>
              <SectionIntro
                eyebrow="The House"
                title="More Than a Dealership."
                text="From the moment you discover your vehicle to the moment you drive away, every detail of the VÉLORA experience is designed around you."
              />
              <div className="mt-10">
                <CtaLink to="/experience" variant="dark">
                  Discover Our Experience
                </CtaLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro eyebrow="The Difference" title="Why VÉLORA" />
          </Reveal>
          <div className="mt-14 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 70}>
                <article className="h-full bg-paper px-6 py-10 md:px-8">
                  <p className="font-serif text-3xl text-bronze">{reason.number}</p>
                  <h3 className="mt-8 font-serif text-3xl font-normal leading-tight">{reason.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ash md:text-base">{reason.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[68vh] items-center justify-center overflow-hidden bg-ink text-center text-ivory">
        <Photo
          src="/images/night.jpg"
          alt="Audi R8 on a city street at dusk"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <Reveal className="relative z-10 px-6 py-24">
          <h2 className="mx-auto max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[0.98] text-balance">
            Your next chapter starts here.
          </h2>
          <div className="mt-10">
            <CtaLink to="/vehicles">Explore Vehicles</CtaLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
