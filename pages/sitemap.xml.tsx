import { GetServerSideProps } from "next";
import { SITE_CONFIG } from "@/lib/constants";

// Pages statiques de votre site
const STATIC_PAGES = [
  "", // Page d'accueil
  "/services", // Page services
  "/a-propos", // Page à propos
  "/contact", // Page contact
];

function generateSiteMap() {
  const baseUrl = SITE_CONFIG.url;
  const currentDate = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${STATIC_PAGES.map((page) => {
  const url = page === "" ? baseUrl : `${baseUrl}${page}`;
  const priority = page === "" ? "1.0" : "0.8";
  const changefreq = page === "" ? "weekly" : "monthly";

  return `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join("\n")}
</urlset>`;
}

export default function SiteMap() {
  // Cette page n'affiche rien, elle génère juste le XML
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate"
  );
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
