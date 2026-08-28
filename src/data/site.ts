/**
 * Site-wide configuration.
 * Update URLs, contact details and SEO defaults from this file.
 */
export const site = {
  name: "We Love Coffee",
  shortName: "WLC",
  tagline: "Good coffee. Good people. Good moments.",
  bio: "Bi kahve molasına ne dersin?",
  url: "https://talhacosar29.github.io/welovecoffee",
  locale: "tr_TR",
  instagram: {
    handle: "@welovecoffeeofficiall",
    url: "https://www.instagram.com/welovecoffeeofficiall/",
  },
  phone: {
    display: "+90 545 961 63 85",
    href: "tel:+905459616385",
  },
  email: "", // PLACEHOLDER: add a public email when available
  city: "İstanbul",
} as const;

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/about/", label: "Hikayemiz" },
  { href: "/menu/", label: "Menü" },
  { href: "/locations/", label: "Şubeler" },
  { href: "/gallery/", label: "Galeri" },
  { href: "/contact/", label: "İletişim" },
] as const;

export const seo = {
  defaultTitle: "We Love Coffee | Kahve, Lezzet ve İyi Anlar",
  defaultDescription:
    "We Love Coffee — İstanbul’da sıcak bir kahve molası. Esatpaşa ve Atakent şubelerimizde espresso, latte, frozen ve tatlı. Bi kahve molasına ne dersin?",
};
