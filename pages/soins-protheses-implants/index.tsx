// pages/soins-protheses-implants.tsx

import { SEO } from "@/components/seo/SEO";
import Layout from "@/components/common/Layout";
import PageHeader from "@/components/common/PageHeader"; // à adapter si besoin
import Link from "next/link";
import Script from "next/script";
import { getOrganizationSchema } from "@/utils/schema";

const cards = [
  {
    title: "Soins dentaires",
    description:
      "Prévention, soins des caries et traitements des gencives pour préserver votre santé bucco-dentaire.",
    link: "/soins-dentaires",
    image: "/images/kids.jpg",
    alt: "Soins dentaires",
  },
  {
    title: "Prothèses",
    description:
      "Solutions sur-mesure pour restaurer l’esthétique et la fonctionnalité de votre sourire.",
    link: "/protheses-dentaires",
    image: "/images/implants.jpg",
    alt: "Prothèses et implants",
  },
  {
    title: "Implants",
    description:
      "Solutions sur-mesure pour restaurer l’esthétique et la fonctionnalité de votre sourire.",
    link: "/implants",
    image: "/images/implants.jpg",
    alt: "Implants",
  },
  {
    title: "Soins esthétiques",
    description:
      "Blanchiment et soins esthétiques pour un sourire éclatant et naturel.",
    link: "/soins-esthetiques",
    image: "/images/esthetique.jpg",
    alt: "Soins esthétiques dentaires",
  },
  {
    title: "Radiologie",
    description:
      "Examens radiologiques précis pour un diagnostic fiable et rapide.",
    link: "/radiologie",
    image: "/images/radio.jpg",
    alt: "Radiologie dentaire",
  },
  {
    title: "Urgences dentaires",
    description:
      "Interventions rapides pour soulager vos douleurs en cas d’urgence.",
    link: "/urgences",
    image: "/images/urgence.jpg",
    alt: "Urgences dentaires",
  },
];

export default function SoinsProthesesImplantsPage() {
  return (
    <Layout>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
        strategy="afterInteractive"
      />
      <SEO
        title="Soins, Prothèses et Implants dentaires à Marrakech | BioSmile"
        description="Découvrez nos soins dentaires, prothèses et implants au cabinet BioSmile à Marrakech."
        image="/images/implants.jpg"
      />

      <section className="py-12">
        <PageHeader
          title="Soins, Prothèses & Implants"
          description="Nous mettons notre expertise à votre service pour vous offrir des soins complets, garantissant une hygiène bucco-dentaire optimale et un sourire éclatant."
        />
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.link}
                className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div>
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
