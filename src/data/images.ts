/**
 * Central image registry.
 * Replace any file in /public/images and keep these keys stable.
 */
import { withBase } from "@/lib/paths";

const img = (path: string) => withBase(path);

export const images = {
  hero: {
    main: img("/images/hero-pour.jpg"),
    float: img("/images/hero-latte.jpg"),
    grain: img("/images/grain.svg"),
  },
  intro: {
    large: img("/images/people-cafe.jpg"),
    detail: img("/images/espresso-close.jpg"),
  },
  about: {
    hero: img("/images/beans-dark.jpg"),
    story: img("/images/cafe-warm.jpg"),
    coffee: img("/images/pour-over.jpg"),
    people: img("/images/people-cafe.jpg"),
    experience: img("/images/cafe-counter.jpg"),
    philosophy: img("/images/hands-cup.jpg"),
  },
  locations: {
    esatpasa: img("/images/people-cafe.jpg"),
    atakent: img("/images/location-night.jpg"),
  },
  contact: {
    hero: img("/images/contact-cup.jpg"),
  },
  products: {
    espresso: img("/images/product-espresso.jpg"),
    americano: img("/images/product-americano.jpg"),
    latte: img("/images/product-latte.jpg"),
    cappuccino: img("/images/product-cappuccino.jpg"),
    mocha: img("/images/product-mocha.jpg"),
    whiteMocha: img("/images/product-white-mocha.jpg"),
    icedLatte: img("/images/product-iced-latte.jpg"),
    frappe: img("/images/product-frappe.jpg"),
    milkshake: img("/images/product-milkshake.jpg"),
    frozen: img("/images/product-frozen.jpg"),
    bubble: img("/images/product-bubble.jpg"),
    chai: img("/images/product-chai.jpg"),
    dessert: img("/images/product-dessert.jpg"),
    filter: img("/images/product-filter.jpg"),
  },
  gallery: [
    { src: img("/images/gallery-01.jpg"), alt: "Koyu kavrulmuş kahve çekirdekleri", span: "wide" },
    { src: img("/images/gallery-02.jpg"), alt: "Latte art yakın çekim", span: "tall" },
    { src: img("/images/gallery-03.jpg"), alt: "Espresso fincanı", span: "square" },
    { src: img("/images/gallery-04.jpg"), alt: "Kafe iç mekân", span: "wide" },
    { src: img("/images/gallery-05.jpg"), alt: "Soğuk kahve bardağı", span: "square" },
    { src: img("/images/gallery-06.jpg"), alt: "Birlikte kahve molası", span: "tall" },
    { src: img("/images/gallery-07.jpg"), alt: "Tatlı tabağı", span: "square" },
    { src: img("/images/gallery-08.jpg"), alt: "Barista hazırlığı", span: "wide" },
    { src: img("/images/gallery-09.jpg"), alt: "Frappe ve buz", span: "square" },
    { src: img("/images/gallery-10.jpg"), alt: "Sıcak kafe atmosferi", span: "tall" },
    { src: img("/images/gallery-11.jpg"), alt: "Pour over demleme", span: "square" },
    { src: img("/images/gallery-12.jpg"), alt: "Akşam kafe ışıkları", span: "wide" },
  ],
} as const;

export type GallerySpan = (typeof images.gallery)[number]["span"];
