import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ImageReveal } from "@/components/ImageReveal";
import { ProductGrid } from "@/components/ProductGrid";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { content } from "@/data/content";
import { featuredProducts } from "@/data/products";
import { images } from "@/data/images";
import { locations } from "@/data/locations";
import { site } from "@/data/site";
import Link from "next/link";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="intro" className={`section ${styles.intro}`}>
        <div className="container-wide">
          <div className={styles.introGrid}>
            <ScrollReveal>
              <h2>{content.intro.heading}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p>{content.intro.body}</p>
              <div className={styles.introCta}>
                <Button href="/about/" variant="light">
                  {content.intro.cta}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.photoBand}>
        <div className={styles.photoMain}>
          <ImageReveal
            src={images.intro.large}
            alt="We Love Coffee kafe iç mekânı"
          />
        </div>
        <div className={styles.photoSide}>
          <ImageReveal
            src={images.intro.detail}
            alt="Espresso bar ve fincanlar"
          />
          <p>İstanbul · iki semt · bir mola</p>
        </div>
      </section>

      <Marquee />

      <section className="section">
        <div className="container-wide">
          <ScrollReveal>
            <SectionHeading
              kicker={content.favorites.kicker}
              title={content.favorites.heading}
              body={content.favorites.body}
            />
          </ScrollReveal>
          <ProductGrid products={featuredProducts} />
          <div className={styles.centerCta}>
            <Button href="/menu/" variant="light">
              Tüm menüyü incele
            </Button>
          </div>
        </div>
      </section>

      <section className={`section-dark ${styles.ritual}`}>
        <div className={styles.ritualMedia}>
          <ImageReveal src={images.about.experience} alt="Kafe tezgâhı" />
        </div>
        <div className={styles.ritualCopy}>
          <ScrollReveal>
            <p className="kicker">Ritual</p>
            <h2>{content.ritual.quote}</h2>
            <p>{content.ritual.body}</p>
            <Button href="/locations/" variant="ghost">
              Şubeleri gör
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <ScrollReveal>
            <SectionHeading kicker="Şubeler" title="Where we are." />
          </ScrollReveal>
          <div className={styles.locs}>
            {locations.map((loc, i) => (
              <ScrollReveal key={loc.id} delay={i * 0.08} className={styles.loc}>
                <Link href="/locations/">
                  <div className={styles.locMedia}>
                    <ImageReveal src={loc.image} alt={loc.name} />
                  </div>
                  <div className={styles.locMeta}>
                    <h3>{loc.name}</h3>
                    <p>
                      {loc.district} · {loc.city}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.insta}`}>
        <div className="container-wide">
          <ScrollReveal>
            <SectionHeading
              kicker="Instagram"
              title={content.instagram.heading}
            />
          </ScrollReveal>
          <GalleryGrid items={images.gallery.slice(0, 4)} compact />
          <div className={styles.centerCta}>
            <Button href={site.instagram.url} variant="light" external>
              {content.instagram.cta}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
