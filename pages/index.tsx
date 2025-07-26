import { SEO } from "../components/common/SEO";
import Layout from "../components/common/Layout";

import Script from "next/script";
import { getOrganizationSchema } from "../utils/schema";

export default function HomePage() {
  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
        strategy="afterInteractive"
      />
      <SEO
        title="Cabinet dentaire BioSmile Marrakech – Soin, Hygiène, Esthétique"
        description="Cabinet dentaire moderne à Marrakech. Soins dentaires, implants, esthétique. Rendez-vous rapide avec des spécialistes expérimentés."
        image="/images/og-home.jpg"
      />

      <main className="p-6">
        <h1 className="text-3xl font-bold">
          Bienvenue chez BioSmile Marrakech
        </h1>
        <p className="mt-4">
          Nous vous offrons des soins dentaires de qualité avec un service
          personnalisé et humain.
        </p>
      </main>
    </Layout>
  );
}
