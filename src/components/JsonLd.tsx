import { site } from "@/data/site";
import { locations } from "@/data/locations";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: site.name,
    url: site.url,
    image: `${site.url}/images/og.jpg`,
    telephone: site.phone.display,
    sameAs: [site.instagram.url],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Adnan Menderes Cd. No:102/A",
      addressLocality: "Ataşehir",
      addressRegion: "İstanbul",
      postalCode: "34646",
      addressCountry: "TR",
    },
    department: locations.map((loc) => ({
      "@type": "CafeOrCoffeeShop",
      name: `${site.name} ${loc.name}`,
      address: loc.address
        ? {
            "@type": "PostalAddress",
            streetAddress: loc.address,
            addressLocality: loc.district,
            addressRegion: loc.city,
            addressCountry: "TR",
          }
        : undefined,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
