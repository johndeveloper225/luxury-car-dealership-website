import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { CtaLink } from "../components/CtaLink.tsx";
import { Gallery } from "../components/Gallery.tsx";
import { Photo } from "../components/Photo.tsx";
import { Reveal } from "../components/Reveal.tsx";
import { VehicleCard } from "../components/VehicleCard.tsx";
import { getRelatedVehicles, getVehicleById } from "../data/vehicles.ts";
import { formatPrice } from "../lib/format.ts";
import { usePageTitle } from "../lib/usePageTitle.ts";

export function VehicleDetails() {
  const { id } = useParams();
  const vehicle = getVehicleById(id);
  usePageTitle(vehicle ? `${vehicle.year} ${vehicle.name} | VÉLORA MOTORS` : "Vehicle | VÉLORA MOTORS");

  if (!vehicle) {
    return (
      <section className="bg-ivory px-6 pb-28 pt-40">
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-bronze">Collection</p>
          <h1 className="mt-4 font-serif text-5xl font-normal">This vehicle is no longer listed.</h1>
          <div className="mt-8">
            <CtaLink to="/vehicles" variant="dark">
              Back to the collection
            </CtaLink>
          </div>
        </div>
      </section>
    );
  }

  const facts = [
    { label: "Mileage", value: vehicle.mileage },
    { label: "Engine", value: vehicle.engine },
    { label: "Transmission", value: vehicle.transmission },
    { label: "Exterior", value: vehicle.color },
    { label: "Interior", value: vehicle.interior },
    ...vehicle.specs,
  ];
  const related = getRelatedVehicles(vehicle.id);

  return (
    <article className="bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-8 pt-28 lg:grid-cols-12 lg:px-10 lg:pt-32">
        <div className="lg:col-span-7">
          <Link
            to="/vehicles"
            className="mb-6 inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-stone transition hover:text-ink"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            Collection
          </Link>
          <Gallery images={vehicle.images} />
        </div>
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-bronze">{vehicle.style}</p>
          <h1 className="mt-3 font-serif text-[clamp(2.6rem,4vw,4rem)] font-normal leading-[0.98]">
            {vehicle.year} {vehicle.name}
          </h1>
          <p className="mt-5 font-serif text-4xl">{formatPrice(vehicle.price)}</p>
          <p className="mt-6 text-base leading-relaxed text-ash">{vehicle.description}</p>
          <h2 className="mt-10 font-serif text-3xl font-normal">Key specifications</h2>
          <dl className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-start justify-between gap-6 py-3 text-sm">
                <dt className="text-stone">{fact.label}</dt>
                <dd className="max-w-[60%] text-right text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink to={`/contact?vehicle=${vehicle.id}`} variant="dark" className="w-full sm:w-auto">
              Request Information
            </CtaLink>
            <CtaLink to="/contact" variant="ghost" className="w-full text-ink sm:w-auto">
              Contact Dealership
            </CtaLink>
          </div>
        </div>
      </div>

      <section className="relative mt-16 overflow-hidden bg-ink text-ivory">
        <Photo
          src={vehicle.images[1]?.src ?? vehicle.images[0]?.src ?? ""}
          alt={vehicle.images[1]?.alt ?? vehicle.name}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <Reveal className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <h2 className="max-w-xl font-serif text-[clamp(2.6rem,5vw,4.5rem)] font-normal leading-[0.98]">
            Interested in this vehicle?
          </h2>
          <div className="mt-8">
            <CtaLink to={`/contact?vehicle=${vehicle.id}`}>Contact Us</CtaLink>
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl font-normal">More of the collection</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <VehicleCard key={item.id} vehicle={item} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
