import Link from "next/link";
import type { Product } from "@/data/products";
import { ImageReveal } from "./ImageReveal";
import styles from "./ProductGrid.module.css";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className={styles.grid}>
      {products.map((product, i) => (
        <Link
          key={product.id}
          href="/menu/"
          className={`${styles.item} ${styles[product.featuredSize ?? "small"]}`}
        >
          <div className={styles.media}>
            {product.image ? (
              <ImageReveal src={product.image} alt={product.name} />
            ) : (
              <div className={styles.fallback} />
            )}
            <span className={styles.index}>0{i + 1}</span>
          </div>
          <div className={styles.meta}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
