import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LocationCard } from "@/components/LocationCard";
import { locations } from "@/data/locations";
import { images } from "@/data/images";
import { pageMeta } from "@/lib/seo";
import styles from "./locations.module.css";

export const metadata: Metadata = pageMeta(
  "Şubeler",
  "We Love Coffee şubeleri: Esatpaşa, Ataşehir ve Atakent, Ümraniye. Adres, saat ve yol tarifi.",
  "/locations/",
);

export default function LocationsPage() {
  return (
    <>
      <PageHero
        kicker="Şubeler"
        title="İki semt. Aynı mola."
        lead="Esatpaşa ve Atakent. İstanbul’un Anadolu yakasında kahve."
        image={images.locations.esatpasa}
        alt="Kafe oturma alanı"
      />
      <div className={styles.list}>
        {locations.map((loc, i) => (
          <LocationCard key={loc.id} location={loc} reverse={i % 2 === 1} />
        ))}
      </div>
    </>
  );
}
