import Link from "next/link";
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";

const cards = [
  {
    title: "Orthodontie adulte",
    description:
      "Solutions modernes et discrètes pour l'alignement dentaire des adultes, adaptées à chaque style de vie.",
    link: "/orthodontie-adulte",
    image: "/images/ortho-adulte.jpg",
    alt: "Orthodontie adulte",
  },
  {
    title: "Orthodontie enfant",
    description:
      "Prise en charge attentive de la croissance dentaire chez l'enfant pour prévenir et corriger les malpositions.",
    link: "/orthodontie-enfant",
    image: "/images/ortho-enfant.jpg",
    alt: "Orthodontie enfant",
  },
  {
    title: "Gouttières invisibles",
    description:
      "Aligneurs transparents et amovibles pour une correction efficace et invisible du sourire.",
    link: "/gouttieres-invisibles",
    image: "/images/gouttieres-invisibles.jpg",
    alt: "Gouttières invisibles",
  },
];

export default function OrthodontiePage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Orthodontie - Soins orthodontiques",
    description:
      "Expertise en soins orthodontiques au centre BioSmile Marrakech. Orthodontie adulte, enfant et gouttières invisibles.",
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
        title="Orthodontie Marrakech - Soins orthodontiques | BioSmile"
        description="Découvrez nos solutions orthodontiques à Marrakech. Orthodontie adulte, enfant et gouttières invisibles adaptées à chaque âge."
        image="/images/og-orthodontie.jpg"
        canonical="/orthodontie"
      />

      <main className="p-6">
        <section className="max-w-4xl mx-auto text-center py-12">
          <h1 className="text-4xl font-bold mb-6 text-[#3784b4]">
            Orthodontie
          </h1>
          <p className="text-gray-700">
            Retrouvez l'équilibre parfait entre esthétique et santé
            bucco-dentaire grâce à nos solutions orthodontiques modernes et
            discrètes.
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

        {/* Pourquoi choisir l'orthodontie */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#3784b4]">
              Pourquoi envisager un traitement orthodontique ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
              <article className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Esthétique parfaite
                  </h3>
                  <p>
                    Un sourire harmonieux valorise votre visage et renforce
                    votre assurance au quotidien.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Santé préservée
                  </h3>
                  <p>
                    Une bonne occlusion réduit les risques de caries, gingivites
                    et usure prématurée des dents.
                  </p>
                </div>
              </article>
              <article className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Confort amélioré
                  </h3>
                  <p>
                    Moins de tensions articulaires, meilleure mastication,
                    respiration facilitée.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Diagnostic précis
                  </h3>
                  <p>
                    Analyse numérique 3D et plan de traitement sur-mesure pour
                    des résultats prévisibles.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Étapes du traitement */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#3784b4]">
              Votre parcours orthodontique chez BioSmile
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#3784b4] text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    Consultation initiale
                  </h3>
                  <p className="text-gray-700">
                    Bilan complet, scanner et plan de traitement détaillé.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#3784b4] text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    Mise en place des dispositifs
                  </h3>
                  <p className="text-gray-700">
                    Appareils discrets adaptés à vos attentes esthétiques et à
                    votre mode de vie.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#3784b4] text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Suivi régulier</h3>
                  <p className="text-gray-700">
                    Ajustements fins pour guider progressivement vos dents vers
                    leur position idéale.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#3784b4] text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    Phase de stabilisation
                  </h3>
                  <p className="text-gray-700">
                    Port de gouttières de contention pour garantir des résultats
                    durables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prenez rendez-vous pour votre traitement orthodontique
            </h2>
            <p className="mb-8 text-gray-700">
              Contactez notre centre BioSmile à Marrakech pour toute demande de
              consultation orthodontique.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
