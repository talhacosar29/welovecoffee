"use client";

import { useMemo, useState } from "react";
import { categories, products, type ProductCategoryId } from "@/data/products";
import styles from "./MenuBoard.module.css";

export function MenuBoard() {
  const [active, setActive] = useState<ProductCategoryId | "all">("all");

  const visible = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  const grouped = useMemo(() => {
    return categories
      .map((cat) => ({
        ...cat,
        items: visible.filter((p) => p.category === cat.id),
      }))
      .filter((g) => g.items.length > 0);
  }, [visible]);

  return (
    <div>
      <div className={styles.navWrap}>
        <nav className={styles.nav} aria-label="Menü kategorileri">
          <button
            className={active === "all" ? styles.active : ""}
            onClick={() => setActive("all")}
          >
            Tümü
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={active === cat.id ? styles.active : ""}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </nav>
      </div>

      {grouped.map((group) => (
        <section key={group.id} className={styles.group} id={group.id}>
          <header className={styles.head}>
            <h2>{group.label}</h2>
            <span>{group.en}</span>
          </header>
          <ul className={styles.list}>
            {group.items.map((item) => (
              <li key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                {item.price ? <b>{item.price}</b> : null}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
