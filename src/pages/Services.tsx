import { CtaLink } from "../components/CtaLink.tsx";
import { PageHeader } from "../components/PageHeader.tsx";
import { Reveal } from "../components/Reveal.tsx";
import { SectionIntro } from "../components/SectionIntro.tsx";
import { usePageTitle } from "../lib/usePageTitle.ts";

const services = [
  {
    number: "01",
    title: "Vehicle Sourcing",
    text: "Find a specific vehicle based on the client's requirements.",
  },
  {
    number: "02",
    title: "Vehicle Consultation",
    text: "Personalized guidance when selecting a luxury vehicle.",
  },
  {
    number: "03",
    title: "Trade-In Assistance",
    text: "Help clients explore trade-in opportunities.",
  },
  {
    number: "04",
    title: "Vehicle Inspection",
    text: "Detailed inspection and preparation before delivery.",
  },
  {
    number: "05",
    title: "Concierge Experience",
    text: "Personalized support throughout the vehicle purchasing journey.",
  },
  {
    number: "06",
    title: "After-Sales Support",
    text: "Continued customer assistance after purchase.",
  },
];

export function Services() {
  usePageTitle("Services | VÉLORA MOTORS");

  return (
    <>
      <PageHeader
        eyebrow="Ownership"
        title="Our Services"
        subtitle="A complete automotive experience beyond the showroom."
        image="/images/interior.jpg"
        imageAlt="Mercedes-Benz S-Class cabin with leather seating and a wide dashboard"
      />
      <section className="bg-ivory px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Beyond the showroom"
              title="Considered at every step."
              text="Each service is offered as part of a private client relationship. Nothing here is automated. The work is personal, and it stays with the vehicle and the person who drives it."
            />
          </Reveal>
          <div className="mt-14 grid gap-px bg-ink/10 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 70}>
                <article className="flex h-full flex-col bg-ivory p-8 md:p-10">
                  <p className="font-serif text-3xl text-bronze">{service.number}</p>
                  <h3 className="mt-8 font-serif text-3xl font-normal leading-tight">{service.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-ash">{service.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 border-t border-ink/10 pt-12">
            <p className="max-w-xl font-serif text-3xl font-normal leading-snug">
              To discuss any of these services, speak with the dealership directly.
            </p>
            <div className="mt-8">
              <CtaLink to="/contact" variant="dark">
                Contact the dealership
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
