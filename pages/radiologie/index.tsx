import Head from "next/head";
import { Scan, Eye, Target, CheckCircle, Camera } from "lucide-react";
import ContactUs from "@/components/ContactUs";
import PageHeader from "@/components/common/PageHeader";
import Layout from "@/components/common/Layout";
import Script from "next/script";
import { SEO } from "@/components/seo/SEO";

const imagingTypes = [
  {
    icon: Camera,
    title: "Radio panoramique",
    description:
      "Vue d’ensemble des mâchoires et dents pour évaluer l’ensemble de la structure bucco-dentaire.",
  },
  {
    icon: Scan,
    title: "Radio ciblée",
    description:
      "Permet de visualiser en détail une dent ou une zone précise en cas de douleur ou de traitement spécifique.",
  },
  {
    icon: Target,
    title: "Clichés rétro-alvéolaires",
    description:
      "Utile pour le suivi d’un traitement, un contrôle de racine ou un diagnostic plus approfondi.",
  },
  {
    icon: Eye,
    title: "Téléradiographie",
    description:
      "Employée dans le cadre de traitements orthodontiques pour analyser les rapports osseux.",
  },
];

const diagnosticApplications = [
  "Détection de caries non visibles à l'œil nu",
  "Contrôle de l'état des racines dentaires",
  "Évaluation avant extraction ou traitement",
  "Surveillance des dents de sagesse",
  "Suivi d’un traitement orthodontique",
  "Bilan bucco-dentaire préventif",
];

const advantages = [
  {
    title: "Diagnostic fiable",
    description:
      "Les images obtenues facilitent une prise de décision éclairée et un suivi rigoureux.",
  },
  {
    title: "Examen rapide",
    description:
      "La radiographie est réalisée en quelques minutes, directement au sein du cabinet.",
  },
  {
    title: "Doses minimisées",
    description:
      "Les appareils modernes utilisés émettent très peu de rayonnements, dans le respect des normes.",
  },
  {
    title: "Confort pour le patient",
    description:
      "L’examen est indolore, non invasif et adapté aux adultes comme aux enfants.",
  },
];

const process = [
  {
    title: "Demande du praticien",
    description:
      "La radio est proposée si elle est nécessaire au bon déroulement du traitement.",
  },
  {
    title: "Préparation",
    description:
      "Vous êtes installé(e) confortablement, sans bijoux ni objets métalliques.",
  },
  {
    title: "Réalisation de la radio",
    description: "La prise d’image se fait rapidement, selon la zone ciblée.",
  },
  {
    title: "Analyse",
    description:
      "Les clichés sont interprétés immédiatement par le dentiste pour vous apporter des réponses claires.",
  },
];

export default function RadiologiePage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Radiologie dentaire",
    description:
      "Radiologie dentaire à Marrakech : panoramique, rétro-alvéolaire, imagerie 3D. Diagnostic précis au centre BioSmile.",
    serviceType: "Radiologie dentaire",
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
        title="Radiologie Dentaire Marrakech - Imagerie Précise | BioSmile"
        description="Radiologie dentaire à Marrakech : panoramique, rétro-alvéolaire, imagerie 3D pour un diagnostic précis et fiable."
        image="/images/og-radiologie.jpg"
        canonical="/radiologie"
      />

      <Head>
        <title>Radiologie Dentaire à Marrakech - BioSmile</title>
        <meta
          name="description"
          content="Des examens radiologiques simples et efficaces réalisés directement au cabinet BioSmile à Marrakech."
        />
      </Head>

      <PageHeader
        title="Radiologie dentaire"
        description="Des examens simples et efficaces, réalisés sur place"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Des radios dentaires pour un diagnostic en toute confiance
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Chez BioSmile, nous réalisons les examens radiologiques directement
            au cabinet. Cela nous permet de poser un diagnostic clair et rapide,
            dans des conditions confortables et rassurantes pour nos patients.
          </p>
        </div>

        {/* Pourquoi une radio ? */}
        <section className="mb-20 bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pourquoi passer une radiographie dentaire ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ce qu’elle permet de détecter :
              </h3>
              <ul className="space-y-3">
                {[
                  "Caries entre les dents",
                  "Infections invisibles à l’œil nu",
                  "État de l’os et des racines",
                  "Problèmes orthodontiques ou de mâchoire",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                La radio dentaire est un outil essentiel dans la prévention, le
                diagnostic et la planification des soins. Elle permet de prendre
                les bonnes décisions, au bon moment.
              </p>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Les examens réalisés au cabinet
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {imagingTypes.map((type, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Applications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Quand est-ce recommandé ?
          </h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {diagnosticApplications.map((application, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                  <span className="text-gray-800">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Les avantages pour vous
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Étapes */}
        <section className="mb-20 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment se déroule l’examen ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">
            Un examen simple, rapide et utile
          </h2>
          <p className="text-xl mb-8">
            Prenez rendez-vous chez BioSmile pour une radio dentaire en toute
            sécurité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Prendre rendez-vous
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Nous contacter
            </button>
          </div>
        </section>
      </div>

      <ContactUs />
    </Layout>
  );
}
