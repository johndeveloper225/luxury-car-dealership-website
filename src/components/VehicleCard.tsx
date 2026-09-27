import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Vehicle } from "../data/vehicles.ts";
import { formatPrice } from "../lib/format.ts";
import { Photo } from "./Photo.tsx";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="group border border-ink/10 bg-paper shadow-[0_16px_40px_rgba(12,11,10,0.05)] transition duration-500 hover:border-bronze/40">
      <Link
        to={`/vehicles/${vehicle.id}`}
        className="block"
        aria-label={`View details for the ${vehicle.year} ${vehicle.name}`}
      >
        <div className="relative aspect-[3/2] overflow-hidden bg-graphite">
          <Photo
            src={vehicle.images[0]?.src ?? ""}
            alt={vehicle.images[0]?.alt ?? vehicle.name}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="px-5 py-6 md:px-6">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-bronze">{vehicle.style}</p>
          <div className="mt-3 flex items-start justify-between gap-4">
            <h3 className="font-serif text-[1.7rem] font-normal leading-tight text-ink">
              {vehicle.year} {vehicle.name}
            </h3>
            <p className="shrink-0 pt-1 font-serif text-xl text-ink">{formatPrice(vehicle.price)}</p>
          </div>
          <span className="mt-6 inline-flex min-h-11 items-center gap-3 border border-ink/15 px-4 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-ink transition duration-300 group-hover:border-bronze group-hover:text-bronze">
            View Details
            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
