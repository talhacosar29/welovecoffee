import { images } from "@/data/images";
import { site } from "@/data/site";
import styles from "./GalleryGrid.module.css";

export function GalleryGrid({
  items = images.gallery,
  compact = false,
}: {
  items?: typeof images.gallery | readonly { src: string; alt: string; span: string }[];
  compact?: boolean;
}) {
  return (
    <div className={`${styles.grid} ${compact ? styles.compact : ""}`}>
      {items.map((item) => (
        <a
          key={item.src + item.alt}
          className={`${styles.cell} ${styles[item.span]}`}
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
          <span className={styles.overlay}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" />
            </svg>
          </span>
        </a>
      ))}
    </div>
  );
}
