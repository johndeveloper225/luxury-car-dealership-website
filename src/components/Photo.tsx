import { useState } from "react";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function Photo({ src, alt, className = "", priority = false }: PhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`bg-graphite ${className}`} role="img" aria-label={alt} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
