/**
 * Menu & featured products.
 * Add, rename or hide items here — the UI reads from this file.
 * Prices are omitted until the business publishes them.
 */
import { images } from "./images";

export type ProductCategoryId =
  | "sicak-kahve"
  | "soguk-kahve"
  | "sicak-icecek"
  | "soguk-icecek"
  | "frappe"
  | "milkshake"
  | "frozen"
  | "bubble"
  | "extras";

export type Product = {
  id: string;
  name: string;
  description: string;
  category: ProductCategoryId;
  image?: string;
  featured?: boolean;
  featuredSize?: "large" | "medium" | "small";
  price?: string;
};

export const categories: { id: ProductCategoryId; label: string; en: string }[] = [
  { id: "sicak-kahve", label: "Sıcak Kahveler", en: "Hot Coffee" },
  { id: "soguk-kahve", label: "Soğuk Kahveler", en: "Iced Coffee" },
  { id: "sicak-icecek", label: "Sıcak İçecekler", en: "Hot Drinks" },
  { id: "soguk-icecek", label: "Soğuk İçecekler", en: "Cold Drinks" },
  { id: "frappe", label: "Frappes", en: "Frappes" },
  { id: "milkshake", label: "Milkshakes", en: "Milkshakes" },
  { id: "frozen", label: "Frozens", en: "Frozens" },
  { id: "bubble", label: "Bubble Teas", en: "Bubble Tea" },
  { id: "extras", label: "Tatlı & Extra", en: "Extras" },
];

export const products: Product[] = [
  {
    id: "espresso",
    name: "Espresso",
    description: "Yoğun, ipeksi ve net. Günün ilk ritüeli.",
    category: "sicak-kahve",
    image: images.products.espresso,
    featured: true,
    featuredSize: "large",
  },
  {
    id: "americano",
    name: "Americano",
    description: "Uzun, temiz ve sade. Kahvenin kendisi konuşsun.",
    category: "sicak-kahve",
    image: images.products.americano,
  },
  {
    id: "latte",
    name: "Latte",
    description: "Kadifemsi süt, dengeli espresso. Her saatin kahvesi.",
    category: "sicak-kahve",
    image: images.products.latte,
    featured: true,
    featuredSize: "medium",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Kremamsı köpük, klasik oran. Kısa ve karakterli.",
    category: "sicak-kahve",
    image: images.products.cappuccino,
    featured: true,
    featuredSize: "medium",
  },
  {
    id: "mocha",
    name: "Mocha",
    description: "Espresso ile kakao. Tatlı, sıcak, teselli gibi.",
    category: "sicak-kahve",
    image: images.products.mocha,
    featured: true,
    featuredSize: "small",
  },
  {
    id: "white-mocha",
    name: "White Chocolate Mocha",
    description: "Beyaz çikolata, espresso ve süt. Yumuşak bir kaçış.",
    category: "sicak-kahve",
    image: images.products.whiteMocha,
  },
  {
    id: "caramel-latte",
    name: "Caramel Latte",
    description: "Karamel ve espresso. Kavrulmuş, yuvarlak, tanıdık.",
    category: "sicak-kahve",
    image: images.products.latte,
  },
  {
    id: "vanilla-latte",
    name: "Vanilla Latte",
    description: "Vanilyanın yumuşaklığı, sütün sıcaklığı.",
    category: "sicak-kahve",
    image: images.products.latte,
  },
  {
    id: "chai-latte",
    name: "Chai Tea Latte",
    description: "Baharatlı, kremsi, sarıcı. Misafirlerimizin favorilerinden.",
    category: "sicak-kahve",
    image: images.products.chai,
  },
  {
    id: "filtre",
    name: "Filtre Kahve",
    description: "Sade ve dürüst. Waffle ile de çok yakışır.",
    category: "sicak-kahve",
    image: images.products.filter,
  },
  {
    id: "turk-kahvesi",
    name: "Türk Kahvesi",
    description: "Kısa, köpüklü, meraklı. Bir fincanda sohbet.",
    category: "sicak-kahve",
    image: images.products.espresso,
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    description: "Soğuk süt, espresso, buz. Yazın ritüeli, kışın da.",
    category: "soguk-kahve",
    image: images.products.icedLatte,
    featured: true,
    featuredSize: "small",
  },
  {
    id: "iced-americano",
    name: "Iced Americano",
    description: "Buz gibi, temiz ve uzun.",
    category: "soguk-kahve",
    image: images.products.icedLatte,
  },
  {
    id: "iced-mocha",
    name: "Iced Mocha",
    description: "Soğuk çikolata ve espresso.",
    category: "soguk-kahve",
    image: images.products.mocha,
  },
  {
    id: "iced-caramel",
    name: "Iced Caramel Latte",
    description: "Karamel, süt, buz. Tatlı bir mola.",
    category: "soguk-kahve",
    image: images.products.icedLatte,
  },
  {
    id: "iced-chai",
    name: "Ice Chai Tea Latte",
    description: "Baharatlı chai, soğuk süt. Misafir yorumlarından.",
    category: "soguk-kahve",
    image: images.products.chai,
  },
  {
    id: "sicak-cikolata",
    name: "Sıcak Çikolata",
    description: "Yoğun kakao, kremamsı doku.",
    category: "sicak-icecek",
    image: images.products.mocha,
  },
  {
    id: "chai",
    name: "Chai",
    description: "Tarçın, kakule, zencefil. Fincanda baharat.",
    category: "sicak-icecek",
    image: images.products.chai,
  },
  {
    id: "bitki-cayi",
    name: "Bitki Çayı",
    description: "Sakin bir ara. Mevsim çayları tezgahta.",
    category: "sicak-icecek",
  },
  {
    id: "ice-tea",
    name: "Ice Tea",
    description: "Hafif, ferah, gün boyu.",
    category: "soguk-icecek",
  },
  {
    id: "limonata",
    name: "Limonata",
    description: "Taze, ekşi, buzlu.",
    category: "soguk-icecek",
  },
  {
    id: "portakal",
    name: "Fresh Portakal",
    description: "Sıkma portakal. Güneş gibi.",
    category: "soguk-icecek",
  },
  {
    id: "coffee-frappe",
    name: "Coffee Frappe",
    description: "Buz, espresso, krema. Klasik kaçış.",
    category: "frappe",
    image: images.products.frappe,
  },
  {
    id: "choco-frappe",
    name: "Chocolate Frappe",
    description: "Kakao ve buz. Tatlı bir mola.",
    category: "frappe",
    image: images.products.frappe,
  },
  {
    id: "caramel-frappe",
    name: "Caramel Frappe",
    description: "Karamel, kahve, buz.",
    category: "frappe",
    image: images.products.frappe,
  },
  {
    id: "oreo-frappe",
    name: "Oreo Frappe",
    description: "Bisküvi, süt, buz. Paylaşılası.",
    category: "frappe",
    image: images.products.frappe,
  },
  {
    id: "vanilla-shake",
    name: "Vanilla Milkshake",
    description: "Vanilya, süt, buz. Yumuşak ve dolgun.",
    category: "milkshake",
    image: images.products.milkshake,
  },
  {
    id: "choco-shake",
    name: "Chocolate Milkshake",
    description: "Yoğun çikolata milkshake.",
    category: "milkshake",
    image: images.products.milkshake,
  },
  {
    id: "strawberry-shake",
    name: "Strawberry Milkshake",
    description: "Çilek ve süt. Yaz tadı.",
    category: "milkshake",
    image: images.products.milkshake,
  },
  {
    id: "oreo-shake",
    name: "Oreo Milkshake",
    description: "Bisküvili, kremsi, doyurucu.",
    category: "milkshake",
    image: images.products.milkshake,
  },
  {
    id: "coffee-frozen",
    name: "Coffee Frozen",
    description: "Kahveli frozen. Serin ve yoğun.",
    category: "frozen",
    image: images.products.frozen,
  },
  {
    id: "strawberry-frozen",
    name: "Strawberry Frozen",
    description: "Çilekli frozen. Ferah ve meyvemsi.",
    category: "frozen",
    image: images.products.frozen,
  },
  {
    id: "mango-frozen",
    name: "Mango Frozen",
    description: "Tropik, buzlu, güneşli.",
    category: "frozen",
    image: images.products.frozen,
  },
  {
    id: "classic-boba",
    name: "Classic Milk Tea",
    description: "Sütlü çay, tapioca. Alışkanlık yapan.",
    category: "bubble",
    image: images.products.bubble,
  },
  {
    id: "brown-sugar",
    name: "Brown Sugar Bubble Tea",
    description: "Karamelize şeker, süt, inci.",
    category: "bubble",
    image: images.products.bubble,
  },
  {
    id: "taro-boba",
    name: "Taro Bubble Tea",
    description: "Taro, süt, yumuşak tatlılık.",
    category: "bubble",
    image: images.products.bubble,
  },
  {
    id: "matcha-boba",
    name: "Matcha Bubble Tea",
    description: "Matcha ve inci. Yeşil, kremsi.",
    category: "bubble",
    image: images.products.bubble,
  },
  {
    id: "waffle",
    name: "Waffle",
    description: "Sıcak waffle. Filtre kahve ile de denendi.",
    category: "extras",
    image: images.products.dessert,
  },
  {
    id: "sufle",
    name: "Sufle",
    description: "Sıcak, akan çikolata. Mutlaka deneyin, diyorlar.",
    category: "extras",
    image: images.products.dessert,
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    description: "Günün pastası tezgahta.",
    category: "extras",
    image: images.products.dessert,
  },
  {
    id: "extra-shot",
    name: "Extra Shot",
    description: "Bir shot daha. Karakter için.",
    category: "extras",
  },
];

export const featuredProducts = products.filter((p) => p.featured);
