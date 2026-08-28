import styles from "./Marquee.module.css";

const items = [
  "Espresso",
  "Latte",
  "Cappuccino",
  "Mocha",
  "Iced Latte",
  "Frappe",
  "Frozen",
  "Bubble Tea",
  "Sufle",
];

export function Marquee() {
  const line = [...items, ...items];
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {line.map((item, i) => (
          <span key={`${item}-${i}`}>
            {item}
            <i> · </i>
          </span>
        ))}
      </div>
    </div>
  );
}
