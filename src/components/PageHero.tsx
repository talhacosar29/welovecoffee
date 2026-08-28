import styles from "./PageHero.module.css";

type Props = {
  kicker?: string;
  title: string;
  lead?: string;
  image: string;
  alt: string;
};

export function PageHero({ kicker, title, lead, image, alt }: Props) {
  return (
    <section className={styles.hero}>
      <img className={styles.bg} src={image} alt={alt} />
      <div className={styles.veil} />
      <div className={`container ${styles.content}`}>
        {kicker ? <p className="kicker">{kicker}</p> : null}
        <h1>{title}</h1>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
      </div>
    </section>
  );
}
