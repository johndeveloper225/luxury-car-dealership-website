import { Link } from "react-router-dom";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="inline-flex flex-col leading-none" aria-label="VÉLORA MOTORS home">
      <span className={`font-serif tracking-[0.2em] text-ivory ${compact ? "text-2xl" : "text-[1.35rem]"}`}>
        VÉLORA
      </span>
      <span className="mt-1 text-[0.58rem] font-medium tracking-[0.46em] text-gold">MOTORS</span>
    </Link>
  );
}
