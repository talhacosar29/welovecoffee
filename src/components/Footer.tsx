import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site } from "@/data/site";
import { locations } from "@/data/locations";
import { content } from "@/data/content";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <Logo className={styles.logo} />
          <p className={styles.brand}>We Love Coffee</p>
          <p className={styles.blurb}>{content.footer.blurb}</p>
        </div>

        <div>
          <p className={styles.label}>Keşfet</p>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="link-underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.label}>Şubeler</p>
          <ul>
            {locations.map((loc) => (
              <li key={loc.id}>
                <Link className="link-underline" href="/locations/">
                  {loc.name}
                  <span> · {loc.district}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.label}>İletişim</p>
          <ul>
            <li>
              <a className="link-underline" href={site.phone.href}>
                {site.phone.display}
              </a>
            </li>
            <li>
              <a
                className="link-underline"
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.instagram.handle}
              </a>
            </li>
            <li>
              <span>Esatpaşa · Her gün 08:00—02:00</span>
            </li>
          </ul>
        </div>
      </div>

      <p className={styles.giant} aria-hidden="true">
        WE LOVE COFFEE
      </p>

      <div className={styles.bottom}>
        <p>{content.footer.copyright}</p>
        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
