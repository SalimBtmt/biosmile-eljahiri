import { NextSeo, NextSeoProps } from "next-seo";
import Head from "next/head";
import { SITE_CONFIG } from "@/lib/constants";

interface SEOHeadProps extends NextSeoProps {
  schema?: object | object[];
}

export default function SEOHead({
  title,
  description,
  canonical,
  openGraph,
  schema,
  ...props
}: SEOHeadProps) {
  const seoTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={description || SITE_CONFIG.description}
        canonical={canonical || SITE_CONFIG.url}
        openGraph={{
          title: seoTitle,
          description: description || SITE_CONFIG.description,
          url: canonical || SITE_CONFIG.url,
          siteName: SITE_CONFIG.name,
          images: [
            {
              url: `${SITE_CONFIG.url}/images/og-biosmile.jpg`,
              width: 1200,
              height: 630,
              alt: SITE_CONFIG.name,
            },
          ],
          locale: "fr_FR",
          type: "website",
          ...openGraph,
        }}
        twitter={{
          handle: "@biosmile_marrakech",
          site: "@biosmile_marrakech",
          cardType: "summary_large_image",
        }}
        {...props}
      />

      {/* Schema Markup JSON-LD */}
      {schema && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(Array.isArray(schema) ? schema : [schema]),
            }}
            key="schema-jsonld"
          />
        </Head>
      )}
    </>
  );
}
