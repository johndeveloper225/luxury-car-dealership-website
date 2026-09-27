import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { VehicleImage } from "../data/vehicles.ts";

type LightboxProps = {
  images: VehicleImage[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const startX = useRef<number | null>(null);
  const image = images[index];

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onChange((index + 1) % images.length);
      if (event.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [images.length, index, onChange, onClose]);

  if (!image) return null;

  function previous() {
    onChange((index - 1 + images.length) % images.length);
  }

  function next() {
    onChange((index + 1) % images.length);
  }

  return (
    <div
      className="lightbox-in fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label="Vehicle image gallery"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center border border-ivory/30 text-ivory transition hover:border-gold hover:text-gold"
        aria-label="Close gallery"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <div
        className="flex w-full max-w-6xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={(event) => {
          startX.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (startX.current == null) return;
          const endX = event.changedTouches[0]?.clientX ?? startX.current;
          const delta = endX - startX.current;
          if (delta > 48) previous();
          if (delta < -48) next();
          startX.current = null;
        }}
      >
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="frame-in max-h-[70vh] w-full object-contain"
        />
        <div className="mt-6 flex items-center gap-6 text-ivory">
          <button
            type="button"
            onClick={previous}
            className="inline-flex h-11 w-11 items-center justify-center border border-ivory/30 transition hover:border-gold hover:text-gold"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <p className="min-w-16 text-center text-[0.72rem] tracking-[0.22em]">
            {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-11 w-11 items-center justify-center border border-ivory/30 transition hover:border-gold hover:text-gold"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
