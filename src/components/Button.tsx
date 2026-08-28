import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "light";
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "solid",
  external,
}: ButtonProps) {
  const className = `${styles.btn} ${styles[variant]}`;
  const content = (
    <>
      <span className={styles.label}>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {content}
    </Link>
  );
}
