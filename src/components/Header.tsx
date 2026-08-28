"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/data/site";
import styles from "./Header.module.css";

const lightRoutes = ["/menu"];

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const startsLight = lightRoutes.some((r) => pathname.startsWith(r));
  const solid = scrolled || startsLight || open;
  const invertedLogo = solid;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${solid ? styles.solid : styles.transparent}`}>
      <div className={styles.bar}>
        <Link href="/" className={styles.brand} aria-label="We Love Coffee ana sayfa">
          <Logo className={styles.logo} inverted={invertedLogo} />
          <span className={styles.wordmark}>We Love Coffee</span>
        </Link>

        <nav className={styles.desktop} aria-label="Ana menü">
          {nav.map((item) => {
            const current = pathname.replace(/\/$/, "") || "/";
            const href = item.href.replace(/\/$/, "") || "/";
            const active =
              href === "/" ? current === "/" : current.startsWith(href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${active ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/menu/" className={styles.cta}>
          Menüyü Keşfet
        </Link>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className={styles.mobile}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav aria-label="Mobil menü">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <p className={styles.mobileNote}>Bi kahve molasına ne dersin?</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
