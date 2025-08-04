import { SEO } from "../components/seo/SEO";
import Layout from "../components/common/Layout";
import ReviewsSection from "../components/ReviewsSection";
import ContactUs from "../components/ContactUs";
import Script from "next/script";
import { getOrganizationSchema } from "../utils/schema";

export default function HomePage() {
  const cards = [
    {
      title: "Soins, Prothèses & Implants",
      image: "/images/prothes.jpg",
      alt: "Soins dentaires professionnels, prothèses dentaires et implants dentaires à Marrakech",
      link: "/soins-protheses-implants",
    },
    {
      title: "Esthétique & Blanchiment",
      image: "/images/flash.jpg",
      alt: "Blanchiment dentaire et soins esthétiques dentaires pour un sourire éclatant",
      link: "/esthetique-blanchiment",
    },
    {
      title: "Orthodontie",
      image: "/images/braces.jpg",
      alt: "Orthodontie pour enfants et adultes : alignement des dents et correction des malocclusions",
      link: "/orthodontie",
    },
    {
      title: "Pédodontie",
      image: "/images/kids.jpg",
      alt: "Pédodontie : soins dentaires spécialisés pour les enfants et prévention des caries",
      link: "/pedodontie",
    },
  ];

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
        title="Cabinet dentaire BioSmile Marrakech – Soin, Hygiène, Esthétique"
        description="Cabinet dentaire moderne à Marrakech. Soins dentaires, implants, esthétique."
        image="/images/og-home.jpg"
      />

      <main className="p-6">
        <section className="relative bg-gradient-to-r from-gray-10 to-white py-16 overflow-hidden">
          {/* Image de fond */}
          <div className="absolute inset-0">
            <img
              src="/images/cabinet.jpg" // Remplacez par le chemin de votre image
              alt="Cabinet dentaire BioSmile Marrakech"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-white/80"></div>
          </div>

          {/* Contenu principal */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Texte */}
              <div className="text-left lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Dr EL JAHIRI Reda
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#6095b5] mb-6">
                  Centre dentaire BioSmile
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                  Votre sourire, notre expertise - Des soins dentaires
                  d'excellence au cœur de Marrakech
                </p>
                <ContactUs />
              </div>

              {/* Image du cabinet */}
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/cabinet.jpg" // Remplacez par le chemin de votre image
                    alt="Intérieur du cabinet dentaire BioSmile"
                    className="w-full h-120 object-cover"
                  />
                </div>
                {/* Élément décoratif */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#6095b5] rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#6095b5] rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto py-12 text-center uppercase">
          <h1 className="text-sm md:text-sm font-medium mb-4 leading-tight max-w-4xl mx-auto text-gray-800">
            Indiquez votre besoin
          </h1>
          <h2 className="text-md md:text-2xl font-medium mb-10 leading-tight max-w-4xl mx-auto text-gray-800">
            pour une consultation complète à Marrakech
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
            {cards.map((card) => (
              <a
                key={card.title}
                href={card.link}
                className="group relative block overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="relative w-full h-64 md:h-72 lg:h-80">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy" // Native lazy loading for images
                    className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-90"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-3 text-center">
                      {card.title}
                    </h3>
                    <span className="bg-[#6095b5] text-white text-base px-5 py-2 rounded-full font-medium w-max mx-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      Découvrir
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section className=" mx-auto py-12 text-center uppercase">
          <h2 className="text-lg md:text-2xl font-normal mb-4 leading-tight max-w-4xl mx-auto text-gray-800">
            cabinet BioSmile • du lundi au vendredi 8h30-12h45 • 13h30-18h00
          </h2>
          <h3 className="text-sm md:text-md font-normal mb-4 leading-tight max-w-4xl mx-auto text-gray-800">
            Immeuble el baraka, 1er étage numéro 2, qartier bokar, Bd Allal Al
            Fassi, Marrakech 40000, Maroc
          </h3>
          <ContactUs />
        </section>
        <section className="mx-auto px-4 py-12 text-center">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800 uppercase">
            Retrouvez-nous sur Google Maps
          </h3>

          <div className="relative w-full max-w-5xl h-96 mx-auto rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6793.606656270343!2d-8.002301724266015!3d31.63923484125963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef7dbfbb62b3%3A0xb6ad05a3f05ea5f9!2sCentre%20dentaire%20BioSmile%20-Dr%20Reda%20El%20Jahiri-!5e0!3m2!1sfr!2sfr!4v1751734877730!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a
            href="https://www.google.com/maps/dir//Centre+dentaire+BioSmile+-Dr+Reda+El+Jahiri-+Immeuble+el+baraka,+1er+étage+numéro+2,+qartier+bokar,+Bd+Allal+Al+Fassi,+Marrakech+40000,+Maroc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#6095b5] text-white px-6 py-3 rounded-full text-sm md:text-base font-medium shadow-md hover:bg-[#4a7c9c] transition"
          >
            Ouvrir l'itinéraire
          </a>
        </section>
        <section className="font-radley mx-auto py-12 text-center uppercase">
          <ReviewsSection />
        </section>
      </main>
    </Layout>
  );
}
