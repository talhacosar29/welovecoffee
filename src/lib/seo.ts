import type { Metadata } from "next";
import { site, seo } from "@/data/site";

export function pageMeta(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = title.includes("We Love Coffee")
    ? title
    : `${title} | We Love Coffee`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "We Love Coffee",
      "kahve",
      "İstanbul kahve",
      "Ataşehir kafe",
      "Esatpaşa",
      "Atakent",
      "latte",
      "espresso",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [
        {
          url: `${site.url}/images/og.jpg`,
          width: 1800,
          height: 1200,
          alt: "We Love Coffee",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${site.url}/images/og.jpg`],
    },
  };
}

export const defaultMeta = pageMeta(seo.defaultTitle, seo.defaultDescription, "/");
