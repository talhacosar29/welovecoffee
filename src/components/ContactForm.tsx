"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";
import { content } from "@/data/content";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [sentHint, setSentHint] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`We Love Coffee — ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n${name}\n${phone}\n`,
    );
    if (!site.email) {
      window.open(site.instagram.url, "_blank", "noopener,noreferrer");
      setSentHint(true);
      return;
    }
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSentHint(true);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label>
        İsim
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Telefon
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        Mesaj
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit">{site.email ? "Mesajı Aç" : "Instagram’dan Yaz"}</button>
      <p className={styles.note}>
        {site.email
          ? content.contact.formNote
          : "E-posta henüz yayınlanmadı. Gönderince Instagram hesabımız açılır."}
      </p>
      {sentHint ? (
        <p className={styles.note}>E-posta uygulamanız açılmadıysa Instagram’dan yazabilirsiniz.</p>
      ) : null}
    </form>
  );
}
