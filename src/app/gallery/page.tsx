import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Button } from "@/components/Button";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import styles from "./gallery.module.css";

export const metadata: Metadata = pageMeta(
  "Galeri",
  "We Love Coffee galerisi: kahve, iç mekân, tatlı ve İstanbul’dan anlar. Instagram’da bizi takip edin.",
  "/gallery/",
);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Galeri"
        title="Moments, not just cups."
        lead="Kahve, tatlı, ışık, insanlar. Hikâye fincanın etrafında."
        image={images.about.philosophy}
        alt="Fincan tutan eller"
      />
      <section className={`section ${styles.page}`}>
        <div className="container-wide">
          <GalleryGrid />
          <div className={styles.cta}>
            <Button href={site.instagram.url} variant="light" external>
              Instagram’da bizi takip et
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
