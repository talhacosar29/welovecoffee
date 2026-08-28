import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: "8rem", textAlign: "center" }}>
      <p className="kicker">404</p>
      <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", margin: "0.8rem 0 1rem" }}>
        Sayfa bulunamadı.
      </h1>
      <p className="muted" style={{ marginBottom: "1.8rem" }}>
        Belki bir kahve molası iyidir.
      </p>
      <Link href="/" className="link-underline">
        Ana sayfaya dön
      </Link>
    </section>
  );
}
