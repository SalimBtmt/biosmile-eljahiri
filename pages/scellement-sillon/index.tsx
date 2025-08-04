// pages/scellement-sillon.tsx
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";
import Image from "next/image";
import { Shield, CheckCircle, Target, Clock } from "lucide-react";

export default function ScellementSillonPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Scellement de Sillon",
    description:
      "Scellement de sillon pour enfants à Marrakech. Protection efficace contre les caries des molaires. Centre BioSmile pédodontie.",
    serviceType: "Pédodontie",
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
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: 6,
      suggestedMaxAge: 14,
    },
  };

  const benefits = [
    {
      icon: Shield,
      title: "Protection immédiate",
      description:
        "Barrière physique contre les bactéries et les résidus alimentaires",
    },
    {
      icon: Target,
      title: "Prévention ciblée",
      description:
        "Protection spécifique des zones les plus vulnérables aux caries",
    },
    {
      icon: Clock,
      title: "Traitement rapide",
      description: "Intervention simple et indolore en une seule séance",
    },
  ];

  const procedure = [
    {
      step: "1",
      title: "Nettoyage",
      description: "Nettoyage approfondi de la dent et des sillons",
    },
    {
      step: "2",
      title: "Préparation",
      description: "Isolation de la dent et application d'un gel conditionneur",
    },
    {
      step: "3",
      title: "Application",
      description: "Coulée de la résine de scellement dans les sillons",
    },
    {
      step: "4",
      title: "Polymérisation",
      description: "Durcissement par lampe LED et vérification de l'occlusion",
    },
  ];

  const idealCandidates = [
    "Enfants de 6 à 14 ans",
    "Molaires définitives saines",
    "Sillons profonds et anfractueux",
    "Risque carieux élevé",
    "Hygiène difficile à maintenir",
    "Recommandation du pédodontiste",
  ];

  const timeline = [
    {
      age: "6-7 ans",
      tooth: "Premières molaires définitives",
      description: "Scellement dès leur éruption complète",
    },
    {
      age: "12-13 ans",
      tooth: "Deuxièmes molaires définitives",
      description: "Protection des nouvelles molaires",
    },
    {
      age: "17-21 ans",
      tooth: "Dents de sagesse (si nécessaire)",
      description: "Évaluation au cas par cas",
    },
  ];

  const maintenance = [
    "Contrôle tous les 6 mois",
    "Vérification de l'intégrité du scellement",
    "Retouches si nécessaire",
    "Maintien d'une hygiène rigoureuse",
    "Éviter les aliments trop durs",
    "Fluorisation complémentaire si indiquée",
  ];

  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        strategy="afterInteractive"
      />

      <SEO
        title="Scellement de Sillon Enfant Marrakech - Protection Caries | BioSmile"
        description="Scellement de sillon pour enfants à Marrakech. Protection efficace contre les caries des molaires. Traitement préventif indolore au centre BioSmile."
        image="/images/og-scellement-sillon.jpg"
        canonical="/scellement-sillon"
      />

      <main className="p-6">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/scellement-sillon-enfant.jpg"
              alt="Scellement de sillon enfant Marrakech"
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
                  Scellement de Sillon
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#6095b5] mb-6">
                  Protection efficace contre les caries
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  Le scellement de sillon est un traitement préventif indolore
                  qui protège durablement les molaires de votre enfant contre
                  les caries. Une barrière protectrice qui préserve l'avenir de
                  ses dents définitives.
                </p>
                <div className="bg-[#6095b5] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Efficacité prouvée
                  </h3>
                  <p>
                    Réduction de 80% du risque de caries sur les molaires
                    traitées
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/molaire-scellement.jpg"
                    alt="Molaire avec scellement de sillon"
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

        {/* What is it */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Qu'est-ce que le scellement de sillon ?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Le scellement de sillon consiste à appliquer une résine
                  protectrice dans les creux et fissures des molaires
                  définitives. Ces zones, appelées sillons, sont difficiles à
                  nettoyer et particulièrement vulnérables aux caries.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Cette technique préventive simple et indolore crée une
                  barrière physique qui empêche les bactéries et les résidus
                  alimentaires de s'accumuler dans ces zones à risque, réduisant
                  drastiquement le risque de caries.
                </p>
                <div className="bg-green-100 border border-green-200 text-green-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Moment optimal</h3>
                  <p>
                    Dès l'éruption complète des molaires définitives (6-7 ans et
                    12-13 ans)
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/images/sillon-avant-apres.jpg"
                  alt="Sillon dentaire avant et après scellement"
                  width={500}
                  height={350}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Pourquoi choisir le scellement de sillon ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md text-center"
                >
                  <div className="w-16 h-16 bg-[#6095b5] rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Procedure */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Déroulement du traitement
            </h2>
            <div className="space-y-8">
              {procedure.map((step, index) => (
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

        {/* Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Calendrier du scellement
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Le scellement doit être réalisé au bon moment, dès l'éruption
              complète des molaires définitives pour une efficacité maximale.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {timeline.map((period, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md text-center"
                >
                  <div className="text-3xl font-bold text-[#6095b5] mb-4">
                    {period.age}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{period.tooth}</h3>
                  <p className="text-gray-600">{period.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal Candidates */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Candidats idéaux pour le scellement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#6095b5]">
                  Profil recommandé
                </h3>
                <ul className="space-y-3">
                  {idealCandidates.map((candidate, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{candidate}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-[#6095b5]">
                  Le saviez-vous ?
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>90% des caries</strong> chez l'enfant se développent
                    dans les sillons des molaires définitives.
                  </p>
                  <p>
                    Le scellement réduit de <strong>80%</strong> le risque de
                    caries sur les dents traitées.
                  </p>
                  <p>
                    Un scellement bien réalisé peut durer{" "}
                    <strong>plus de 10 ans</strong> avec un suivi régulier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Suivi et entretien
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maintenance.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#6095b5] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Le scellement est-il douloureux ?
                </h3>
                <p className="text-gray-600">
                  Non, le scellement de sillon est totalement indolore. Aucune
                  anesthésie ni fraisage n'est nécessaire. L'intervention dure
                  environ 15 minutes par dent.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Combien de temps dure la protection ?
                </h3>
                <p className="text-gray-600">
                  Un scellement bien réalisé peut protéger les dents pendant 5 à
                  10 ans, voire plus. Des contrôles réguliers permettent de
                  vérifier son intégrité.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Faut-il sceller toutes les molaires ?
                </h3>
                <p className="text-gray-600">
                  Le pédodontiste évalue chaque dent individuellement. Seules
                  les molaires avec des sillons profonds et un risque carieux
                  élevé nécessitent un scellement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protégez les dents de votre enfant
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Consultation pédodontique gratuite pour évaluer la nécessité d'un
              scellement de sillon. Un geste préventif simple qui protège
              durablement.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
