import { CheckCircle, Heart, Shield, Clock } from "lucide-react";
import ContactUs from "@/components/ContactUs";
import PageHeader from "@/components/common/PageHeader";
import Layout from "@/components/common/Layout";
import Script from "next/script";
import { SEO } from "@/components/seo/SEO";

const IconPersonalized = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
    <path d="M6 20c0-3.33 5.33-5 6-5s6 1.67 6 5v1H6v-1z" />
  </svg>
);

const IconModern = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const IconCare = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const benefits = [
  {
    icon: IconPersonalized,
    title: "Soins personnalisés",
    description:
      "Un suivi adapté à chaque patient pour un traitement à la fois efficace et confortable.",
  },
  {
    icon: IconModern,
    title: "Équipement moderne et stérilisé",
    description:
      "Des technologies récentes et des protocoles stricts pour assurer votre sécurité.",
  },
  {
    icon: IconCare,
    title: "Attention et écoute",
    description:
      "Une équipe proche de vous, à l’écoute de vos besoins et de vos attentes.",
  },
];

const treatments = [
  {
    title: "Détartrage professionnel",
    description:
      "Un nettoyage minutieux pour préserver la santé de vos gencives et dents.",
  },
  {
    title: "Traitement des caries",
    description:
      "Des soins adaptés pour restaurer la fonction et l’esthétique de vos dents.",
  },
  {
    title: "Consultations complètes",
    description:
      "Des examens détaillés pour prévenir et traiter efficacement toute pathologie.",
  },
];

export default function SoinsDentairesPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Soins dentaires complets",
    description:
      "Soins dentaires à Marrakech : traitement des caries, détartrage, soins de gencives, restaurations et plus. Centre BioSmile.",
    serviceType: "Soins dentaires",
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
        strategy="afterInteractive"
      />

      <SEO
        title="Soins Dentaires Marrakech - Santé & Confort | BioSmile"
        description="Soins dentaires complets à Marrakech : caries, détartrage, gencives et restaurations. Santé et confort pour votre sourire."
        image="/images/og-soins-dentaires.jpg"
        canonical="/soins-dentaires"
      />

      <PageHeader
        title="Dentiste à Marrakech - Soins Dentaires Complets"
        description="Centre dentaire moderne au cœur de Marrakech pour tous vos soins dentaires"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            BioSmile Centre Dentaire : Votre Dentiste de Confiance à Marrakech
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Situé au cœur de Marrakech, notre centre dentaire moderne vous
            accompagne dans tous vos soins bucco-dentaires.
          </p>
        </div>

        {/* Section Avantages */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pourquoi Choisir Notre Centre Dentaire au Maroc ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.length === 0 ? (
              <p className="text-center text-gray-500">Avantages à venir...</p>
            ) : (
              benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-lg"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Section Solutions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nos Traitements Dentaires Spécialisés à Marrakech
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {treatments.length === 0 ? (
              <p className="text-center text-gray-500">
                Traitements à venir...
              </p>
            ) : (
              treatments.map((treatment, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              ))
            )}
          </div>
        </section>
        {/* Section Processus */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Votre Prise en Charge chez BioSmile Centre Dentaire
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Examen dentaire complet
              </h3>
              <p className="text-sm text-gray-600">
                Bilan bucco-dentaire détaillé et diagnostic précis par notre
                équipe médicale qualifiée
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Devis personnalisé
              </h3>
              <p className="text-sm text-gray-600">
                Proposition de soins sur mesure, adaptée à vos besoins
                spécifiques et à votre budget
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Traitements de qualité
              </h3>
              <p className="text-sm text-gray-600">
                Réalisation des soins avec matériel moderne et techniques
                éprouvées pour votre confort
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Accompagnement continu
              </h3>
              <p className="text-sm text-gray-600">
                Rendez-vous de contrôle et conseils préventifs pour préserver
                durablement votre santé dentaire
              </p>
            </div>
          </div>
        </section>

        {/* Témoignage */}
        <section className="mb-20 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💬</span>
            </div>
            <blockquote className="text-xl italic text-gray-800 mb-4">
              "J'appréhendais vraiment ma visite chez le dentiste après
              plusieurs années sans soins. L'accueil chaleureux et l'écoute de
              l'équipe BioSmile m'ont immédiatement rassuré. Les traitements ont
              été réalisés sans douleur et avec beaucoup de professionnalisme."
            </blockquote>
            <p className="font-semibold text-gray-900">
              Fatima, 29 ans - Marrakech
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">
            Offrez-vous le Sourire que Vous Méritez
          </h2>
          <p className="text-xl mb-8">
            Votre santé dentaire est précieuse. Prenez rendez-vous dès
            maintenant dans notre centre dentaire moderne situé au cœur de
            Marrakech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Consultation gratuite
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Urgence dentaire
            </button>
          </div>
        </section>
      </div>

      <ContactUs />
    </Layout>
  );
}
