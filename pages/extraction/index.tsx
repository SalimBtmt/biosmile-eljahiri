// pages/extraction.tsx
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";
import Image from "next/image";
import { AlertTriangle, Clock, Shield, Heart, CheckCircle } from "lucide-react";

export default function ExtractionPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Extraction Dentaire Enfants",
    description:
      "Extractions dentaires pédodontiques à Marrakech. Interventions douces pour dents de lait et dents définitives. Centre BioSmile spécialisé.",
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
      suggestedMinAge: 0,
      suggestedMaxAge: 16,
    },
  };

  const indications = [
    {
      icon: AlertTriangle,
      title: "Carie très étendue",
      description:
        "Dent détruite par la carie, non récupérable par les soins conservateurs",
      urgency: "Urgent",
    },
    {
      icon: Clock,
      title: "Retard d'exfoliation",
      description:
        "Dent de lait qui ne tombe pas et gêne l'éruption de la dent définitive",
      urgency: "Programmé",
    },
    {
      icon: Shield,
      title: "Traumatisme sévère",
      description: "Fracture importante avec atteinte pulpaire irréversible",
      urgency: "Urgent",
    },
    {
      icon: Heart,
      title: "Orthodontique",
      description: "Extraction pour faciliter l'alignement dentaire",
      urgency: "Programmé",
    },
  ];

  const procedure = [
    {
      step: "1",
      title: "Préparation psychologique",
      description:
        "Explication adaptée à l'âge et mise en confiance de l'enfant",
    },
    {
      step: "2",
      title: "Anesthésie locale",
      description:
        "Gel anesthésiant puis injection très fine pour un confort optimal",
    },
    {
      step: "3",
      title: "Extraction douce",
      description: "Mobilisation progressive et extraction en douceur",
    },
    {
      step: "4",
      title: "Contrôle hémorragique",
      description: "Compression et vérification de l'absence de saignement",
    },
    {
      step: "5",
      title: "Conseils post-opératoires",
      description: "Instructions détaillées pour les parents et l'enfant",
    },
  ];

  const postOpCare = [
    {
      period: "Immédiatement",
      instructions: [
        "Comprimer avec une compresse 20 minutes",
        "Éviter les bains de bouche",
        "Ne pas cracher ni aspirer",
        "Alimentation froide ou tiède",
      ],
    },
    {
      period: "24 premières heures",
      instructions: [
        "Brossage doux en évitant la zone",
        "Antalgique si douleur (paracétamol)",
        "Glace en externe si gonflement",
        "Repos et éviter l'effort physique",
      ],
    },
    {
      period: "Jours suivants",
      instructions: [
        "Bains de bouche doux au sel",
        "Alimentation normale progressive",
        "Surveillance de la cicatrisation",
        "Contact en cas de problème",
      ],
    },
  ];

  const complications = [
    {
      complication: "Saignement persistant",
      prevention: "Compression post-opératoire adequate",
      action: "Contacter immédiatement le cabinet",
    },
    {
      complication: "Douleur intense",
      prevention: "Analgésiques prescrits pris à temps",
      action: "Vérifier la posologie, consulter si persistance",
    },
    {
      complication: "Infection",
      prevention: "Hygiène post-opératoire rigoureuse",
      action: "Consultation d'urgence, antibiotiques possibles",
    },
    {
      complication: "Alvéolite",
      prevention: "Respect des consignes post-opératoires",
      action: "Nettoyage alvéolaire et pansement",
    },
  ];

  const alternatives = [
    "Traitement endodontique (pulpotomie)",
    "Couronne pédodontique",
    "Obturation composite étendue",
    "Surveillance si proche exfoliation naturelle",
  ];

  const warningSignes = [
    "Saignement qui ne s'arrête pas après 2h",
    "Douleur très intense non calmée",
    "Gonflement important du visage",
    "Fièvre supérieure à 38,5°C",
    "Goût désagréable persistant",
    "Ouverture difficile de la bouche",
  ];

  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        strategy="afterInteractive"
      />

      <SEO
        title="Extraction Dentaire Enfant Marrakech - Pédodontie | BioSmile"
        description="Extractions dentaires pédodontiques à Marrakech. Interventions douces pour enfants, techniques modernes et anesthésie adaptée. Centre BioSmile spécialisé."
        image="/images/og-extraction-enfant.jpg"
        canonical="/extraction"
      />

      <main className="p-6">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-orange-50 to-white py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/extraction-dentaire-enfant.jpg"
              alt="Extraction dentaire enfant Marrakech"
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
                  Extraction Dentaire
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-6">
                  Interventions douces et sécurisées
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  Parfois nécessaire malgré nos efforts de conservation,
                  l'extraction dentaire chez l'enfant est réalisée avec douceur
                  et expertise au centre BioSmile. Techniques modernes et
                  approche bienveillante pour le confort de votre enfant.
                </p>
                <div className="bg-orange-100 border border-orange-200 text-orange-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Dernier recours
                  </h3>
                  <p>
                    L'extraction n'est proposée qu'après évaluation de toutes
                    les alternatives
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/enfant-rassurant-dentiste.jpg"
                    alt="Enfant rassuré chez le dentiste"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500 rounded-full opacity-30" />
              </div>
            </div>
          </div>
        </section>

        {/* When is extraction necessary */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Quand l'extraction est-elle nécessaire ?
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              L'extraction n'est envisagée qu'en dernier recours, lorsque la
              conservation de la dent n'est plus possible ou bénéfique pour
              l'enfant.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {indications.map((indication, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <indication.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold mr-3">
                          {indication.title}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            indication.urgency === "Urgent"
                              ? "bg-red-100 text-red-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {indication.urgency}
                        </span>
                      </div>
                      <p className="text-gray-600">{indication.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alternatives */}
        <section className="py-16 bg-green-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Alternatives à l'Extraction
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Avant d'envisager une extraction, nous explorons toutes les
              possibilités de conservation de la dent.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {alternatives.map((alternative, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800">{alternative}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Procedure */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Déroulement de l'Extraction
            </h2>
            <div className="space-y-8">
              {procedure.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
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

        {/* Post-op Care */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Soins Post-Opératoires
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Le respect des conseils post-opératoires est essentiel pour une
              cicatrisation optimale et éviter les complications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {postOpCare.map((period, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-6 text-[#6095b5]">
                    {period.period}
                  </h3>
                  <ul className="space-y-3">
                    {period.instructions.map((instruction, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complications */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Prévention des Complications
            </h2>
            <div className="space-y-6">
              {complications.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="font-semibold text-red-600 mb-2">
                        Complication
                      </h3>
                      <p className="text-gray-700">{item.complication}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-600 mb-2">
                        Prévention
                      </h3>
                      <p className="text-gray-700">{item.prevention}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-600 mb-2">
                        Conduite à tenir
                      </h3>
                      <p className="text-gray-700">{item.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="py-16 bg-red-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Signes d'Alarme : Contactez-nous Immédiatement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {warningSignes.map((sign, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500"
                >
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{sign}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <div className="bg-red-100 border border-red-200 text-red-800 p-6 rounded-lg inline-block">
                <h3 className="text-xl font-semibold mb-2">Ligne d'urgence</h3>
                <p className="text-2xl font-bold">+212-XXX-XXXXXX</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recovery timeline */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Temps de Cicatrisation
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#6095b5] mb-2">
                    24h
                  </div>
                  <p className="text-gray-600">Arrêt du saignement</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#6095b5] mb-2">
                    3-5j
                  </div>
                  <p className="text-gray-600">Disparition de la douleur</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#6095b5] mb-2">
                    1-2 sem
                  </div>
                  <p className="text-gray-600">Cicatrisation gingivale</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#6095b5] mb-2">
                    1-2 mois
                  </div>
                  <p className="text-gray-600">Cicatrisation osseuse</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-orange-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8">
              "Ma fille devait faire extraire une molaire de lait. L'équipe
              BioSmile a été formidable, très rassurante. L'intervention s'est
              parfaitement déroulée et la cicatrisation a été rapide."
            </blockquote>
            <cite className="text-lg font-semibold text-orange-600">
              Yamina, maman de Lina - Marrakech
            </cite>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'une extraction pour votre enfant ?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Consultation d'évaluation gratuite pour déterminer la meilleure
              solution. Nos pédodontistes vous conseilleront en toute
              transparence.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
