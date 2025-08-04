// pages/facettes-dentaires.tsx
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";
import Image from "next/image";
import { Sparkles, CheckCircle, Star, Eye } from "lucide-react";

export default function FacettesDentairesPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Facettes Dentaires en Céramique",
    description:
      "Facettes dentaires en céramique à Marrakech. Transformation complète du sourire avec des coquilles ultra-fines. Centre BioSmile.",
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

  const benefits = [
    "Correction des dents décolorées, tachées ou jaunies",
    "Fermeture des espaces entre les dents (diastèmes)",
    "Correction des dents cassées, ébréchées ou usées",
    "Amélioration de la forme et de la taille des dents",
    "Alignement visuel des dents légèrement mal positionnées",
    "Résultat immédiat et durable (15-20 ans)",
  ];

  const process = [
    {
      step: "1",
      title: "Conception du sourire",
      description:
        "Analyse esthétique approfondie et simulation numérique de votre nouveau sourire",
    },
    {
      step: "2",
      title: "Préparation minutieuse",
      description:
        "Préparation minimale de l'émail (0,3 à 0,7mm) pour préserver au maximum vos dents",
    },
    {
      step: "3",
      title: "Empreintes de précision",
      description:
        "Prise d'empreintes numériques 3D pour une adaptation parfaite des facettes",
    },
    {
      step: "4",
      title: "Fabrication sur-mesure",
      description:
        "Confection artisanale des facettes en céramique par notre laboratoire partenaire",
    },
    {
      step: "5",
      title: "Pose et finitions",
      description:
        "Collage définitif et ajustements esthétiques pour un résultat parfait",
    },
  ];

  const types = [
    {
      icon: Sparkles,
      title: "Facettes en céramique",
      description:
        "Coquilles ultra-fines, biocompatibles et résistantes aux taches",
      advantages: [
        "Aspect naturel",
        "Durabilité 15-20 ans",
        "Résistance aux taches",
      ],
    },
    {
      icon: Eye,
      title: "Facettes pelliculaires",
      description: "Facettes ultra-minces sans préparation dentaire",
      advantages: ["Préservation totale", "Réversible", "Pose rapide"],
    },
    {
      icon: Star,
      title: "Facettes lumineers",
      description: "Technologie avancée pour un résultat encore plus naturel",
      advantages: [
        "Translucidité parfaite",
        "Finesse extrême",
        "Confort optimal",
      ],
    },
  ];

  const candidates = [
    "Dents saines avec émail en bon état",
    "Gencives en bonne santé",
    "Absence de bruxisme sévère",
    "Motivation pour maintenir une hygiène rigoureuse",
    "Attentes esthétiques réalistes",
    "Engagement dans le suivi préventif",
  ];

  const contraindications = [
    "Bruxisme sévère non traité",
    "Caries ou maladies des gencives actives",
    "Émail insuffisant ou très abîmé",
    "Attentes irréalistes",
    "Mauvaise hygiène bucco-dentaire",
    "Habitudes nocives (ongles, objets durs)",
  ];

  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        strategy="afterInteractive"
      />

      <SEO
        title="Facettes Dentaires Céramique Marrakech - Transformation Sourire | BioSmile"
        description="Facettes dentaires en céramique à Marrakech. Transformation complète du sourire avec des coquilles ultra-fines au centre BioSmile. Résultats naturels."
        image="/images/og-facettes-dentaires.jpg"
        canonical="/facettes-dentaires"
      />

      <main className="p-6">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-pink-50 to-white py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/facettes-dentaires-ceramique.jpg"
              alt="Facettes dentaires céramique Marrakech"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-white/80" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Facettes Dentaires
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#6095b5] mb-6">
                  Transformation instantanée de votre sourire
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  Découvrez les facettes dentaires en céramique, la solution
                  esthétique de référence pour transformer instantanément votre
                  sourire. Des coquilles ultra-fines qui corrigent couleur,
                  forme et alignement pour un résultat parfaitement naturel.
                </p>
                <div className="bg-[#6095b5] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Simulation 3D gratuite
                  </h3>
                  <p>Visualisez votre nouveau sourire avant le traitement</p>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/facettes-avant-apres.jpg"
                    alt="Transformation facettes dentaires avant après"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-500 rounded-full opacity-20" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500 rounded-full opacity-30" />
              </div>
            </div>
          </div>
        </section>

        {/* What are veneers */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Qu'est-ce qu'une facette dentaire ?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Une facette dentaire est une fine coquille en céramique (0,3 à
                  0,7 mm d'épaisseur) qui se colle sur la face visible de vos
                  dents. Cette technique révolutionnaire permet de corriger
                  instantanément couleur, forme, taille et position des dents
                  sans les mutiler.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Contrairement aux couronnes, les facettes préservent au
                  maximum votre dent naturelle. Le résultat est immédiat,
                  naturel et durable, transformant votre sourire en une seule
                  séance.
                </p>
                <div className="bg-green-100 border border-green-200 text-green-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Durabilité exceptionnelle
                  </h3>
                  <p>
                    Les facettes en céramique durent 15 à 20 ans avec un
                    entretien approprié
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/images/facette-anatomie.jpg"
                  alt="Anatomie facette dentaire céramique"
                  width={500}
                  height={350}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Types de Facettes Dentaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {types.map((type, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md text-center"
                >
                  <div className="w-16 h-16 bg-[#6095b5] rounded-full flex items-center justify-center mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.advantages.map((advantage, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Que peuvent corriger les facettes ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#6095b5] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="relative">
                <Image
                  src="/images/problemes-facettes.jpg"
                  alt="Problèmes corrigés par facettes dentaires"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Votre Transformation en 5 Étapes
            </h2>
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#6095b5] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Candidature */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Êtes-vous un bon candidat ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-green-600">
                  ✓ Profil idéal
                </h3>
                <ul className="space-y-3">
                  {candidates.map((candidate, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{candidate}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-orange-600">
                  ⚠ Contre-indications
                </h3>
                <ul className="space-y-3">
                  {contraindications.map((contraindication, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0">
                        ✗
                      </span>
                      <span>{contraindication}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Care Instructions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Comment entretenir vos facettes ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#6095b5]">
                  Hygiène quotidienne
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Brossage 2 fois par jour</li>
                  <li>• Fil dentaire quotidien</li>
                  <li>• Bain de bouche antiseptique</li>
                  <li>• Brosse à dents souple</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  Habitudes à adopter
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Contrôles réguliers (6 mois)</li>
                  <li>• Détartrage professionnel</li>
                  <li>• Protection nocturne si bruxisme</li>
                  <li>• Alimentation équilibrée</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-red-600">
                  À éviter
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mordre des objets durs</li>
                  <li>• Grincement des dents</li>
                  <li>• Aliments très colorants</li>
                  <li>• Tabac et alcool excessif</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8">
              "Mes facettes ont littéralement changé ma vie ! Je n'osais plus
              sourire sans retenue. Le résultat est tellement naturel que même
              mes proches pensent que c'est mon vrai sourire. Merci à toute
              l'équipe BioSmile !"
            </blockquote>
            <cite className="text-lg font-semibold text-[#6095b5]">
              Aicha, 28 ans - Marrakech
            </cite>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt pour votre transformation ?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Découvrez votre potentiel sourire avec notre simulation 3D
              gratuite. Consultation personnalisée avec nos spécialistes en
              esthétique dentaire.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
