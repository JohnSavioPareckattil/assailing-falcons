import { useState, type ImgHTMLAttributes } from "react";

export default function LazyImage({
  webp,
  src,
  alt,
  className,
  loading = "lazy",
  fetchPriority,
}: {
  webp?: string;
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: ImgHTMLAttributes<HTMLImageElement>["fetchPriority"];
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={`lazy-image${className ? ` ${className}` : ""}`}>
      <span className={`lazy-image-skeleton${loaded ? " is-loaded" : ""}`} aria-hidden="true" />
      <picture>
        {webp && <source srcSet={webp} type="image/webp" />}
        <img
          src={src}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          onLoad={() => setLoaded(true)}
          className={loaded ? "is-loaded" : undefined}
        />
      </picture>
    </span>
  );
}
