// pages/urgences-dentaires.tsx
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";
import Image from "next/image";
import { AlertTriangle, Clock, Phone, Shield } from "lucide-react";

export default function UrgencesDentairesPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    name: "Urgences Dentaires",
    description:
      "Service d'urgences dentaires à Marrakech. Prise en charge rapide des douleurs dentaires, traumatismes et infections. Centre BioSmile.",
    serviceType: "Urgences Dentaires",
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
    availableLanguage: ["fr", "ar"],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
  };

  const emergencyTypes = [
    {
      icon: AlertTriangle,
      title: "Douleur dentaire intense",
      description:
        "Rage de dent, pulpite, abcès dentaire nécessitant un soulagement immédiat",
      urgency: "Très urgent",
    },
    {
      icon: Shield,
      title: "Traumatisme dentaire",
      description: "Dent cassée, fêlée, expulsée suite à un choc ou accident",
      urgency: "Urgent",
    },
    {
      icon: AlertTriangle,
      title: "Infection et gonflement",
      description: "Abcès, cellulite, gonflement du visage d'origine dentaire",
      urgency: "Très urgent",
    },
    {
      icon: Clock,
      title: "Saignement persistant",
      description:
        "Hémorragie gingivale ou post-extraction qui ne s'arrête pas",
      urgency: "Urgent",
    },
  ];

  const firstAidSteps = [
    {
      situation: "Douleur intense",
      steps: [
        "Prenez un antalgique (paracétamol ou ibuprofène)",
        "Appliquez du froid sur la joue (10 min par heure)",
        "Évitez le chaud et le froid sur la dent",
        "Contactez immédiatement le cabinet",
      ],
    },
    {
      situation: "Dent cassée",
      steps: [
        "Récupérez les fragments si possible",
        "Rincez délicatement à l'eau tiède",
        "Protégez la langue avec une compresse",
        "Consultez dans les 2 heures",
      ],
    },
    {
      situation: "Dent expulsée",
      steps: [
        "Récupérez la dent par la couronne (pas la racine)",
        "Rincez délicatement sans frotter",
        "Remettez-la en bouche ou dans du lait",
        "Consultez dans l'heure (pronostic vital de la dent)",
      ],
    },
  ];

  const warningSigns = [
    "Fièvre associée à une douleur dentaire",
    "Gonflement du visage ou du cou",
    "Difficulté à avaler ou respirer",
    "Saignement abondant qui ne s'arrête pas",
    "Douleur irradiant vers l'oreille ou la mâchoire",
    "Goût métallique persistant dans la bouche",
  ];

  const whatNotToDo = [
    "Ne pas mettre d'aspirine directement sur la dent",
    "Ne pas utiliser d'objets pointus pour nettoyer",
    "Ne pas ignorer une douleur persistante",
    "Ne pas attendre que ça passe tout seul",
    "Ne pas prendre d'antibiotiques sans prescription",
    "Ne pas appliquer de chaleur sur un gonflement",
  ];

  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        strategy="afterInteractive"
      />

      <SEO
        title="Urgences Dentaires Marrakech - Prise en Charge Rapide | BioSmile"
        description="Urgences dentaires à Marrakech : douleurs, traumatismes, infections. Prise en charge rapide au centre BioSmile. Conseils et contact d'urgence."
        image="/images/og-urgences-dentaires.jpg"
        canonical="/urgences-dentaires"
      />

      <main className="p-6">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-50 to-white py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/urgences-dentaires.jpg"
              alt="Urgences dentaires Marrakech BioSmile"
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
                  Urgences Dentaires
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-6">
                  Prise en charge rapide et efficace
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  Une urgence dentaire ? Ne souffrez plus ! Le centre BioSmile à
                  Marrakech vous propose une prise en charge rapide pour
                  soulager vos douleurs et traiter efficacement votre problème
                  dentaire.
                </p>
                <div className="bg-red-100 border border-red-200 text-red-800 p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Phone className="w-5 h-5 mr-2" />
                    <strong>Ligne d'urgence :</strong>
                  </div>
                  <p className="text-xl font-bold">+212-XXX-XXXXXX</p>
                  <p className="text-sm mt-1">
                    Du lundi au vendredi : 8h30-18h00
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/consultation-urgence.jpg"
                    alt="Consultation urgence dentaire Marrakech"
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

        {/* Types of Emergencies */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Principales Urgences Dentaires
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Reconnaissez les signes d'une urgence dentaire et agissez
              rapidement pour préserver votre santé bucco-dentaire.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {emergencyTypes.map((emergency, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <emergency.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold mr-3">
                          {emergency.title}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            emergency.urgency === "Très urgent"
                              ? "bg-red-100 text-red-800"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {emergency.urgency}
                        </span>
                      </div>
                      <p className="text-gray-600">{emergency.description}</p>
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
              Premiers Secours en Attendant le Dentiste
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {firstAidSteps.map((aid, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-[#6095b5]">
                    {aid.situation}
                  </h3>
                  <ol className="space-y-2">
                    {aid.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="w-6 h-6 bg-[#6095b5] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
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

        {/* Warning Signs */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Signaux d'Alarme : Consultez Immédiatement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-red-600">
                  ⚠️ Signes d'urgence absolue
                </h3>
                <ul className="space-y-3">
                  {warningSigns.map((sign, index) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-orange-600">
                  ❌ À éviter absolument
                </h3>
                <ul className="space-y-3">
                  {whatNotToDo.map((dont, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0">
                        ✗
                      </span>
                      <span>{dont}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Notre Prise en Charge d'Urgence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Appel d'urgence",
                  description:
                    "Contactez-nous immédiatement. Décrivez vos symptômes.",
                },
                {
                  step: "2",
                  title: "Rendez-vous prioritaire",
                  description: "Créneaux d'urgence réservés dans la journée.",
                },
                {
                  step: "3",
                  title: "Soulagement rapide",
                  description: "Prise en charge de la douleur en priorité.",
                },
                {
                  step: "4",
                  title: "Traitement définitif",
                  description: "Plan de traitement pour résoudre le problème.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
              <Phone className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Une Urgence Dentaire ?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                N'attendez pas que la douleur s'aggrave. Contactez-nous
                immédiatement pour une prise en charge rapide.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <p className="text-2xl font-bold text-red-600 mb-2">
                  +212-XXX-XXXXXX
                </p>
                <p className="text-gray-600">Lundi - Vendredi : 8h30 - 18h00</p>
                <p className="text-sm text-gray-500 mt-2">
                  En dehors des heures d'ouverture, laissez un message détaillé
                </p>
              </div>
              <ContactUs />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
