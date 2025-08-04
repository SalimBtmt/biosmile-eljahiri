// pages/blanchiment-gouttiere.tsx
import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Home, Clock, Shield, CheckCircle } from "lucide-react";

export default function BlanchimentGouttiérePage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Blanchiment Dentaire par Gouttières",
    description:
      "Blanchiment dentaire à domicile avec gouttières personnalisées. Solution douce et progressive au centre BioSmile Marrakech.",
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
  };

  const advantages = [
    {
      icon: Home,
      title: "Confort à domicile",
      description: "Réalisez votre blanchiment chez vous, à votre rythme",
    },
    {
      icon: Shield,
      title: "Traitement doux",
      description: "Concentration plus faible, moins de sensibilité",
    },
    {
      icon: Clock,
      title: "Résultats progressifs",
      description: "Blanchiment naturel et homogène sur 2-3 semaines",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Consultation initiale",
      description:
        "Examen dentaire et prise d'empreintes pour gouttières sur-mesure",
    },
    {
      step: "2",
      title: "Fabrication des gouttières",
      description: "Confection personnalisée en laboratoire (3-5 jours)",
    },
    {
      step: "3",
      title: "Remise du kit",
      description: "Instructions détaillées et gel blanchissant professionnel",
    },
    {
      step: "4",
      title: "Traitement à domicile",
      description: "Port nocturne ou 2-4h/jour selon prescription",
    },
    {
      step: "5",
      title: "Suivi personnalisé",
      description: "Contrôles réguliers et ajustements si nécessaire",
    },
  ];

  const instructions = [
    "Brossez-vous les dents avant chaque application",
    "Placez une petite quantité de gel dans chaque alvéole",
    "Portez les gouttières selon la prescription (2-8h/jour)",
    "Rincez bouche et gouttières après utilisation",
    "Évitez aliments colorants pendant le traitement",
    "Contactez-nous en cas de sensibilité excessive",
  ];

  const maintenance = [
    "Nettoyage quotidien des gouttières à l'eau tiède",
    "Séchage complet avant rangement",
    "Conservation dans l'étui fourni",
    "Éviter l'eau chaude qui déforme le plastique",
    "Remplacement si usure ou détérioration",
  ];

  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        strategy="afterInteractive"
      />

      <SEO
        title="Blanchiment Dentaire par Gouttières Marrakech - À Domicile | BioSmile"
        description="Blanchiment dentaire à domicile avec gouttières sur-mesure. Traitement doux et progressif au centre BioSmile Marrakech. Résultats naturels garantis."
        image="/images/og-blanchiment-gouttiere.jpg"
        canonical="/blanchiment-gouttiere"
      />

      <main className="p-6">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/blanchiment-gouttiere-domicile.jpg"
              alt="Blanchiment dentaire gouttières à domicile Marrakech"
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
                  Blanchiment par Gouttières
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#6095b5] mb-6">
                  Blanchissez vos dents à domicile
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  Découvrez le blanchiment dentaire à domicile avec nos
                  gouttières personnalisées. Une solution douce, progressive et
                  confortable pour retrouver un sourire éclatant dans le confort
                  de votre foyer.
                </p>
                <div className="bg-[#6095b5] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Kit complet inclus :
                  </h3>
                  <p>
                    Gouttières sur-mesure + gel professionnel + suivi
                    personnalisé
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/gouttiere-blanchiment-kit.jpg"
                    alt="Kit blanchiment gouttières personnalisées"
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

        {/* Advantages */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Pourquoi choisir le blanchiment par gouttières ?
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Une approche douce et progressive qui respecte la sensibilité de
              vos dents tout en vous offrant des résultats durables.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md text-center"
                >
                  <div className="w-16 h-16 bg-[#6095b5] rounded-full flex items-center justify-center mx-auto mb-6">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Votre traitement en 5 étapes
            </h2>
            <div className="space-y-8">
              {process.map((step, index) => (
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

        {/* Instructions */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Mode d'emploi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#6095b5]">
                  Instructions d'utilisation
                </h3>
                <ul className="space-y-3">
                  {instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-[#6095b5] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-green-600">
                  Entretien des gouttières
                </h3>
                <ul className="space-y-3">
                  {maintenance.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Gouttières vs Fauteuil : Quelle solution choisir ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-[#6095b5]">
                  Blanchiment par gouttières
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Durée du traitement :</span>
                    <span>2-3 semaines</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Nombre de séances :</span>
                    <span>1 visite + suivi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sensibilité :</span>
                    <span className="text-green-600">Minimale</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Lieu :</span>
                    <span>À domicile</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Idéal pour :</span>
                    <span>Dents sensibles</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-orange-600">
                  Blanchiment au fauteuil
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Durée du traitement :</span>
                    <span>1 séance</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Nombre de séances :</span>
                    <span>1 visite</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sensibilité :</span>
                    <span className="text-orange-600">Possible</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Lieu :</span>
                    <span>Au cabinet</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Idéal pour :</span>
                    <span>Résultats rapides</span>
                  </div>
                </div>
              </div>
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
                  Combien de temps porter les gouttières ?
                </h3>
                <p className="text-gray-600">
                  Selon votre cas : 2-4 heures par jour ou port nocturne. Votre
                  dentiste déterminera la durée optimale selon la coloration
                  initiale de vos dents.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Les résultats sont-ils durables ?
                </h3>
                <p className="text-gray-600">
                  Oui, les résultats durent 1-3 ans selon vos habitudes
                  alimentaires et d'hygiène. Des retouches périodiques peuvent
                  prolonger l'effet.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Que faire en cas de sensibilité ?
                </h3>
                <p className="text-gray-600">
                  Réduisez la fréquence d'utilisation et contactez-nous. Nous
                  pouvons ajuster la concentration du gel ou modifier le
                  protocole.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Commencez votre blanchiment à domicile
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Prenez rendez-vous pour votre consultation et repartez avec votre
              kit personnalisé. Un sourire plus blanc vous attend !
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
