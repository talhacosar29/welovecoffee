import type { Metadata } from "next";
import { MenuBoard } from "@/components/MenuBoard";
import { pageMeta } from "@/lib/seo";
import styles from "./menu.module.css";

export const metadata: Metadata = pageMeta(
  "Menü",
  "We Love Coffee menüsü: sıcak ve soğuk kahveler, frappe, milkshake, frozen, bubble tea ve tatlılar. Fiyatlar şubede.",
  "/menu/",
);

export default function MenuPage() {
  return (
    <section className={styles.page}>
      <header className={`container ${styles.hero}`}>
        <p className="kicker">Menü</p>
        <h1>Made with love. Served with character.</h1>
        <p>
          Fiyatlar mevsim ve şubeye göre değişir; listede yer vermiyoruz.
          Güncel lezzetler tezgahta.
        </p>
      </header>
      <div className="container">
        <MenuBoard />
      </div>
    </section>
  );
}
