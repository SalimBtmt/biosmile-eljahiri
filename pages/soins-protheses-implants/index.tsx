import Link from "next/link";
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";
import { getOrganizationSchema } from "@/utils/schema";

const cards = [
  {
    title: "Soins dentaires",
    description:
      "Prévention, soins des caries et traitements des gencives pour préserver votre santé bucco-dentaire.",
    link: "/soins-dentaires",
    image: "/images/kids.jpg",
    alt: "Soins dentaires",
  },
  {
    title: "Prothèses",
    description:
      "Solutions sur-mesure pour restaurer l'esthétique et la fonctionnalité de votre sourire.",
    link: "/protheses-dentaires",
    image: "/images/implants.jpg",
    alt: "Prothèses et implants",
  },
  {
    title: "Implants",
    description:
      "Solutions sur-mesure pour restaurer l'esthétique et la fonctionnalité de votre sourire.",
    link: "/implants",
    image: "/images/implants.jpg",
    alt: "Implants",
  },
  {
    title: "Soins esthétiques",
    description:
      "Blanchiment et soins esthétiques pour un sourire éclatant et naturel.",
    link: "/soins-esthetiques",
    image: "/images/esthetique.jpg",
    alt: "Soins esthétiques dentaires",
  },
  {
    title: "Radiologie",
    description:
      "Examens radiologiques précis pour un diagnostic fiable et rapide.",
    link: "/radiologie",
    image: "/images/radio.jpg",
    alt: "Radiologie dentaire",
  },
  {
    title: "Urgences dentaires",
    description:
      "Interventions rapides pour soulager vos douleurs en cas d'urgence.",
    link: "/urgences",
    image: "/images/urgence.jpg",
    alt: "Urgences dentaires",
  },
];

export default function SoinsProthesesImplantsPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Soins, Prothèses & Implants dentaires",
    description:
      "Services complets de soins dentaires, prothèses et implants au centre BioSmile Marrakech. Expertise et technologies de pointe.",
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
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
        strategy="afterInteractive"
      />
      <SEO
        title="Soins, Prothèses et Implants dentaires à Marrakech | BioSmile"
        description="Découvrez nos soins dentaires, prothèses et implants au cabinet BioSmile à Marrakech."
        image="/images/implants.jpg"
        canonical="/soins-protheses-implants"
      />

      <main className="p-6">
        <section className="max-w-4xl mx-auto text-center py-12">
          <h1 className="text-4xl font-bold mb-6 text-[#3784b4]">
            Soins, Prothèses & Implants
          </h1>
          <p className="text-gray-700">
            Nous mettons notre expertise à votre service pour vous offrir des
            soins complets, garantissant une hygiène bucco-dentaire optimale et
            un sourire éclatant.
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

        {/* Pourquoi choisir nos soins */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#3784b4]">
              Pourquoi choisir BioSmile pour vos soins dentaires ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
              <article className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Expertise reconnue
                  </h3>
                  <p>
                    Une équipe de professionnels expérimentés utilisant les
                    dernières technologies pour des soins de qualité supérieure.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Approche personnalisée
                  </h3>
                  <p>
                    Chaque traitement est adapté à vos besoins spécifiques pour
                    des résultats optimaux et durables.
                  </p>
                </div>
              </article>
              <article className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Technologies avancées
                  </h3>
                  <p>
                    Équipements de pointe et techniques innovantes pour des
                    interventions précises et confortables.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Suivi complet</h3>
                  <p>
                    Accompagnement personnalisé de la consultation initiale
                    jusqu'aux soins de maintenance.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Notre approche */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#3784b4]">
              Notre approche globale des soins dentaires
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#3784b4] text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    Diagnostic complet
                  </h3>
                  <p className="text-gray-700">
                    Examen approfondi et imagerie de pointe pour établir un
                    diagnostic précis de votre état bucco-dentaire.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#3784b4] text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    Plan de traitement personnalisé
                  </h3>
                  <p className="text-gray-700">
                    Élaboration d'un programme de soins adapté à vos besoins,
                    votre budget et vos contraintes.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#3784b4] text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    Soins de qualité
                  </h3>
                  <p className="text-gray-700">
                    Réalisation des traitements avec expertise et attention, en
                    privilégiant votre confort et votre satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#3784b4] text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    Suivi et maintenance
                  </h3>
                  <p className="text-gray-700">
                    Programme de suivi régulier et conseils personnalisés pour
                    maintenir une santé bucco-dentaire optimale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignage */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
              <p className="italic text-lg mb-4">
                "L'équipe de BioSmile a su me redonner confiance en moi grâce à
                des soins de qualité et un accompagnement exceptionnel. Je
                recommande vivement !"
              </p>
              <p className="font-semibold text-[#3784b4]">Ahmed, 45 ans</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prenez rendez-vous pour vos soins dentaires
            </h2>
            <p className="mb-8 text-gray-700">
              Contactez notre centre BioSmile à Marrakech pour toute demande de
              consultation ou soins dentaires personnalisés.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
