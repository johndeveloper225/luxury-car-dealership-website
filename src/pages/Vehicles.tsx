import { useMemo, useState } from "react";
import { PageHeader } from "../components/PageHeader.tsx";
import { VehicleCard } from "../components/VehicleCard.tsx";
import { categories, vehicles, type CategoryFilter } from "../data/vehicles.ts";
import { usePageTitle } from "../lib/usePageTitle.ts";

type PriceBand = "all" | "under-150" | "150-200" | "over-200";
type SortKey = "featured" | "price-asc" | "price-desc" | "name";

function matchesPrice(price: number, band: PriceBand) {
  if (band === "under-150") return price < 150000;
  if (band === "150-200") return price >= 150000 && price <= 200000;
  if (band === "over-200") return price > 200000;
  return true;
}

export function Vehicles() {
  usePageTitle("Our Collection | VÉLORA MOTORS");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [priceBand, setPriceBand] = useState<PriceBand>("all");
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    const next = vehicles.filter((vehicle) => {
      const categoryMatch = category === "All" || vehicle.category === category;
      return categoryMatch && matchesPrice(vehicle.price, priceBand);
    });

    if (sort === "price-asc") next.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") next.sort((a, b) => b.price - a.price);
    if (sort === "name") next.sort((a, b) => a.name.localeCompare(b.name));
    return next;
  }, [category, priceBand, sort]);

  function resetFilters() {
    setCategory("All");
    setPriceBand("all");
    setSort("featured");
  }

  return (
    <>
      <PageHeader
        eyebrow="Inventory"
        title="Our Collection"
        subtitle="Explore vehicles selected for performance, luxury, and individuality."
        image="/images/collection.jpg"
        imageAlt="Matte black Porsche 911 at sunset beside the water"
      />
      <section className="bg-ivory px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 border-b border-ink/10 py-6 lg:flex-row lg:items-end lg:justify-between">
            <div role="group" aria-label="Filter by category" className="flex gap-5 overflow-x-auto pb-1">
              {categories.map((item) => {
                const active = category === item;
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setCategory(item)}
                    className={`shrink-0 border-b pb-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition ${active ? "border-bronze text-ink" : "border-transparent text-stone hover:text-ink"}`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <label className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-stone">
                Price
                <select
                  aria-label="Filter by price"
                  value={priceBand}
                  onChange={(event) => setPriceBand(event.target.value as PriceBand)}
                  className="field min-w-44 py-2 text-sm font-light normal-case tracking-normal text-ink"
                >
                  <option value="all">Any price</option>
                  <option value="under-150">Under $150,000</option>
                  <option value="150-200">$150,000 – $200,000</option>
                  <option value="over-200">Over $200,000</option>
                </select>
              </label>
              <label className="flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-stone">
                Sort
                <select
                  aria-label="Sort vehicles"
                  value={sort}
                  onChange={(event) => setSort(event.target.value as SortKey)}
                  className="field min-w-44 py-2 text-sm font-light normal-case tracking-normal text-ink"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </label>
            </div>
          </div>

          <p className="mt-8 text-sm text-stone" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "vehicle" : "vehicles"}
          </p>

          {filtered.length > 0 ? (
            <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="mt-8 border border-ink/10 px-6 py-20 text-center">
              <p className="font-serif text-4xl font-normal">Nothing matches this selection.</p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-8 inline-flex min-h-12 items-center bg-ink px-7 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ivory transition hover:bg-gold hover:text-ink"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
