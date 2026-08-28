import styles from "./SectionHeading.module.css";

type Props = {
  kicker?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  body,
  align = "left",
}: Props) {
  return (
    <header className={`${styles.wrap} ${align === "center" ? styles.center : ""}`}>
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {body ? <p className={styles.body}>{body}</p> : null}
    </header>
  );
}
