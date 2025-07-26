import { DefaultSeoProps } from "next-seo";
import { SITE_CONFIG, BUSINESS_INFO } from "./constants";

const SEO_CONFIG: DefaultSeoProps = {
  titleTemplate: "%s | Cabinet Dentaire BioSmile Marrakech",
  defaultTitle:
    "Cabinet Dentaire BioSmile Marrakech – Soins, Implants, Esthétique",
  description: SITE_CONFIG.description,

  // Canonical URL
  canonical: SITE_CONFIG.url,

  // Open Graph
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Cabinet Dentaire BioSmile Marrakech – Dr. El Jehiri",
    description:
      "Votre santé bucco-dentaire entre les mains d'experts. Cabinet moderne équipé des dernières technologies à Marrakech.",
    images: [
      {
        url: `${SITE_CONFIG.url}/images/og-biosmile.jpg`,
        width: 1200,
        height: 630,
        alt: "Cabinet Dentaire BioSmile Marrakech",
        type: "image/jpeg",
      },
      {
        url: `${SITE_CONFIG.url}/images/cabinet-interieur.jpg`,
        width: 800,
        height: 600,
        alt: "Intérieur moderne du cabinet dentaire BioSmile",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter
  twitter: {
    handle: "@biosmile_marrakech",
    site: "@biosmile_marrakech",
    cardType: "summary_large_image",
  },

  // Balises meta additionnelles
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "theme-color",
      content: "#0ea5e9",
    },
    {
      name: "msapplication-TileColor",
      content: "#0ea5e9",
    },
    {
      name: "keywords",
      content: SITE_CONFIG.keywords.join(", "),
    },
    {
      name: "author",
      content: SITE_CONFIG.creator,
    },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "googlebot",
      content:
        "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
    },
    // Géolocalisation
    {
      name: "geo.region",
      content: "MA-07", // Code région Marrakech-Safi
    },
    {
      name: "geo.placename",
      content: "Marrakech",
    },
    {
      name: "geo.position",
      content: `${BUSINESS_INFO.coordinates.latitude};${BUSINESS_INFO.coordinates.longitude}`,
    },
    {
      name: "ICBM",
      content: `${BUSINESS_INFO.coordinates.latitude}, ${BUSINESS_INFO.coordinates.longitude}`,
    },
  ],

  // Balises link
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
};

export default SEO_CONFIG;
