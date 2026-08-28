"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import styles from "./ImageReveal.module.css";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
};

export function ImageReveal({ src, alt, className, eager }: Props) {
  const reduce = useReducedMotion();

  return (
    <div className={`${styles.wrap} img-zoom ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        initial={reduce ? false : { scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
