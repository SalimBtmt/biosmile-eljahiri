import Link from "next/link";
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";

const cards = [
  {
    title: "Hygiène bucco-dentaire chez l'enfant",
    description:
      "Prévention et conseils adaptés pour une hygiène parfaite dès le plus jeune âge.",
    link: "/hygiene-bucco-dentaire-enfant",
    image: "/images/enfant-brossage-dents.jpg",
    alt: "Hygiène bucco-dentaire enfant",
  },
  {
    title: "Scellement de sillon",
    description:
      "Protection efficace contre les caries sur les molaires définitives des enfants.",
    link: "/scellement-sillon",
    image: "/images/molaire-scellement.jpg",
    alt: "Scellement de sillon",
  },
  {
    title: "Soins conservateurs",
    description:
      "Traitement des caries et préservation des dents de lait avec des techniques douces.",
    link: "/soins-conservateurs",
    image: "/images/soins-conservateurs-enfant.jpg",
    alt: "Soins conservateurs enfants",
  },
  {
    title: "Extraction",
    description:
      "Interventions douces et sécurisées pour extraire les dents problématiques chez l'enfant.",
    link: "/extraction",
    image: "/images/extraction-dentaire-enfant.jpg",
    alt: "Extraction dentaire enfant",
  },
  {
    title: "Traumatologie",
    description:
      "Prise en charge rapide et adaptée des traumatismes dentaires chez l'enfant.",
    link: "/traumatologie",
    image: "/images/traumatologie-dentaire-enfant.jpg",
    alt: "Traumatologie dentaire enfant",
  },
];

export default function PedodontiePage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Pédodontie - Soins dentaires pour enfants",
    description:
      "Expertise en soins dentaires pédodontiques au centre BioSmile Marrakech. Hygiène, scellement, soins conservateurs, extractions, traumatologie.",
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
        title="Pédodontie Marrakech - Soins dentaires enfants | BioSmile"
        description="Découvrez nos soins pédodontiques pour enfants à Marrakech. Hygiène, scellement, soins conservateurs, extractions, traumatologie adaptés à chaque âge."
        image="/images/og-pedodontie.jpg"
        canonical="/pedodontie"
      />

      <main className="p-6">
        <section className="max-w-4xl mx-auto text-center py-12">
          <h1 className="text-4xl font-bold mb-6 text-[#3784b4]">
            Pédodontie & Soins Dentaires Enfants
          </h1>
          <p className="text-gray-700">
            Notre expertise en pédodontie vous assure un accompagnement complet
            pour les soins dentaires de votre enfant. Prévention, traitements et
            urgences adaptés à sa croissance.
          </p>
        </section>

        <section className="container mx-auto px-4 text-center">
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
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prenez rendez-vous pour votre enfant
            </h2>
            <p className="mb-8 text-gray-700">
              Contactez notre centre BioSmile à Marrakech pour toute demande de
              consultation ou soins pédodontiques.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
