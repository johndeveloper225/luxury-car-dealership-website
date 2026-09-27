import { PageHeader } from "../components/PageHeader.tsx";
import { Photo } from "../components/Photo.tsx";
import { Reveal } from "../components/Reveal.tsx";
import { SectionIntro } from "../components/SectionIntro.tsx";
import { usePageTitle } from "../lib/usePageTitle.ts";

const standards = [
  {
    title: "Quality",
    text: "Every vehicle is inspected and prepared before it is offered. Condition, finish, and provenance are reviewed with the same care we expect a client to feel on delivery.",
  },
  {
    title: "Integrity",
    text: "Guidance is clear and unhurried. We would rather decline a car than present one that does not meet the standard of the house.",
  },
  {
    title: "Excellence",
    text: "From the first conversation to the care that follows a purchase, the experience is held to the same measure as the automobiles themselves.",
  },
];

export function About() {
  usePageTitle("About | VÉLORA MOTORS");

  return (
    <>
      <PageHeader
        eyebrow="The House"
        title="A Different Standard of Automotive Excellence."
        image="/images/about-hero.jpg"
        imageAlt="White Rolls-Royce coupe parked among palm trees"
        tall
      />

      <section className="bg-ivory px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="mx-auto max-w-4xl">
          <p className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-normal leading-snug text-ink">
            VÉLORA MOTORS was created for people who see a vehicle as more than transportation. We believe exceptional
            automobiles deserve an equally exceptional experience.
          </p>
        </Reveal>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div className="relative min-h-[420px]">
            <Photo
              src="/images/detail.jpg"
              alt="Close view of an Audi headlamp in low light"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <Reveal>
            <SectionIntro eyebrow="Belief" title="Our Philosophy" />
            <p className="mt-8 font-serif text-[clamp(2rem,3vw,3rem)] font-normal leading-tight text-ink">
              Precision. Presence. Personal service.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ash md:text-lg">
              A vehicle should feel considered in every proportion, and the process of acquiring it should feel the
              same. We keep the collection small so attention can stay with the car, and with the person choosing it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <Reveal>
            <SectionIntro eyebrow="Selection" title="Our Approach" />
            <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ash md:text-lg">
              <p>
                Vehicles enter the collection only after a careful review of specification, condition, and character.
                We look for automobiles that will still feel right years from now — not merely those that photograph
                well today.
              </p>
              <p>
                The client experience is equally deliberate. Consultation is personal, appointments are private, and
                each recommendation begins with how you drive and what you expect from the car. From first conversation
                through preparation and delivery, the process stays focused on you.
              </p>
            </div>
          </Reveal>
          <div className="relative min-h-[420px]">
            <Photo
              src="/images/approach.jpg"
              alt="Matte black Porsche 911 at sunset beside the water"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-6 py-24 text-ivory lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro light eyebrow="The Measure" title="Our Standards" />
          </Reveal>
          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
            {standards.map((standard, index) => (
              <Reveal key={standard.title} delay={index * 80}>
                <article className="h-full bg-charcoal p-8 md:p-10">
                  <h3 className="font-serif text-4xl font-normal">{standard.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-ivory/70 md:text-base">{standard.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[50vh] bg-ink">
        <Photo
          src="/images/about-close.jpg"
          alt="Mercedes-Benz S-Class cabin with leather seating and a wide dashboard"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/25" />
      </section>
    </>
  );
}
