// pages/orthodontie-adulte.tsx
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";
import Image from "next/image";
import { Shield, CheckCircle, Star, User, Clock, Target } from "lucide-react";

export default function OrthodontieAdultePage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Orthodontie Adulte",
    description:
      "Orthodontie adulte à Marrakech. Solutions discrètes pour redresser votre sourire : bagues transparentes, orthodontie linguale, aligneurs. Centre BioSmile.",
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
      suggestedMinAge: 18,
      suggestedMaxAge: 65,
    },
  };

  const benefits = [
    {
      icon: Star,
      title: "Confiance en soi renforcée",
      description:
        "Un sourire harmonieux booste votre assurance professionnelle et personnelle",
    },
    {
      icon: Shield,
      title: "Amélioration de la santé bucco-dentaire",
      description:
        "Des dents bien alignées sont plus faciles à nettoyer et moins sujettes aux caries",
    },
    {
      icon: Target,
      title: "Fonctionnement optimisé",
      description:
        "Meilleure mastication, réduction des tensions articulaires et cervicales",
    },
  ];

  const solutions = [
    {
      icon: Shield,
      title: "Bagues transparentes",
      description:
        "Bagues en céramique transparente qui se fondent avec la couleur naturelle de vos dents. Efficacité maximale avec une discrétion optimale.",
      features: [
        "Très discrètes",
        "Résistantes aux taches",
        "Correction précise",
        "Durée : 18-24 mois",
      ],
    },
    {
      icon: Star,
      title: "Orthodontie linguale",
      description:
        "Bagues placées sur la face interne des dents, totalement invisibles de l'extérieur. La solution la plus discrète pour les professionnels.",
      features: [
        "100% invisible",
        "Personnalisée",
        "Confort optimal",
        "Durée : 12-18 mois",
      ],
    },
    {
      icon: User,
      title: "Aligneurs transparents",
      description:
        "Gouttières transparentes et amovibles qui redressent progressivement vos dents. Confort et practicité au quotidien.",
      features: [
        "Amovibles",
        "Hygiène facilitée",
        "Aucune restriction alimentaire",
        "Durée : 12-20 mois",
      ],
    },
  ];

  const procedure = [
    {
      step: "1",
      title: "Consultation",
      description:
        "Examen clinique complet et analyse de votre situation orthodontique",
    },
    {
      step: "2",
      title: "Diagnostic",
      description:
        "Radiographies et empreintes pour établir un plan de traitement personnalisé",
    },
    {
      step: "3",
      title: "Traitement",
      description:
        "Pose de l'appareil orthodontique et suivi régulier tous les mois",
    },
    {
      step: "4",
      title: "Contention",
      description:
        "Maintien des résultats avec des appareils de contention discrets",
    },
  ];

  const idealCandidates = [
    "Adultes de 18 à 65 ans",
    "Dents et gencives saines",
    "Motivation pour le traitement",
    "Besoin esthétique ou fonctionnel",
    "Disponibilité pour le suivi",
    "Engagement dans l'hygiène",
  ];

  const advantages = [
    "Solutions 100% discrètes",
    "Adaptation au style de vie professionnel",
    "Techniques modernes et confortables",
    "Résultats durables",
    "Amélioration de la confiance en soi",
    "Suivi personnalisé",
  ];

  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        strategy="afterInteractive"
      />

      <SEO
        title="Orthodontie Adulte Marrakech - Solutions Discrètes | BioSmile"
        description="Orthodontie adulte à Marrakech. Solutions discrètes : bagues transparentes, orthodontie linguale, aligneurs. Redressez votre sourire au centre BioSmile."
        image="/images/og-orthodontie-adulte.jpg"
        canonical="/orthodontie-adulte"
      />

      <main className="p-6">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/orthodontie-adulte-marrakech.jpg"
              alt="Orthodontie adulte Marrakech"
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
                  Orthodontie Adulte
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#6095b5] mb-6">
                  Redressez votre sourire en toute discrétion
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  Vous avez toujours rêvé d'un sourire parfaitement aligné ? Il
                  n'est jamais trop tard ! Nos solutions orthodontiques
                  spécialement conçues pour les adultes allient efficacité et
                  discrétion pour transformer votre sourire.
                </p>
                <div className="bg-[#6095b5] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Jamais trop tard
                  </h3>
                  <p>
                    25% des patients orthodontiques sont aujourd'hui des adultes
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/sourire-adulte-orthodontie.jpg"
                    alt="Sourire adulte après orthodontie"
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
              Pourquoi corriger son sourire à l'âge adulte ?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Contrairement aux idées reçues, l'orthodontie adulte est
                  aujourd'hui très courante. Que ce soit pour des raisons
                  esthétiques ou fonctionnelles, redresser ses dents améliore
                  considérablement votre qualité de vie.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  L'âge n'est plus un obstacle grâce aux techniques modernes et
                  discrètes. Nous adaptons chaque traitement à votre style de
                  vie professionnel et personnel pour que votre orthodontie
                  passe inaperçue.
                </p>
                <div className="bg-green-100 border border-green-200 text-green-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Solutions modernes
                  </h3>
                  <p>Techniques 100% discrètes adaptées aux adultes actifs</p>
                </div>
              </div>
              <div>
                <Image
                  src="/images/avant-apres-orthodontie.jpg"
                  alt="Avant après orthodontie adulte"
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
              Les bénéfices de l'orthodontie adulte
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

        {/* Solutions */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nos solutions orthodontiques discrètes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg p-6 shadow-md"
                >
                  <div className="w-12 h-12 bg-[#6095b5] rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Procedure */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Votre traitement orthodontique en 4 étapes
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

        {/* Ideal Candidates */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Êtes-vous un candidat idéal ?
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
                    <strong>25% des patients orthodontiques</strong> sont
                    aujourd'hui des adultes.
                  </p>
                  <p>
                    L'âge n'est plus un obstacle grâce aux techniques modernes
                    et discrètes.
                  </p>
                  <p>
                    Nous adaptons chaque traitement à votre style de vie pour
                    que votre orthodontie <strong>passe inaperçue</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Pourquoi choisir BioSmile ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((item, index) => (
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
                "J'avais 35 ans quand j'ai décidé de corriger mes dents. Grâce
                aux bagues transparentes de BioSmile, personne ne s'en est
                aperçu au travail. Le résultat est parfait et ça a changé ma vie
                !"
              </p>
              <p className="font-semibold text-gray-900">
                Karim, 37 ans, Avocat
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
                  L'orthodontie est-elle efficace à l'âge adulte ?
                </h3>
                <p className="text-gray-600">
                  Absolument ! Les dents peuvent se déplacer à tout âge. Les
                  techniques modernes permettent des résultats excellents chez
                  l'adulte, souvent plus rapidement qu'on ne le pense.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Combien de temps dure un traitement orthodontique adulte ?
                </h3>
                <p className="text-gray-600">
                  La durée varie selon la complexité du cas, généralement entre
                  12 et 24 mois. Nos solutions modernes permettent souvent des
                  traitements plus courts qu'autrefois.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Les traitements sont-ils vraiment discrets ?
                </h3>
                <p className="text-gray-600">
                  Oui, nous proposons des solutions 100% invisibles comme
                  l'orthodontie linguale ou quasi-invisibles comme les bagues
                  transparentes et aligneurs, parfaites pour la vie
                  professionnelle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer votre sourire ?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Bénéficiez d'une consultation orthodontique gratuite avec nos
              spécialistes. Nous établirons ensemble un plan de traitement
              adapté à vos besoins et à votre budget.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
