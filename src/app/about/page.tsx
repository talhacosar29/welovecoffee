import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ImageReveal } from "@/components/ImageReveal";
import { Button } from "@/components/Button";
import { content } from "@/data/content";
import { images } from "@/data/images";
import { pageMeta } from "@/lib/seo";
import styles from "./about.module.css";

export const metadata: Metadata = pageMeta(
  "Hikayemiz",
  "We Love Coffee’nin hikâyesi: İstanbul’da kahve, insan ve iyi anlar. Esatpaşa ve Atakent’te sıcak bir mola.",
  "/about/",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker={content.about.heroKicker}
        title={content.about.heroTitle}
        lead={content.about.heroLead}
        image={images.about.hero}
        alt="Kavrulmuş kahve çekirdekleri"
      />

      <section className={`section ${styles.story}`}>
        <div className="container-wide">
          <div className={styles.storyGrid}>
            <ScrollReveal>
              <p className="kicker">{content.about.storyKicker}</p>
              <h2>{content.about.storyTitle}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              {content.about.storyBody.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.split}>
        <div className={styles.splitMedia}>
          <ImageReveal src={images.about.story} alt="Paylaşılan bir kahve masası" />
        </div>
        <div className={styles.splitCopy}>
          <ScrollReveal>
            <h2>{content.about.philosophyTitle}</h2>
            <p>{content.about.philosophyBody}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className={`${styles.split} ${styles.reverse}`}>
        <div className={styles.splitMedia}>
          <ImageReveal src={images.about.coffee} alt="Demlenen kahve" />
        </div>
        <div className={styles.splitCopy}>
          <ScrollReveal>
            <h2>{content.about.coffeeTitle}</h2>
            <p>{content.about.coffeeBody}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.split}>
        <div className={styles.splitMedia}>
          <ImageReveal src={images.about.people} alt="Kafe barı ve espresso makinesi" />
        </div>
        <div className={styles.splitCopy}>
          <ScrollReveal>
            <h2>{content.about.peopleTitle}</h2>
            <p>{content.about.peopleBody}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className={`section-dark ${styles.experience}`}>
        <div className={styles.expMedia}>
          <ImageReveal src={images.about.experience} alt="Kafe tezgâhı" />
        </div>
        <div className={styles.expCopy}>
          <ScrollReveal>
            <p className="kicker">Experience</p>
            <h2>{content.about.experienceTitle}</h2>
            <p>{content.about.experienceBody}</p>
            <Button href="/locations/" variant="ghost">
              Bizi ziyaret et
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
