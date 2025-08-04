// pages/blanchiment-fauteuil.tsx
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Clock, Star } from "lucide-react";

export default function BlanchimentFauteuilPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Blanchiment Dentaire Flash LED au Fauteuil",
    description:
      "Blanchiment dentaire professionnel Flash LED en une séance au centre BioSmile Marrakech. Résultats spectaculaires et durables garantis.",
    serviceType: "Blanchiment Dentaire",
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
    offers: {
      "@type": "Offer",
      description: "Séance de blanchiment Flash LED",
      availability: "https://schema.org/InStock",
    },
  };

  const benefits = [
    {
      icon: Clock,
      title: "Résultats immédiats",
      description: "Dents plus blanches dès la première séance de 60 minutes",
    },
    {
      icon: Star,
      title: "Technique Flash LED",
      description: "Technologie LED froide sans échauffement ni sensibilité",
    },
    {
      icon: CheckCircle,
      title: "Sécurité maximale",
      description:
        "Traitement supervisé par nos chirurgiens-dentistes expérimentés",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Consultation préalable",
      description:
        "Évaluation de l'état de vos dents et de votre éligibilité au traitement",
    },
    {
      step: "2",
      title: "Préparation",
      description:
        "Protection des gencives et application du gel blanchissant sécurisé",
    },
    {
      step: "3",
      title: "Activation LED",
      description:
        "3 séances de 20 minutes sous lampe LED froide pour activer le gel",
    },
    {
      step: "4",
      title: "Résultat final",
      description:
        "Évaluation du résultat et conseils pour maintenir la blancheur",
    },
  ];

  const indications = [
    "Dents jaunies par l'âge, le tabac ou certains aliments",
    "Patients souhaitant des résultats rapides et durables",
    "Dents saines sans caries ni sensibilité excessive",
    "Adultes de plus de 18 ans avec émail mature",
  ];

  const contraindications = [
    "Femmes enceintes ou allaitantes",
    "Patients avec des caries non traitées",
    "Sensibilité dentaire sévère",
    "Appareils orthodontiques en cours",
  ];

  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        strategy="afterInteractive"
      />

      <SEO
        title="Blanchiment Dentaire Flash LED Marrakech - Une Séance | BioSmile"
        description="Blanchiment dentaire professionnel Flash LED en une séance au centre BioSmile Marrakech. Technique moderne, résultats immédiats et durables. Consultation gratuite."
        image="/images/og-blanchiment-fauteuil.jpg"
        canonical="/blanchiment-fauteuil"
      />

      <main className="p-6">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/blanchiment-flash-led.jpg"
              alt="Blanchiment dentaire Flash LED Marrakech"
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
                  Blanchiment Flash LED
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#6095b5] mb-6">
                  Un sourire éclatant en une séance
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  Obtenez un sourire éclatant en une seule séance grâce à notre
                  technique de blanchiment professionnel au fauteuil. Résultats
                  spectaculaires et durables garantis par l'équipe BioSmile.
                </p>
                <div className="mb-8">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#6095b5] text-white px-8 py-4 rounded-full text-lg font-medium shadow-md hover:bg-[#4a7c9c] transition"
                  >
                    Prendre rendez-vous
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/blanchiment-avant-apres.jpg"
                    alt="Résultats blanchiment dentaire avant après"
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

        {/* What is Flash LED */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Qu'est-ce que le blanchiment Flash LED ?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Le blanchiment Flash LED est un traitement dentaire
                  professionnel qui éclaircit vos dents naturellement en une
                  seule séance. Notre technique utilise un gel blanchissant
                  sécurisé activé par une lampe LED froide.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Contrairement aux méthodes traditionnelles, la technologie LED
                  froide évite tout échauffement et préserve la sensibilité de
                  vos dents. Le traitement est entièrement supervisé par nos
                  chirurgiens-dentistes expérimentés.
                </p>
                <div className="bg-[#6095b5] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Technologie LED froide
                  </h3>
                  <p>
                    Sans chaleur, sans douleur, résultats visibles immédiatement
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/technique-flash-led.jpg"
                  alt="Technique blanchiment Flash LED"
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
              Les avantages du blanchiment Flash LED
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

        {/* Process */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Déroulement de votre séance
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
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

        {/* Indications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Ce traitement est-il fait pour vous ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-green-600">
                  ✓ Indications idéales
                </h3>
                <ul className="space-y-3">
                  {indications.map((indication, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{indication}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-orange-600">
                  ⚠ Contre-indications
                </h3>
                <ul className="space-y-3">
                  {contraindications.map((contraindication, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0">
                        ✗
                      </span>
                      <span>{contraindication}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results duration */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Combien de temps durent les résultats ?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Les résultats durent généralement de 1 à 3 ans selon vos
              habitudes. Pour prolonger l'effet, nous recommandons d'éviter le
              tabac, le café et le thé en excès, et de maintenir une hygiène
              dentaire rigoureuse.
            </p>
            <div className="bg-[#6095b5] text-white p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">
                Conseils post-traitement inclus
              </h3>
              <p className="text-lg">
                Nos spécialistes vous remettent un guide personnalisé pour
                maintenir votre sourire éclatant le plus longtemps possible.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt pour un sourire éclatant ?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Prenez rendez-vous dès aujourd'hui pour votre séance de
              blanchiment au fauteuil. Consultation préalable offerte pour
              évaluer votre éligibilité.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
