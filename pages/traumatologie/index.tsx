// pages/traumatologie.tsx
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";
import Image from "next/image";
import {
  AlertTriangle,
  Clock,
  Phone,
  Shield,
  CheckCircle,
  Target,
} from "lucide-react";

export default function TraumatologiePage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    name: "Traumatologie Dentaire Enfants",
    description:
      "Traumatologie dentaire pédodontique à Marrakech. Prise en charge d'urgence des traumatismes dentaires chez l'enfant. Centre BioSmile spécialisé.",
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
        telephone: "+212-XXX-XXXXXX",
      },
    },
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: 0,
      suggestedMaxAge: 16,
    },
  };

  const traumaTypes = [
    {
      icon: AlertTriangle,
      title: "Fracture coronaire",
      description: "Cassure de la partie visible de la dent (émail, dentine)",
      severity: "Modéré à sévère",
      urgency: "24-48h",
    },
    {
      icon: Target,
      title: "Luxation dentaire",
      description: "Dent déplacée mais encore en bouche",
      severity: "Sévère",
      urgency: "Immédiat",
    },
    {
      icon: Shield,
      title: "Avulsion dentaire",
      description: "Dent complètement sortie de son alvéole",
      severity: "Très sévère",
      urgency: "< 1 heure",
    },
    {
      icon: Clock,
      title: "Contusion",
      description: "Choc sans déplacement ni fracture visible",
      severity: "Léger à modéré",
      urgency: "Surveillance",
    },
  ];

  const firstAid = [
    {
      trauma: "Dent cassée",
      steps: [
        "Récupérer les fragments si possible",
        "Rincer délicatement à l'eau tiède",
        "Conserver les morceaux dans du lait",
        "Consulter dans les 2-6 heures",
      ],
    },
    {
      trauma: "Dent expulsée (définitive)",
      steps: [
        "Récupérer la dent par la couronne",
        "Rincer sans frotter la racine",
        "Remettre en place ou dans du lait",
        "Urgence absolue : < 1 heure",
      ],
    },
    {
      trauma: "Dent de lait expulsée",
      steps: [
        "Ne PAS remettre en place",
        "Récupérer et conserver la dent",
        "Surveiller l'hémorragie",
        "Consulter dans la journée",
      ],
    },
    {
      trauma: "Dent luxée (bougée)",
      steps: [
        "Ne pas toucher à la dent",
        "Alimentation liquide/molle",
        "Antalgique si douleur",
        "Consultation d'urgence",
      ],
    },
  ];

  const prevention = [
    {
      icon: Shield,
      title: "Protège-dents sport",
      description: "Indispensable pour les sports de contact et à risque",
      age: "Dès 6 ans",
    },
    {
      icon: Target,
      title: "Sécurisation du domicile",
      description: "Éliminer les obstacles et angles dangereux",
      age: "0-6 ans",
    },
    {
      icon: CheckCircle,
      title: "Éducation sécuritaire",
      description: "Apprendre les règles de sécurité en jeu",
      age: "3-12 ans",
    },
  ];

  const complications = [
    "Nécrose pulpaire (mort du nerf)",
    "Infection apicale",
    "Résorption radiculaire",
    "Ankylose dentaire",
    "Troubles de l'éruption",
    "Atteinte de la dent définitive",
  ];

  const riskSports = [
    "Rugby",
    "Football",
    "Basketball",
    "Hockey",
    "Arts martiaux",
    "Cyclisme",
    "Skateboard",
    "Rollers",
    "Équitation",
    "Escalade",
  ];

  const followUp = [
    {
      period: "24-48h",
      actions: [
        "Contrôle clinique",
        "Évaluation de la douleur",
        "Radiographie si nécessaire",
      ],
    },
    {
      period: "1-2 semaines",
      actions: [
        "Vérification de la mobilité",
        "Test de vitalité pulpaire",
        "Surveillance coloration",
      ],
    },
    {
      period: "1-3-6 mois",
      actions: [
        "Radiographies de contrôle",
        "Test de vitalité",
        "Évaluation développement",
      ],
    },
    {
      period: "Annuel",
      actions: [
        "Suivi à long terme",
        "Surveillance éruption",
        "Évaluation orthodontique",
      ],
    },
  ];

  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        strategy="afterInteractive"
      />

      <SEO
        title="Traumatologie Dentaire Enfant Marrakech - Urgence | BioSmile"
        description="Traumatologie dentaire pédodontique à Marrakech. Prise en charge d'urgence des traumatismes dentaires chez l'enfant. Protocoles adaptés au centre BioSmile."
        image="/images/og-traumatologie.jpg"
        canonical="/traumatologie"
      />

      <main className="p-6">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-50 to-white py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/traumatologie-dentaire-enfant.jpg"
              alt="Traumatologie dentaire enfant Marrakech"
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
                  Traumatologie Dentaire
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-6">
                  Urgences traumatiques chez l'enfant
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  Les traumatismes dentaires sont fréquents chez l'enfant. Une
                  prise en charge rapide et appropriée peut sauver les dents
                  touchées. Le centre BioSmile dispose de l'expertise et des
                  équipements nécessaires pour gérer ces urgences.
                </p>
                <div className="bg-red-100 border border-red-200 text-red-800 p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Phone className="w-5 h-5 mr-2" />
                    <strong>Urgence traumatique :</strong>
                  </div>
                  <p className="text-xl font-bold">+212-XXX-XXXXXX</p>
                  <p className="text-sm mt-1">24h/24 pour dent expulsée</p>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/enfant-protege-dents.jpg"
                    alt="Enfant avec protège-dents sport"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500 rounded-full opacity-20" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500 rounded-full opacity-30" />
              </div>
            </div>
          </div>
        </section>

        {/* Types of Trauma */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Types de Traumatismes Dentaires
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Chaque type de traumatisme nécessite une prise en charge
              spécifique et une urgence différente selon la gravité.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {traumaTypes.map((trauma, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <trauma.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">
                          {trauma.title}
                        </h3>
                        <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                          {trauma.urgency}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{trauma.description}</p>
                      <p className="text-sm font-medium text-orange-600">
                        Sévérité : {trauma.severity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* First Aid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Premiers Secours selon le Traumatisme
            </h2>
            <p className="text-lg text-red-600 text-center mb-12 font-semibold">
              ⚠️ Ces gestes peuvent sauver les dents de votre enfant
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {firstAid.map((aid, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-6 text-red-600">
                    {aid.trauma}
                  </h3>
                  <ol className="space-y-3">
                    {aid.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Prévention des Traumatismes
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              La meilleure prise en charge d'un traumatisme, c'est sa prévention
              !
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {prevention.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md text-center"
                >
                  <div className="w-16 h-16 bg-[#6095b5] rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {item.age}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Sports */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Sports à Risque Traumatique
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Ces activités nécessitent impérativement un protège-dents adapté
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {riskSports.map((sport, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <AlertTriangle className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <span className="text-gray-700 font-medium">{sport}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <div className="bg-yellow-100 border border-yellow-200 text-yellow-800 p-6 rounded-lg inline-block">
                <h3 className="text-xl font-semibold mb-2">
                  Protège-dents sur-mesure
                </h3>
                <p>Réduction de 60% du risque de traumatisme dentaire</p>
              </div>
            </div>
          </div>
        </section>

        {/* Follow-up */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Suivi Post-Traumatique
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Un suivi rigoureux est essentiel pour détecter précocement les
              complications à long terme.
            </p>
            <div className="space-y-6">
              {followUp.map((period, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-[#6095b5] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm text-center">
                        {period.period}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4">
                        Contrôles à {period.period}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {period.actions.map((action, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{action}</span>
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

        {/* Complications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Complications Possibles
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              D'où l'importance d'un suivi régulier après tout traumatisme
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complications.map((complication, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500"
                >
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{complication}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to call */}
        <section className="py-16 bg-red-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Quand Nous Appeler en Urgence ?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600">
                    📞 Urgence immédiate ( 1h)
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Dent définitive expulsée</li>
                    <li>• Luxation sévère avec déplacement</li>
                    <li>• Fracture avec exposition pulpaire</li>
                    <li>• Hémorragie importante</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-orange-600">
                    📞 Urgence différée (24-48h)
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Fracture coronaire simple</li>
                    <li>• Contusion avec douleur</li>
                    <li>• Mobilité dentaire légère</li>
                    <li>• Changement de coloration</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8">
                <div className="bg-red-100 border border-red-200 text-red-800 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">
                    Ligne d'urgence traumatique
                  </h3>
                  <p className="text-3xl font-bold">+212-XXX-XXXXXX</p>
                  <p className="text-sm mt-2">
                    Disponible 24h/24 pour les urgences traumatiques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8">
              "Mon fils est tombé de vélo et s'est cassé une dent. Grâce à la
              réactivité de l'équipe BioSmile et aux bons gestes que nous avons
              appliqués, sa dent a pu être sauvée. Un grand merci !"
            </blockquote>
            <cite className="text-lg font-semibold text-red-600">
              Omar, papa de Mehdi - Marrakech
            </cite>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Formation aux Gestes de Premiers Secours
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Nous proposons des séances d'information pour les parents, écoles
              et clubs sportifs sur la conduite à tenir en cas de traumatisme
              dentaire.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
