import { CtaLink } from "../components/CtaLink.tsx";
import { PageHeader } from "../components/PageHeader.tsx";
import { Photo } from "../components/Photo.tsx";
import { Reveal } from "../components/Reveal.tsx";
import { SectionIntro } from "../components/SectionIntro.tsx";
import { VehicleCard } from "../components/VehicleCard.tsx";
import { featuredVehicles } from "../data/vehicles.ts";
import { usePageTitle } from "../lib/usePageTitle.ts";

const steps = [
  {
    title: "01 — Discover",
    text: "Begin with a conversation. Tell us how you drive, what you value, and the feeling you want from the road.",
  },
  {
    title: "02 — Explore",
    text: "Spend time with the collection in a quiet showroom, or arrange a private viewing of a specific vehicle.",
  },
  {
    title: "03 — Select",
    text: "Choose with clear guidance on specification, condition, and the details that will matter after delivery.",
  },
  {
    title: "04 — Drive",
    text: "Take delivery of a vehicle prepared to our standard, and continue with support once you have left.",
  },
];

export function Experience() {
  usePageTitle("Experience | VÉLORA MOTORS");

  return (
    <>
      <PageHeader
        eyebrow="The Atelier"
        title="Experience the Extraordinary."
        image="/images/experience.jpg"
        imageAlt="Dark Lamborghini driving on a wet road"
        tall
      />

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-2">
          <div className="relative min-h-[460px]">
            <Photo
              src="/images/showroom.jpg"
              alt="Black Range Rover Autobiography in a quiet indoor setting"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <Reveal className="px-6 py-16 lg:px-14 lg:py-24">
            <SectionIntro eyebrow="Setting" title="The Showroom" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ash md:text-lg">
              A refined environment where clients can explore exceptional vehicles. The room is quiet, the light is
              controlled, and each car is given enough space to be seen properly — without the noise of a typical sales
              floor.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="On the floor"
              title="The Collection"
              text="A few of the vehicles currently receiving clients. Each one was chosen for presence as much as performance."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredVehicles.slice(0, 3).map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-2">
          <Reveal className="order-2 px-6 py-16 lg:order-1 lg:px-14 lg:py-24">
            <SectionIntro eyebrow="Guidance" title="Personal Consultation" />
            <div className="mt-6 max-w-xl space-y-5 text-base leading-relaxed text-ash md:text-lg">
              <p>
                Every client works with a consultant who listens first. The conversation covers how you use a car, the
                specification you prefer, and the feeling you want when you arrive.
              </p>
              <p>
                Recommendations follow from that conversation. There is time to compare, to sit with a vehicle, and to
                decide without pressure. The purchasing experience stays personal from the first appointment through
                delivery.
              </p>
            </div>
          </Reveal>
          <div className="relative order-1 min-h-[460px] lg:order-2">
            <Photo
              src="/images/consultation.jpg"
              alt="Mercedes-Benz S-Class cabin prepared for a private consultation"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-24 text-ivory lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro light eyebrow="How it unfolds" title="The Journey" />
          </Reveal>
          <div className="relative mt-16 grid gap-12 md:grid-cols-4 md:gap-8">
            <span className="absolute left-0 right-0 top-5 hidden h-px bg-gold/40 md:block" aria-hidden="true" />
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <article className="relative">
                  <h3 className="font-serif text-3xl font-normal text-gold">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ivory/70 md:text-base">{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[64vh] items-center justify-center overflow-hidden bg-ink text-center text-ivory">
        <Photo
          src="/images/night.jpg"
          alt="Audi R8 on a city street at dusk"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <Reveal className="relative z-10 px-6 py-24">
          <h2 className="font-serif text-[clamp(2.8rem,6vw,5rem)] font-normal leading-none">Begin Your Journey</h2>
          <div className="mt-10">
            <CtaLink to="/contact">Begin Your Journey</CtaLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
