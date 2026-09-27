import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "light" | "dark" | "ghost";

const variants: Record<Variant, string> = {
  light: "bg-ivory text-ink hover:bg-gold",
  dark: "bg-ink text-ivory hover:bg-gold hover:text-ink",
  ghost: "border border-current bg-transparent hover:border-gold hover:text-gold",
};

export function CtaLink({
  to,
  children,
  variant = "light",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex min-h-12 items-center justify-center px-7 py-3 text-center text-[0.72rem] font-medium uppercase tracking-[0.22em] transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
