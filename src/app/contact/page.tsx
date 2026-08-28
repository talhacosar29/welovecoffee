import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { content } from "@/data/content";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { locations } from "@/data/locations";
import { pageMeta } from "@/lib/seo";
import styles from "./contact.module.css";

export const metadata: Metadata = pageMeta(
  "İletişim",
  "We Love Coffee ile iletişime geçin. Telefon, Instagram, Esatpaşa ve Atakent şubeleri.",
  "/contact/",
);

export default function ContactPage() {
  const esatpasa = locations[0];

  return (
    <>
      <PageHero
        kicker="İletişim"
        title={content.contact.heading}
        lead={content.contact.lead}
        image={images.contact.hero}
        alt="Espresso fincanı"
      />
      <section className={`section ${styles.page}`}>
        <div className={`container-wide ${styles.grid}`}>
          <div>
            <ul className={styles.facts}>
              <li>
                <span>Telefon</span>
                <a href={site.phone.href}>{site.phone.display}</a>
              </li>
              <li>
                <span>Instagram</span>
                <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                  {site.instagram.handle}
                </a>
              </li>
              <li>
                <span>Esatpaşa</span>
                <p>{esatpasa.address}</p>
                <p>{esatpasa.hours}</p>
              </li>
              <li>
                <span>Atakent</span>
                <p>Ümraniye, İstanbul</p>
                <p>Güncel adres Instagram’da.</p>
              </li>
            </ul>
            <div className={styles.actions}>
              <Button href={esatpasa.mapsUrl ?? "/locations/"} variant="light" external>
                Google Maps
              </Button>
              <Button href={site.instagram.url} variant="light" external>
                Instagram
              </Button>
            </div>
          </div>
          <div>
            <h2>Bir satır yazın.</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
