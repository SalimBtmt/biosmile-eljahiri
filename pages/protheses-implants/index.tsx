import Head from "next/head";
import { Crown, Wrench, Shield, Heart, CheckCircle } from "lucide-react";
import ContactUs from "@/components/ContactUs";
import PageHeader from "@/components/common/PageHeader";
import Layout from "@/components/common/Layout";
import Script from "next/script";
import { SEO } from "@/components/seo/SEO";

// Données statiques
const prosthesisTypes = [
  {
    icon: Crown,
    title: "Prothèses fixes",
    description:
      "Couronnes, bridges et inlays-onlays pour restaurer durablement vos dents abîmées.",
  },
  {
    icon: Wrench,
    title: "Prothèses amovibles",
    description:
      "Dentiers partiels ou complets, confortables et esthétiques pour retrouver le plaisir de manger.",
  },
  {
    icon: Shield,
    title: "Prothèses sur implants",
    description:
      "Solution moderne et stable pour un confort optimal et une esthétique parfaite.",
  },
];

const benefits = [
  "Restauration complète de la fonction masticatoire",
  "Retrouvez confiance en vous et naturel de votre sourire",
  "Prévention des déplacements dentaires",
  "Amélioration de la prononciation et de l'élocution",
  "Préservation de l'harmonie faciale",
  "Solutions adaptées à tous les budgets",
];

const process = [
  {
    step: "Évaluation personnalisée",
    description:
      "Examen clinique approfondi et prise d'empreintes pour une prothèse parfaitement adaptée",
  },
  {
    step: "Conception sur-mesure",
    description:
      "Fabrication artisanale par notre prothésiste qualifié selon vos caractéristiques anatomiques",
  },
  {
    step: "Ajustements précis",
    description:
      "Plusieurs essayages pour garantir confort, esthétique et fonctionnalité optimale",
  },
  {
    step: "Livraison et suivi",
    description:
      "Pose définitive avec conseils d'entretien et contrôles réguliers inclus",
  },
];

export default function ProthesesDentairesPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Prothèses dentaires sur-mesure",
    description:
      "Prothèses dentaires à Marrakech : solutions fixes ou amovibles, esthétiques et confortables. Centre BioSmile.",
    serviceType: "Prothèses dentaires",
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

  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        strategy="afterInteractive"
      />

      <SEO
        title="Prothèses Dentaires Marrakech - Confort & Esthétique | BioSmile"
        description="Prothèses dentaires sur-mesure à Marrakech. Solutions fixes ou amovibles pour restaurer votre sourire avec confort et esthétisme."
        image="/images/og-protheses-dentaires.jpg"
        canonical="/protheses-dentaires"
      />

      <Head>
        <title>Prothèses Dentaires à Marrakech - BioSmile</title>
        <meta
          name="description"
          content="Retrouvez le sourire et le confort avec nos prothèses dentaires sur-mesure au centre BioSmile de Marrakech."
        />
      </Head>

      <PageHeader
        title="Prothèses Dentaires à Marrakech"
        description="Retrouvez le sourire et le confort avec nos prothèses dentaires sur-mesure"
      />

      <main className="container mx-auto px-4 py-16">
        {/* ... Le reste de ton contenu identique, voir ci-dessous ... */}
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Prothèses Dentaires Marrakech : Solutions Complètes et
            Personnalisées
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Vous avez perdu une ou plusieurs dents ? Ne laissez plus cette
            situation impacter votre qualité de vie. Au centre dentaire BioSmile
            de Marrakech, nous concevons des prothèses dentaires sur-mesure qui
            redonnent vie à votre sourire. Nos solutions prothétiques modernes
            allient esthétique naturelle, confort d'usage et durabilité
            exceptionnelle.
          </p>
        </div>

        {/* Section Problème */}
        <section className="mb-20 bg-red-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Les Conséquences des Dents Manquantes sur Votre Vie
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Impact sur votre santé :
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                  Difficultés de mastication et problèmes digestifs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                  Déplacement des dents adjacentes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                  Perte osseuse progressive au niveau des mâchoires
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Impact psychologique :
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                  Perte de confiance en soi et isolement social
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                  Complexe esthétique et sourire dissimulé
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                  Difficultés d'élocution et de prononciation
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section Solutions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nos Solutions Prothétiques Modernes à Marrakech
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {prosthesisTypes.map((type, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Avantages */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Les Bénéfices de Nos Prothèses Dentaires
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center p-4 bg-green-50 rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                <span className="text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section Processus */}
        <section className="mb-20 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Votre Parcours Prothétique chez BioSmile
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.step}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Expertise */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pourquoi Choisir BioSmile pour Vos Prothèses à Marrakech ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Heart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expertise et savoir-faire
              </h3>
              <p className="text-gray-600">
                Plus de 15 ans d'expérience en prothèse dentaire. Nos praticiens
                maîtrisent toutes les techniques modernes et travaillent avec
                des matériaux de qualité supérieure pour des résultats durables
                et esthétiques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Laboratoire partenaire local
              </h3>
              <p className="text-gray-600">
                Collaboration étroite avec un prothésiste dentaire d'excellence
                à Marrakech pour un suivi personnalisé, des ajustements rapides
                et un contrôle qualité optimal de vos prothèses.
              </p>
            </div>
          </div>
        </section>

        {/* Témoignage */}
        <section className="mb-20 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💬</span>
            </div>
            <blockquote className="text-xl italic text-gray-800 mb-4">
              "Après avoir perdu plusieurs dents, je ne souriais plus. Grâce aux
              prothèses sur implants réalisées chez BioSmile, j'ai retrouvé
              confiance en moi. Le résultat est bluffant de naturel !"
            </blockquote>
            <p className="font-semibold text-gray-900">
              Fatima, 52 ans - Marrakech
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">
            Retrouvez le Plaisir de Croquer la Vie à Pleines Dents
          </h2>
          <p className="text-xl mb-8">
            Ne laissez plus les dents manquantes limiter votre quotidien.
            Découvrez nos solutions prothétiques personnalisées à Marrakech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Consultation gratuite
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Devis personnalisé
            </button>
          </div>
        </section>
      </main>

      <ContactUs />
    </Layout>
  );
}
