// pages/soins-esthetiques.tsx

import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";

export default function SoinsEsthetiques() {
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Centre dentaire BioSmile Marrakech",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Immeuble el baraka, 1er étage numéro 2, quartier bokar, Bd Allal Al Fassi",
      addressLocality: "Marrakech",
      postalCode: "40000",
      addressCountry: "MA",
    },
    telephone: "+212 5 24 44 55 66",
    url: "https://biosmile-marrakech.ma",
  };

  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        strategy="afterInteractive"
      />

      <SEO
        title="Soins Esthétiques Dentaires Marrakech | BioSmile"
        description="Découvrez notre gamme de soins esthétiques dentaires à Marrakech : facettes, blanchiment, facettes et plus encore pour un sourire éclatant."
        image="/images/og-soins-esthetiques.jpg"
        canonical="/soins-esthetiques"
      />

      <main className="p-6">
        {/* En-tête avec image de fond */}
        <section className="relative bg-gradient-to-r from-gray-10 to-white py-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/soins-esthetiques.jpg"
              alt="Soins esthétiques dentaires Marrakech"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-white/80" />
          </div>

          {/* Contenu principal */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Texte */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Soins Esthétiques Dentaires
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#6095b5] mb-6">
                  Sublimez votre sourire avec nos traitements esthétiques
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  Nos soins esthétiques dentaires incluent les facettes, le
                  blanchiment, le bonding, et bien plus encore pour un sourire
                  éclatant et naturel.
                </p>
              </div>
              {/* Image */}
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/facettes-dentaires.jpg"
                    alt="Facettes dentaires Marrakech"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#6095b5] rounded-full opacity-20" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#6095b5] rounded-full opacity-30" />
              </div>
            </div>
          </div>
        </section>

        {/* Détail des soins */}
        <section className="py-12 max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
            Nos soins esthétiques incluent :
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-left text-base md:text-lg">
            <li>Facettes dentaires pour un sourire parfait</li>
            <li>Blanchiment dentaire sur fauteuil ou par gouttière</li>
            <li>Bonding dentaire pour corriger les petites imperfections</li>
            <li>Soins de nettoyage et polissage esthétique</li>
          </ul>
        </section>

        {/* Contactez-nous */}
        <ContactUs />
      </main>
    </Layout>
  );
}
