import type { Location } from "@/data/locations";
import { ImageReveal } from "./ImageReveal";
import { Button } from "./Button";
import styles from "./LocationCard.module.css";

export function LocationCard({
  location,
  reverse,
}: {
  location: Location;
  reverse?: boolean;
}) {
  return (
    <article className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.media}>
        <ImageReveal
          src={location.image}
          alt={`${location.name} şubesi atmosferi`}
        />
      </div>
      <div className={styles.panel}>
        <p className="kicker">{location.city}</p>
        <h2>{location.name}</h2>
        <p className={styles.district}>{location.district}</p>
        <dl>
          {location.address ? (
            <>
              <dt>Adres</dt>
              <dd>{location.address}</dd>
            </>
          ) : null}
          {location.hours ? (
            <>
              <dt>Saatler</dt>
              <dd>
                {location.hours}
                {location.hoursNote ? (
                  <small>{location.hoursNote}</small>
                ) : null}
              </dd>
            </>
          ) : null}
          {location.phone ? (
            <>
              <dt>Telefon</dt>
              <dd>
                <a href={location.phoneHref}>{location.phone}</a>
              </dd>
            </>
          ) : null}
          {location.note ? (
            <>
              <dt>Not</dt>
              <dd>{location.note}</dd>
            </>
          ) : null}
        </dl>
        <div className={styles.actions}>
          {location.mapsUrl ? (
            <Button href={location.mapsUrl} variant="light" external>
              Google Maps
            </Button>
          ) : null}
          <Button href={location.instagramUrl} variant="light" external>
            Instagram
          </Button>
        </div>
      </div>
    </article>
  );
}
