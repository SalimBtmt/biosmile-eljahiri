// pages/soins-conservateurs.tsx
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";
import Image from "next/image";
import { Heart, Shield, Smile, CheckCircle, AlertTriangle } from "lucide-react";

export default function SoinsConservateursPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Soins Conservateurs Enfants",
    description:
      "Soins conservateurs pédodontiques à Marrakech. Traitement des caries et préservation des dents de lait. Centre BioSmile spécialisé enfants.",
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

  const treatments = [
    {
      icon: Heart,
      title: "Obturations esthétiques",
      description:
        "Plombages blancs biocompatibles qui préservent l'esthétique du sourire",
      indications: [
        "Caries superficielles",
        "Caries moyennes",
        "Restaurations esthétiques",
      ],
      advantages: ["Couleur naturelle", "Sans mercure", "Adhésion chimique"],
    },
    {
      icon: Shield,
      title: "Couronnes pédodontiques",
      description: "Coiffes protectrices pour dents de lait très abîmées",
      indications: [
        "Caries étendues",
        "Fractures importantes",
        "Après pulpotomie",
      ],
      advantages: ["Protection totale", "Maintien de l'espace", "Durabilité"],
    },
    {
      icon: Smile,
      title: "Inlays-onlays",
      description: "Restaurations indirectes pour dents définitives jeunes",
      indications: [
        "Cavités importantes",
        "Dents définitives",
        "Esthétique exigeante",
      ],
      advantages: ["Précision maximale", "Résistance élevée", "Longévité"],
    },
  ];

  const procedure = [
    {
      step: "1",
      title: "Accueil adapté",
      description: "Environnement rassurant et explications ludiques",
    },
    {
      step: "2",
      title: "Diagnostic précis",
      description: "Examen clinique et radiographies si nécessaire",
    },
    {
      step: "3",
      title: "Anesthésie douce",
      description: "Gel anesthésiant suivi d'injection très fine si nécessaire",
    },
    {
      step: "4",
      title: "Nettoyage minutieux",
      description: "Élimination complète du tissu carié",
    },
    {
      step: "5",
      title: "Restauration",
      description: "Mise en place du matériau de restauration adapté",
    },
  ];

  const materials = [
    {
      name: "Composite",
      description: "Résine esthétique pour dents antérieures et postérieures",
      pros: [
        "Esthétique parfaite",
        "Collage chimique",
        "Préservation tissulaire",
      ],
      cons: ["Moins résistant", "Risque de coloration"],
    },
    {
      name: "Ciment verre ionomère",
      description: "Matériau bioactif libérant du fluor",
      pros: ["Libération de fluor", "Biocompatible", "Adhésion naturelle"],
      cons: ["Esthétique moyenne", "Résistance limitée"],
    },
    {
      name: "Amalgame (si nécessaire)",
      description: "Matériau traditionnel pour dents postérieures",
      pros: ["Très résistant", "Longévité", "Coût abordable"],
      cons: ["Couleur métallique", "Contient du mercure"],
    },
  ];

  const prevention = [
    "Contrôles réguliers tous les 6 mois",
    "Hygiène bucco-dentaire rigoureuse",
    "Fluoration topique si nécessaire",
    "Alimentation équilibrée, pauvre en sucres",
    "Scellement des sillons préventif",
    "Éducation à l'hygiène personnalisée",
  ];

  const warningSignes = [
    "Douleur spontanée ou à la mastication",
    "Sensibilité persistante au chaud/froid",
    "Tache brune ou noire sur la dent",
    "Trou visible dans la dent",
    "Gonflement de la gencive",
    "Mauvaise haleine localisée",
  ];

  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        strategy="afterInteractive"
      />

      <SEO
        title="Soins Conservateurs Enfants Marrakech - Pédodontie | BioSmile"
        description="Soins conservateurs pédodontiques à Marrakech. Traitement des caries chez l'enfant avec matériaux modernes. Centre BioSmile spécialisé en pédodontie."
        image="/images/og-soins-conservateurs.jpg"
        canonical="/soins-conservateurs"
      />

      <main className="p-6">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-50 to-white py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/soins-conservateurs-enfant.jpg"
              alt="Soins conservateurs pédodontiques Marrakech"
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
                  Soins Conservateurs
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
                  Préserver les dents de votre enfant
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  Les soins conservateurs permettent de traiter les caries tout
                  en préservant au maximum les tissus dentaires sains de votre
                  enfant. Avec des techniques douces et des matériaux modernes,
                  nous restaurons les dents abîmées pour leur redonner fonction
                  et esthétique.
                </p>
                <div className="bg-purple-100 border border-purple-200 text-purple-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Philosophie préservative
                  </h3>
                  <p>
                    Sauver la dent plutôt que l'extraire, c'est notre priorité
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/enfant-soin-dentaire.jpg"
                    alt="Enfant soin dentaire conservateur"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500 rounded-full opacity-20" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-30" />
              </div>
            </div>
          </div>
        </section>

        {/* Why preserve baby teeth */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Pourquoi soigner les dents de lait ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-[#6095b5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smile className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Fonction masticatoire
                </h3>
                <p className="text-gray-600 text-sm">
                  Nécessaires pour bien manger et digérer
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-[#6095b5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phonation</h3>
                <p className="text-gray-600 text-sm">
                  Indispensables pour une bonne élocution
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-[#6095b5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Guide d'éruption</h3>
                <p className="text-gray-600 text-sm">
                  Maintiennent l'espace pour les dents définitives
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-[#6095b5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Esthétique</h3>
                <p className="text-gray-600 text-sm">
                  Contribuent à l'épanouissement social
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nos Traitements Conservateurs
            </h2>
            <div className="space-y-12">
              {treatments.map((treatment, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                          <treatment.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold">
                          {treatment.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 mb-6">
                        {treatment.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-[#6095b5]">
                          Indications :
                        </h4>
                        <ul className="space-y-2">
                          {treatment.indications.map((indication, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-600">
                                {indication}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-green-600">
                        Avantages :
                      </h4>
                      <ul className="space-y-2">
                        {treatment.advantages.map((advantage, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Procedure */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Déroulement d'un soin conservateur
            </h2>
            <div className="space-y-8">
              {procedure.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
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

        {/* Materials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Matériaux de Restauration
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Nous utilisons les matériaux les plus adaptés selon l'âge de
              l'enfant, la localisation et l'étendue de la carie.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {materials.map((material, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-[#6095b5]">
                    {material.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{material.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-green-600 mb-2">
                      Avantages :
                    </h4>
                    <ul className="space-y-1">
                      {material.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm text-gray-700">
                          • {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">
                      Limites :
                    </h4>
                    <ul className="space-y-1">
                      {material.cons.map((con, idx) => (
                        <li key={idx} className="text-sm text-gray-700">
                          • {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Quand consulter rapidement ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {warningSignes.map((sign, index) => (
                <div
                  key={index}
                  className="bg-red-50 border border-red-200 p-6 rounded-lg"
                >
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{sign}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Prévention : Le Meilleur Traitement
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              La prévention reste le meilleur moyen d'éviter les soins
              conservateurs. Voici nos recommandations pour préserver les dents
              de votre enfant.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prevention.map((tip, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{tip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8">
              "Mon fils avait une grosse carie sur sa molaire de lait. Grâce aux
              soins conservateurs de l'équipe BioSmile, sa dent a pu être
              sauvée. Il n'a eu aucune douleur et le résultat est parfait !"
            </blockquote>
            <cite className="text-lg font-semibold text-purple-600">
              Khadija, maman d'Adam - Marrakech
            </cite>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Préservons ensemble les dents de votre enfant
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Consultation pédodontique gratuite pour évaluer l'état dentaire de
              votre enfant. Diagnostic précis et plan de traitement
              personnalisé.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
