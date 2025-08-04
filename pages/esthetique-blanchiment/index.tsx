import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import ContactUs from "@/components/ContactUs";
import Script from "next/script";
import Image from "next/image";

export default function EsthetiqueBlanchimentPage() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Esthétique et Blanchiment Dentaire",
    description:
      "Découvrez nos services d'esthétique et de blanchiment dentaire au centre BioSmile Marrakech. Facettes dentaires, blanchiment Flash LED au fauteuil, blanchiment par gouttières.",
    serviceType: "Dentisterie Esthétique",
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
      />

      <SEO
        title="Esthétique & Blanchiment Dentaire Marrakech | BioSmile"
        description="Découvrez nos services d'esthétique dentaire et blanchiment innovants : facettes, blanchiment Flash LED, blanchiment par gouttières. Consultez-nous !"
        image="/images/og-esthetique-blanchiment.jpg"
        canonical="/esthetique-blanchiment"
      />

      <main className="p-6">
        <section className="py-12 max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-[#3784b4]">
            Esthétique & Blanchiment Dentaire
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Découvrez nos solutions modernes pour un sourire éclatant et
            naturel. Que ce soit par des facettes dentaires, un blanchiment
            Flash LED au fauteuil, ou un traitement progressif par gouttières,
            nos spécialistes vous accompagnent à chaque étape.
          </p>
        </section>

        {/* Facettes Dentaires Section */}
        <section className="py-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-[#6095b5]">
            Facettes Dentaires
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/facettes-dentaires-ceramique.jpg"
              alt="Facettes dentaires en céramique"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div>
              <p className="text-gray-700 mb-4">
                Les facettes dentaires sont des coquilles ultra-fines en
                céramique qui permettent de transformer instantanément votre
                sourire, en corrigeant la couleur, la forme, la taille et
                l'alignement des dents.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Correction des dents décolorées, tachées ou usées</li>
                <li>Fermeture des espaces et diastèmes</li>
                <li>Résultat immédiat et naturel</li>
                <li>Durabilité allant jusqu'à 15-20 ans</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Blanchiment Flash LED Section */}
        <section className="py-12 max-w-6xl mx-auto bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-[#6095b5]">
            Blanchiment Flash LED au Fauteuil
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Notre technique professionnelle de blanchiment utilise un gel
                activé par une lampe LED froide, garantissant un traitement
                rapide, sûr et sans douleur.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Résultat immédiat dès la première séance</li>
                <li>Technologie LED froide respectueuse des dents</li>
                <li>Encadrement par nos chirurgiens-dentistes experts</li>
              </ul>
              <p className="mt-4 text-sm italic">Durée : environ 60 minutes</p>
            </div>
            <Image
              src="/images/blanchiment-flash-led.jpg"
              alt="Blanchiment Flash LED au fauteuil"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Blanchiment par Gouttières Section */}
        <section className="py-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-[#6095b5]">
            Blanchiment par Gouttières
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/blanchiment-gouttiere-domicile.jpg"
              alt="Blanchiment par gouttières à domicile"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div>
              <p className="text-gray-700 mb-4">
                Une solution douce et progressive effectuée à domicile grâce à
                des gouttières personnalisées et un gel blanchissant
                professionnel.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Confort et liberté d'utilisation à domicile</li>
                <li>Blanchiment naturel et homogène en 2-3 semaines</li>
                <li>Suivi personnalisé par nos experts</li>
              </ul>
              <p className="mt-4 text-sm italic">
                Durée : 2 à 3 semaines selon la prescription
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">
              Prenez rendez-vous dès aujourd'hui
            </h2>
            <p className="mb-8 text-gray-700">
              Pour toute question ou pour programmer votre consultation
              gratuite, n'hésitez pas à nous contacter.
            </p>
            <ContactUs />
          </div>
        </section>
      </main>
    </Layout>
  );
}
