// pages/gouttieres-invisibles.tsx
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";
import Image from "next/image";
import {
  Eye,
  CheckCircle,
  Clock,
  Shield,
  Smile,
  RefreshCw,
  Star,
  Target,
} from "lucide-react";

export default function GouttieresInvisiblesPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Gouttières Invisibles",
    description:
      "Gouttières invisibles à Marrakech. Aligneurs transparents personnalisés pour redresser vos dents en toute discrétion. Centre BioSmile orthodontie moderne.",
    serviceType: "Orthodontie",
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
      suggestedMinAge: 16,
      suggestedMaxAge: 65,
    },
  };

  const benefits = [
    {
      icon: Eye,
      title: "Transparence totale",
      description:
        "Pratiquement invisibles, vos collègues ne s'apercevront de rien",
    },
    {
      icon: Shield,
      title: "Confort optimal",
      description:
        "Matériau souple sans irritation ni blessure, adaptation rapide",
    },
    {
      icon: Target,
      title: "Liberté alimentaire",
      description:
        "Amovibles pour manger et boire sans contrainte, hygiène facilitée",
    },
  ];

  const advantages = [
    "Pratiquement invisibles",
    "Amovibles pour manger et se brosser les dents",
    "Confort supérieur, pas d'irritation",
    "Hygiène bucco-dentaire facilitée",
    "Pas de restriction alimentaire",
    "Rendez-vous plus espacés",
  ];

  const considerations = [
    "Port minimum 22h/jour requis",
    "Discipline personnelle nécessaire",
    "Adaptation initiale (3-5 jours)",
    "Limitées aux cas moyennement complexes",
  ];

  const procedure = [
    {
      step: "1",
      title: "Consultation",
      description: "Évaluation de votre cas et éligibilité aux gouttières",
    },
    {
      step: "2",
      title: "Empreintes",
      description: "Prise d'empreintes précises pour conception sur-mesure",
    },
    {
      step: "3",
      title: "Simulation",
      description: "Aperçu du résultat final et validation du plan",
    },
    {
      step: "4",
      title: "Fabrication",
      description: "Création de toutes vos gouttières personnalisées",
    },
    {
      step: "5",
      title: "Suivi",
      description: "Changement toutes les 2 semaines, contrôles réguliers",
    },
  ];

  const usageTips = [
    {
      icon: Clock,
      title: "Port quotidien",
      description:
        "Portez vos gouttières 22h/jour minimum. Ne les retirez que pour manger, boire (sauf l'eau) et vous brosser les dents.",
      details: [
        "Matin : remise après brossage",
        "Repas : retrait temporaire",
        "Soir : port durant le sommeil",
      ],
    },
    {
      icon: Smile,
      title: "Entretien",
      description:
        "Nettoyez quotidiennement vos gouttières avec une brosse douce et un dentifrice non abrasif. Rincez à l'eau tiède.",
      details: [
        "Brossage matin et soir",
        "Pastilles nettoyantes 2x/semaine",
        "Éviter l'eau chaude",
      ],
    },
    {
      icon: RefreshCw,
      title: "Changement",
      description:
        "Changez de gouttière toutes les 2 semaines selon la prescription. Respectez l'ordre numéroté pour un résultat optimal.",
      details: [
        "Changement le soir",
        "Première sensation de serrage normale",
        "Conservez la gouttière précédente",
      ],
    },
  ];

  const idealCandidates = [
    "Professionnels en contact avec le public",
    "Adolescents soucieux de leur apparence",
    "Sportifs et musiciens",
    "Patients allergiques aux métaux",
    "Cas orthodontiques moyens à complexes",
    "Patients disciplinés et motivés",
  ];

  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        strategy="afterInteractive"
      />

      <SEO
        title="Gouttières Invisibles Marrakech - Aligneurs Transparents | BioSmile"
        description="Gouttières invisibles à Marrakech. Aligneurs transparents sur-mesure pour redresser vos dents en toute discrétion. Centre BioSmile orthodontie moderne."
        image="/images/og-gouttieres-invisibles.jpg"
        canonical="/gouttieres-invisibles"
      />

      <main className="p-6">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/gouttieres-invisibles-marrakech.jpg"
              alt="Gouttières invisibles Marrakech"
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
                  Gouttières Invisibles
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#6095b5] mb-6">
                  La révolution orthodontique transparente
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  Découvrez les gouttières invisibles, une alternative moderne
                  et discrète aux appareils orthodontiques traditionnels. Une
                  orthodontie invisible qui s'adapte parfaitement à votre mode
                  de vie.
                </p>
                <div className="bg-[#6095b5] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    <Eye className="w-6 h-6 inline mr-2" />
                    100% Discret
                  </h3>
                  <p>
                    Pratiquement invisibles, personne ne s'apercevra de votre
                    traitement
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/aligneurs-transparents.jpg"
                    alt="Aligneurs transparents gouttières invisibles"
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

        {/* How it Works */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Comment fonctionnent les gouttières invisibles ?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Les aligneurs transparents sont des gouttières sur-mesure qui
                  exercent une pression douce et contrôlée sur vos dents. Chaque
                  gouttière vous rapproche progressivement de votre sourire
                  idéal.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Fabriquées dans un matériau thermoplastique médical
                  transparent, elles sont pratiquement invisibles et
                  parfaitement adaptées à votre dentition pour un confort
                  optimal.
                </p>
                <div className="bg-blue-100 border border-blue-200 text-blue-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Technologie avancée
                  </h3>
                  <p>
                    Conception 3D et simulation du résultat final avant
                    traitement
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/images/fonctionnement-gouttieres.jpg"
                  alt="Fonctionnement gouttières invisibles"
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
              Pourquoi choisir les gouttières invisibles ?
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

        {/* Comparison */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Gouttières transparentes vs appareils traditionnels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  Avantages des gouttières
                </h3>
                <ul className="space-y-3">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-gray-600 mr-2" />
                  Points d'attention
                </h3>
                <ul className="space-y-3">
                  {considerations.map((consideration, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{consideration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Procedure */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Votre traitement par gouttières en 5 étapes
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

        {/* Usage Tips */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Conseils pour optimiser votre traitement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {usageTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg p-6 shadow-md"
                >
                  <div className="w-12 h-12 bg-[#6095b5] rounded-lg flex items-center justify-center mb-4">
                    <tip.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{tip.description}</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    {tip.details.map((detail, idx) => (
                      <li key={idx}>• {detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal Candidates */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Idéal pour qui ?
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
                  Parfait pour votre quotidien
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Les gouttières invisibles conviennent parfaitement aux
                    adultes et adolescents qui souhaitent corriger leur sourire
                    sans impact sur leur{" "}
                    <strong>vie sociale ou professionnelle</strong>.
                  </p>
                  <p>
                    Que vous soyez en contact avec le public, musicien, sportif
                    ou simplement soucieux de votre apparence, cette solution
                    s'adapte à <strong>tous les modes de vie</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Témoignage patient
            </h2>
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                "J'enseigne devant 200 étudiants chaque jour. Avec mes
                gouttières invisibles, personne ne s'est aperçu de mon
                traitement orthodontique. En 18 mois, j'ai obtenu le sourire
                dont je rêvais !"
              </p>
              <p className="font-semibold text-gray-900">
                Fatima, 32 ans, Professeure d'université
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Combien de temps faut-il porter les gouttières par jour ?
                </h3>
                <p className="text-gray-600">
                  Les gouttières doivent être portées minimum 22h par jour pour
                  être efficaces. Vous ne les retirez que pour manger, boire
                  (sauf l'eau) et vous brosser les dents.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Les gouttières sont-elles vraiment invisibles ?
                </h3>
                <p className="text-gray-600">
                  Oui, elles sont pratiquement invisibles. Fabriquées dans un
                  matériau transparent de qualité médicale, elles se remarquent
                  à peine, même de près. La plupart des gens ne s'aperçoivent de
                  rien.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Combien de temps dure le traitement ?
                </h3>
                <p className="text-gray-600">
                  La durée varie selon la complexité du cas, généralement entre
                  12 et 24 mois. Nous changeons les gouttières toutes les 2
                  semaines pour un mouvement progressif et confortable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformez votre sourire en toute discrétion
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Découvrez si vous êtes éligible aux gouttières invisibles.
              Consultation gratuite avec simulation du résultat final pour
              visualiser votre nouveau sourire.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
