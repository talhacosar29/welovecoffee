"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "./Button";
import { content } from "@/data/content";
import { images } from "@/data/images";
import styles from "./Hero.module.css";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.45]);

  return (
    <section ref={ref} className={styles.hero} aria-label="We Love Coffee">
      <motion.div className={styles.bg} style={{ y, opacity }}>
        <img
          src={images.hero.main}
          alt="Barista latte art dökümü"
          fetchPriority="high"
        />
      </motion.div>
      <div className={styles.veil} />

      <p className={styles.vertical}>{content.hero.vertical}</p>

      <div className={styles.content}>
        <p className={`kicker ${styles.a1}`}>{content.hero.kicker}</p>
        <h1 className={styles.a2}>{content.hero.title}</h1>
        <p className={`${styles.sub} ${styles.a3}`}>
          {content.hero.subtitle}
          <span>{content.hero.bioLine}</span>
        </p>
        <div className={`${styles.ctas} ${styles.a4}`}>
          <Button href="/menu/">{content.hero.ctaPrimary}</Button>
          <Button href="/locations/" variant="ghost">
            {content.hero.ctaSecondary}
          </Button>
        </div>
      </div>

      <aside className={styles.float}>
        <p className={styles.floatLabel}>01 — Latte</p>
        <div className={styles.floatFrame}>
          <img src={images.hero.float} alt="Siyah fincanda latte art" />
        </div>
      </aside>

      <a href="#intro" className={styles.scroll}>
        <span>Kaydır</span>
        <b />
      </a>
    </section>
  );
}
