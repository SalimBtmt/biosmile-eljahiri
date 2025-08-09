// pages/orthodontie-enfant.tsx
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";
import Image from "next/image";
import { Heart, CheckCircle, AlertTriangle, Users, Star, Shield, Target, Clock } from "lucide-react";

export default function OrthodontieEnfantPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Orthodontie Enfant",
    description:
      "Orthodontie enfant à Marrakech. Traitement orthodontique précoce et adapté pour enfants de 6 à 12 ans. Approche douce et ludique au centre BioSmile.",
    serviceType: "Orthodontie Pédiatrique",
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
      suggestedMaxAge: 12,
    },
  };

  const benefits = [
    {
      icon: Target,
      title: "Correction guidée",
      description:
        "Orientons la croissance des mâchoires dans le bon sens pendant la période de développement",
    },
    {
      icon: Shield,
      title: "Prévention efficace",
      description:
        "Évitons les extractions et les traitements lourds à l'adolescence",
    },
    {
      icon: Heart,
      title: "Confiance préservée",
      description:
        "Votre enfant grandit avec un sourire harmonieux et une meilleure estime de soi",
    },
  ];

  const warningSignsData = [
    {
      icon: AlertTriangle,
      title: "Dents qui se chevauchent",
      description: "Manque d'espace dans la mâchoire, dents qui poussent de travers",
      color: "orange",
    },
    {
      icon: AlertTriangle,
      title: "Respiration par la bouche",
      description: "Bouche ouverte au repos, ronflement, assèchement buccal",
      color: "red",
    },
    {
      icon: AlertTriangle,
      title: "Succion persistante",
      description: "Pouce, tétine ou biberon au-delà de 3 ans",
      color: "purple",
    },
    {
      icon: AlertTriangle,
      title: "Décalage des mâchoires",
      description: "Dents du haut trop en avant ou mâchoire décalée",
      color: "blue",
    },
  ];

  const appareilTypes = [
    {
      icon: Users,
      title: "Appareils amovibles",
      description:
        "Parfaits pour les corrections légères et l'éducation fonctionnelle. Votre enfant peut les retirer pour manger et se brosser les dents.",
      advantages: ["Hygiène facilitée", "Confort alimentaire", "Couleurs au choix"],
      indications: ["Expansion du palais", "Correction des habitudes", "Alignement léger"],
      color: "blue",
    },
    {
      icon: Star,
      title: "Appareils fixes",
      description:
        "Bagues colorées et attaches décoratives pour les corrections plus importantes. Votre enfant peut choisir ses couleurs préférées !",
      advantages: ["Action continue", "Résultats précis", "Personnalisables"],
      indications: ["Alignement complexe", "Correction des rotations", "Fermeture d'espaces"],
      color: "green",
    },
  ];

  const procedure = [
    {
      step: "1",
      title: "Première visite",
      description: "Consultation gratuite et familiarisation avec l'équipe. Examen clinique doux et explications adaptées.",
    },
    {
      step: "2",
      title: "Diagnostic personnalisé",
      description: "Radiographies et moulages pour analyser la croissance. Plan de traitement adapté à l'âge et aux besoins.",
    },
    {
      step: "3",
      title: "Suivi régulier",
      description: "Rendez-vous toutes les 6 à 8 semaines. Accompagnement et encouragements à chaque étape.",
    },
  ];

  const bioSmileApproach = [
    "Première consultation gratuite et sans engagement",
    "Explications adaptées à l'âge de l'enfant",
    "Appareils colorés et personnalisables",
    "Suivi bienveillant et encourageant",
    "Environnement rassurant et ludique",
    "Équipe spécialisée en orthodontie pédiatrique",
  ];

  const idealAge = [
    {
      age: "6-8 ans",
      title: "Détection précoce",
      description: "Première évaluation orthodontique recommandée",
    },
    {
      age: "8-10 ans",
      title: "Traitement interceptif",
      description: "Correction des problèmes de croissance",
    },
    {
      age: "10-12 ans",
      title: "Orthodontie active",
      description: "Alignement des dents définitives",
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
        title="Orthodontie Enfant Marrakech - Traitement Précoce | BioSmile"
        description="Orthodontie enfant à Marrakech. Traitement orthodontique précoce de 6 à 12 ans. Approche douce et ludique au centre BioSmile."
        image="/images/og-orthodontie-enfant.jpg"
        canonical="/orthodontie-enfant"
      />

      <main className="p-6">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-50 to-white py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/orthodontie-enfant-marrakech.jpg"
              alt="Orthodontie enfant Marrakech"
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
                  Orthodontie Enfant
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#6095b5] mb-6">
                  Accompagnez la croissance de son sourire
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  Dès l'âge de 6 ans, il est possible de détecter et corriger les
                  problèmes orthodontiques de votre enfant. Nous proposons une
                  approche douce et ludique pour accompagner la croissance de son
                  sourire.
                </p>
                <div className="bg-[#6095b5] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    <Heart className="w-6 h-6 inline mr-2" />
                    L'investissement pour l'avenir
                  </h3>
                  <p>
                    L'orthodontie précoce profite de la croissance naturelle
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/enfant-sourire-orthodontie.jpg"
                    alt="Enfant souriant avec appareil orthodontique"
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

        {/* Why Start Early */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Pourquoi commencer tôt ?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  L'orthodontie interceptive profite de la croissance naturelle de
                  votre enfant. Entre 6 et 12 ans, les os de la mâchoire sont
                  encore en formation, ce qui permet des corrections plus faciles
                  et plus rapides.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Cette période représente une fenêtre d'opportunité unique pour
                  guider le développement des dents et des mâchoires dans la bonne
                  direction, évitant ainsi des traitements plus complexes à
                  l'adolescence.
                </p>
                <div className="bg-green-100 border border-green-200 text-green-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Période idéale</h3>
                  <p>
                    Entre 6 et 12 ans : os en formation, corrections facilitées
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/images/croissance-machoire-enfant.jpg"
                  alt="Croissance mâchoire enfant"
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
              Les bénéfices de l'orthodontie précoce
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

        {/* Warning Signs */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              4 signes qui doivent vous alerter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {warningSignsData.map((sign, index) => (
                <div
                  key={index}
                  className={`bg-white border-l-4 border-${sign.color}-400 p-6 shadow-md rounded-lg`}
                >
                  <sign.icon className={`w-8 h-8 text-${sign.color}-400 mb-4`} />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {sign.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{sign.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Le bon moment pour agir
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Chaque âge correspond à des possibilités thérapeutiques spécifiques
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {idealAge.map((period, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md text-center"
                >
                  <div className="text-3xl font-bold text-[#6095b5] mb-4">
                    {period.age}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{period.title}</h3>
                  <p className="text-gray-600">{period.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Appliances */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nos appareils orthodontiques pour enfants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {appareilTypes.map((appareil, index) => (
                <div key={index} className="bg-white border rounded-lg p-6 shadow-md">
                  <div className={`w-12 h-12 bg-${appareil.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <appareil.icon className={`w-6 h-6 text-${appareil.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {appareil.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{appareil.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900">Avantages :</p>
                      <ul className="text-gray-600 space-y-1 mt-1">
                        {appareil.advantages.map((advantage, idx) => (
                          <li key={idx}>• {advantage}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Indications :</p>
                      <ul className="text-gray-600 space-y-1 mt-1">
                        {appareil.indications.map((indication, idx) => (
                          <li key={idx}>• {indication}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Le traitement orthodontique de votre enfant
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

        {/* BioSmile Approach */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              L'approche BioSmile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#6095b5]">
                  Notre philosophie
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Notre équipe spécialisée en orthodontie pédiatrique crée un
                  environnement rassurant et ludique pour votre enfant. Nous
                  croyons qu'un traitement orthodontique doit être une expérience
                  positive.
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-[#6095b5]">
                  Ce qui nous différencie
                </h3>
                <ul className="space-y-3">
                  {bioSmileApproach.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Témoignage
            </h2>
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                "Mon fils Youssef avait 8 ans quand nous avons commencé son
                traitement chez BioSmile. Il était ravi de choisir ses couleurs
                de bagues ! Aujourd'hui, il a un sourire magnifique et n'a jamais
                eu peur du dentiste."
              </p>
              <p className="font-semibold text-gray-900">
                Aicha, maman de Youssef
              </p>
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
                  À quel âge faut-il consulter pour la première fois ?
                </h3>
                <p className="text-gray-600">
                  La première consultation orthodontique est recommandée vers 6-7
                  ans, dès l'apparition des premières molaires définitives. Cela
                  permet de détecter précocement les problèmes éventuels.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  L'orthodontie précoce est-elle douloureuse ?
                </h3>
                <p className="text-gray-600">
                  Non, les appareils modernes sont conçus pour être confortables.
                  Une légère gêne peut être ressentie les premiers jours, mais
                  elle disparaît rapidement. Nous adaptons le traitement à l'âge
                  de l'enfant.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Combien de temps dure un traitement chez l'enfant ?
                </h3>
                <p className="text-gray-600">
                  La durée varie selon l'âge et la complexité du cas. Un
                  traitement interceptif (6-10 ans) dure généralement 12 à 18
                  mois, tandis qu'un traitement complet peut prendre 18 à 24 mois.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Offrez un beau sourire à votre enfant
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Consultation orthodontique gratuite pour les enfants de 6 à 12 ans.
              Nos spécialistes évalueront les besoins de votre enfant dans un
              environnement rassurant et ludique.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}