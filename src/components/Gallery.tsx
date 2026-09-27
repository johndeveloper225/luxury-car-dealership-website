import { useCallback, useState } from "react";
import type { VehicleImage } from "../data/vehicles.ts";
import { Lightbox } from "./Lightbox.tsx";
import { Photo } from "./Photo.tsx";

export function Gallery({ images }: { images: VehicleImage[] }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const current = images[active] ?? images[0];

  if (!current) return null;

  function openAt(index: number) {
    setActive(index);
    setOpen(true);
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => openAt(active)}
        className="block w-full overflow-hidden bg-graphite text-left"
        aria-label="Open image gallery"
      >
        <Photo
          key={current.src}
          src={current.src}
          alt={current.alt}
          priority
          className="frame-in aspect-[16/10] w-full object-cover"
        />
      </button>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => openAt(index)}
            className={`overflow-hidden bg-graphite ${index === active ? "ring-1 ring-bronze" : "opacity-80 hover:opacity-100"}`}
            aria-label={`Open image ${index + 1}`}
          >
            <Photo src={image.src} alt={image.alt} className="aspect-[16/10] w-full object-cover" />
          </button>
        ))}
      </div>
      {open ? (
        <Lightbox images={images} index={active} onClose={close} onChange={setActive} />
      ) : null}
    </div>
  );
}
