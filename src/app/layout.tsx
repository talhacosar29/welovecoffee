import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { defaultMeta } from "@/lib/seo";
import { site } from "@/data/site";
import { withBase } from "@/lib/paths";
import "./globals.css";

const dm = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  ...defaultMeta,
  metadataBase: new URL(site.url),
  applicationName: site.name,
  icons: {
    icon: withBase("/favicon.svg"),
  },
};

export const viewport: Viewport = {
  themeColor: "#1C1714",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${dm.variable} ${cormorant.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          İçeriğe geç
        </a>
        <div
          className="grain"
          aria-hidden="true"
          style={{ backgroundImage: `url("${withBase("/images/grain.svg")}")` }}
        />
        <Header />
        <JsonLd />
        {children}
        <Footer />
      </body>
    </html>
  );
}
