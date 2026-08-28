/**
 * Branch data — update addresses, hours and map links here.
 * Do not invent details in the UI; leave fields empty if unknown.
 */
import { images } from "./images";
import { site } from "./site";

export type Location = {
  id: string;
  name: string;
  district: string;
  city: string;
  address?: string;
  hours?: string;
  hoursNote?: string;
  phone?: string;
  phoneHref?: string;
  mapsUrl?: string;
  instagramUrl: string;
  image: string;
  note?: string;
};

export const locations: Location[] = [
  {
    id: "esatpasa",
    name: "Esatpaşa",
    district: "Ataşehir",
    city: "İstanbul",
    address: "Esatpaşa, Adnan Menderes Cd. No:102/A, 34646 Ataşehir / İstanbul",
    hours: "Her gün 08:00 — 02:00",
    hoursNote:
      "Saatler harita kayıtlarına göredir; güncel kapanış saatini Instagram veya telefonla teyit edin.",
    phone: site.phone.display,
    phoneHref: site.phone.href,
    mapsUrl: "https://maps.google.com/?cid=7732499050307913639",
    instagramUrl: site.instagram.url,
    image: images.locations.esatpasa,
  },
  {
    id: "atakent",
    name: "Atakent",
    district: "Ümraniye",
    city: "İstanbul",
    // PLACEHOLDER: street number not published on verified listings — add when confirmed.
    address: undefined,
    hours: undefined,
    phone: undefined,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=We+Love+Coffee+Atakent+%C3%9Cmraniye",
    instagramUrl: site.instagram.url,
    image: images.locations.atakent,
    note: "Adres ve çalışma saatleri Instagram hesabımızdan paylaşılır.",
  },
];

export const flagshipLocation = locations[0];
