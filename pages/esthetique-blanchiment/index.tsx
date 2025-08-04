import Link from "next/link";
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";

const cards = [
  {
    title: "Facettes Dentaires",
    description:
      "Coquilles ultra-fines en céramique pour transformer instantanément votre sourire.",
    link: "/facettes-dentaires",
    image: "/images/facettes-dentaires-ceramique.jpg",
    alt: "Facettes dentaires en céramique",
  },
  {
    title: "Blanchiment Flash LED",
    description:
      "Technique professionnelle de blanchiment utilisant une lampe LED froide.",
    link: "/blanchiment-fauteuil",
    image: "/images/blanchiment-flash-led.jpg",
    alt: "Blanchiment Flash LED au fauteuil",
  },
  {
    title: "Blanchiment par Gouttières",
    description:
      "Traitement de blanchiment progressif à domicile avec gouttières personnalisées.",
    link: "/blanchiment-gouttiere",
    image: "/images/blanchiment-gouttiere-domicile.jpg",
    alt: "Blanchiment par gouttières à domicile",
  },
];

export default function EsthetiqueBlanchimentPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Esthétique et Blanchiment Dentaire",
    description:
      "Découvrez nos services d'esthétique et de blanchiment dentaire au centre BioSmile Marrakech. Facettes dentaires, blanchiment Flash LED au fauteuil, blanchiment par gouttières.",
    serviceType: "Dentisterie Esthétique",
    provider: {
      "@type": "Dentist",
      name: "Dr EL JAHIRI Reda",
      worksFor: {
        "@type": "DentalPractice",
        name: "Centre dentaire BioSmile",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Immeuble el baraka, 1er étage numéro 2, quartier bokar, Bd Allal Al Fassi",
          addressLocality: "Marrakech",
          postalCode: "40000",
          addressCountry: "MA",
        },
      },
    },
  };

  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />

      <SEO
        title="Esthétique & Blanchiment Dentaire Marrakech | BioSmile"
        description="Découvrez nos services d'esthétique dentaire et blanchiment innovants : facettes, blanchiment Flash LED, blanchiment par gouttières. Consultez-nous !"
        image="/images/og-esthetique-blanchiment.jpg"
        canonical="/esthetique-blanchiment"
      />

      <main className="p-6">
        <section className="py-12 max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-[#3784b4]">
            Esthétique & Blanchiment Dentaire
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Découvrez nos solutions modernes pour un sourire éclatant et
            naturel.
            <br />
            Accédez à chaque traitement en détail via les cartes ci-dessous.
          </p>
        </section>

        <section className="container mx-auto px-4 text-center mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.link}
                className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">
              Prenez rendez-vous dès aujourd'hui
            </h2>
            <p className="mb-8 text-gray-700">
              Pour toute question ou pour programmer votre consultation
              gratuite, n'hésitez pas à nous contacter.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
