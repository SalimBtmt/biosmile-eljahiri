// pages/hygiene-bucco-dentaire-enfant.tsx
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";
import Image from "next/image";
import { Heart, Shield, Smile, Star, CheckCircle } from "lucide-react";

export default function HygieneBuccoDentaireEnfantPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Hygiène Bucco-Dentaire chez l'Enfant",
    description:
      "Pédodontie à Marrakech : hygiène bucco-dentaire pour enfants, prévention des caries et éducation. Centre BioSmile spécialisé.",
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

  const ageGroups = [
    {
      icon: Heart,
      title: "0-2 ans : Les premiers pas",
      description:
        "Nettoyage doux des gencives et premières dents avec une compresse humide",
      tips: [
        "Nettoyage après chaque biberon",
        "Massage doux des gencives",
        "Première visite chez le dentiste à 1 an",
        "Éviter le biberon au coucher",
      ],
    },
    {
      icon: Smile,
      title: "3-6 ans : L'apprentissage",
      description:
        "Initiation au brossage avec supervision parentale constante",
      tips: [
        "Brosse à dents adaptée à l'âge",
        "Dentifrice fluoré en petite quantité",
        "Brossage 2 fois par jour supervisé",
        "Technique ludique et encourageante",
      ],
    },
    {
      icon: Star,
      title: "7-12 ans : L'autonomie",
      description:
        "Développement de l'autonomie avec contrôle parental régulier",
      tips: [
        "Technique de brossage perfectionnée",
        "Introduction du fil dentaire",
        "Motivation par récompenses",
        "Visites régulières tous les 6 mois",
      ],
    },
  ];

  const preventionTips = [
    {
      category: "Alimentation",
      tips: [
        "Limiter les sucreries entre les repas",
        "Privilégier les fruits frais aux jus",
        "Éviter les boissons sucrées",
        "Rincer à l'eau après les collations sucrées",
      ],
    },
    {
      category: "Hygiène",
      tips: [
        "Brossage 2 fois par jour minimum",
        "Changement de brosse tous les 3 mois",
        "Utilisation de dentifrice adapté à l'âge",
        "Supervision jusqu'à 8 ans",
      ],
    },
    {
      category: "Habitudes",
      tips: [
        "Arrêt de la succion du pouce après 3 ans",
        "Éviter de partager les ustensiles",
        "Ne pas lécher la tétine du bébé",
        "Donner l'exemple en tant que parent",
      ],
    },
  ];

  const brushingSteps = [
    {
      step: "1",
      title: "Préparation",
      description:
        "Brosse adaptée + dentifrice fluoré (grain de riz avant 3 ans, petit pois après)",
    },
    {
      step: "2",
      title: "Technique",
      description:
        "Mouvements circulaires doux, de la gencive vers la dent, sans forcer",
    },
    {
      step: "3",
      title: "Durée",
      description:
        "2 minutes minimum, utiliser un sablier ou une chanson pour chronométrer",
    },
    {
      step: "4",
      title: "Rinçage",
      description: "Rinçage léger pour conserver les bénéfices du fluor",
    },
  ];

  const warningSign = [
    "Taches blanches ou brunes sur les dents",
    "Mauvaise haleine persistante",
    "Gencives rouges ou qui saignent",
    "Douleur lors de la mastication",
    "Sensibilité au chaud ou au froid",
    "Refus de manger ou de boire",
  ];

  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        strategy="afterInteractive"
      />

      <SEO
        title="Hygiène Bucco-Dentaire Enfant Marrakech - Pédodontie | BioSmile"
        description="Hygiène bucco-dentaire pour enfants à Marrakech. Prévention des caries, éducation et conseils adaptés à chaque âge. Centre BioSmile pédodontie."
        image="/images/og-hygiene-enfant.jpg"
        canonical="/hygiene-bucco-dentaire-enfant"
      />

      <main className="p-6">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-50 to-white py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/enfant-brossage-dents.jpg"
              alt="Hygiène bucco-dentaire enfant Marrakech"
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
                  Hygiène Bucco-Dentaire
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-6">
                  Les bonnes habitudes dès le plus jeune âge
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  L'hygiène bucco-dentaire de votre enfant est la base d'une
                  dentition saine toute sa vie. Au centre BioSmile de Marrakech,
                  nous vous accompagnons pour établir les bonnes habitudes dès
                  le plus jeune âge avec des conseils adaptés à chaque étape de
                  croissance.
                </p>
                <div className="bg-green-100 border border-green-200 text-green-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Première visite à 1 an
                  </h3>
                  <p>
                    La prévention commence dès l'apparition des premières dents
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/famille-brossage-dents.jpg"
                    alt="Famille hygiène dentaire Marrakech"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500 rounded-full opacity-20" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full opacity-30" />
              </div>
            </div>
          </div>
        </section>

        {/* Age Groups */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Hygiène Adaptée à Chaque Âge
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Chaque étape de croissance nécessite une approche spécifique pour
              établir de bonnes habitudes d'hygiène bucco-dentaire.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ageGroups.map((group, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md text-center"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <group.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
                  <p className="text-gray-600 mb-6">{group.description}</p>
                  <ul className="space-y-2 text-sm">
                    {group.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start text-left">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brushing Technique */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              La Technique de Brossage Parfaite
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {brushingSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">
                          {step.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/technique-brossage-enfant.jpg"
                  alt="Technique brossage dents enfant"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Conseils de Prévention
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {preventionTips.map((category, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-6 text-[#6095b5]">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="py-16 bg-red-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Signaux d'Alarme : Quand Consulter ?
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Certains signes doivent vous alerter et nécessitent une
              consultation rapide chez votre pédodontiste.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {warningSign.map((sign, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500"
                >
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{sign}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Making it Fun */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Rendre l'Hygiène Dentaire Amusante
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#6095b5]">
                  Astuces pour motiver votre enfant
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Star className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">
                        Calendrier des récompenses
                      </h4>
                      <p className="text-gray-600">
                        Système d'autocollants pour chaque brossage réussi
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Chansons et musique</h4>
                      <p className="text-gray-600">
                        2 minutes de brossage avec la chanson préférée
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Brosse personnalisée</h4>
                      <p className="text-gray-600">
                        Laisser l'enfant choisir sa brosse et son dentifrice
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Brossage en famille</h4>
                      <p className="text-gray-600">
                        Donner l'exemple en se brossant les dents ensemble
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/images/enfant-heureux-brossage.jpg"
                  alt="Enfant heureux brossage dents"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-green-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8">
              "Grâce aux conseils de l'équipe BioSmile, ma fille de 5 ans adore
              maintenant se brosser les dents. Le système de récompenses et les
              explications adaptées à son âge ont fait toute la différence !"
            </blockquote>
            <cite className="text-lg font-semibold text-green-600">
              Latifa, maman de Salma - Marrakech
            </cite>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Accompagnez votre enfant vers une hygiène parfaite
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Consultation pédodontique gratuite pour établir un plan d'hygiène
              personnalisé. Nos spécialistes vous donneront tous les conseils
              adaptés à l'âge de votre enfant.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
