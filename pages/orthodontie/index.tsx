import ContactUs from "@/components/ContactUs";
import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";

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
];

export default function OrthodontiePage() {
  return (
    <div className="py-8 bg-white text-gray-900 min-h-screen flex flex-col">
      {/* Header */}
      <PageHeader
        title="Orthodontie"
        description="Retrouvez l'Ã©quilibre parfait entre esthÃ©tique et santÃ© bucco-dentaire grÃ¢ce Ã  nos solutions orthodontiques modernes et discrÃ¨tes."
      />

      {/* Image illustrative */}
      <section className="container mx-auto max-w-2xl px-4 py-6 text-center">
        <img
          src="/ortho.png"
          alt="Illustration orthodontie"
          className="mx-auto rounded-xl shadow-md max-w-full w-full md:w-2/3"
        />
      </section>

      {/* Cards section */}
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

      {/* Pourquoi choisir l'orthodontie */}
      <section className="bg-[#F7F5EF] py-8">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-semibold text-center text-[#3784b4] mb-8">
            Pourquoi envisager un traitement orthodontique ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
            <article className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  EsthÃ©tique parfaite
                </h3>
                <p>
                  Un sourire harmonieux valorise votre visage et renforce votre
                  assurance au quotidien.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  SantÃ© prÃ©servÃ©e
                </h3>
                <p>
                  Une bonne occlusion rÃ©duit les risques de caries, gingivites
                  et usure prÃ©maturÃ©e des dents.
                </p>
              </div>
            </article>
            <article className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Confort amÃ©liorÃ©
                </h3>
                <p>
                  Moins de tensions articulaires, meilleure mastication,
                  respiration facilitÃ©e.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Diagnostic prÃ©cis
                </h3>
                <p>
                  Analyse numÃ©rique 3D et plan de traitement sur-mesure pour
                  des rÃ©sultats prÃ©visibles.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Ã‰tapes du traitement */}
      <section className="container mx-auto max-w-4xl px-4 py-10">
        <h2 className="text-3xl font-semibold text-[#3784b4] mb-8 text-center">
          Votre parcours orthodontique chez BioSmile
        </h2>
        <ol className="relative border-l-2 border-[#3784b4] ml-6 space-y-6">
          <li className="ml-6">
            <h3 className="font-semibold text-xl mb-1">
              Consultation initiale
            </h3>
            <p>Bilan complet, scanner et plan de traitement dÃ©taillÃ©.</p>
          </li>
          <li className="ml-6">
            <h3 className="font-semibold text-xl mb-1">
              Mise en place des dispositifs
            </h3>
            <p>
              Appareils discrets adaptÃ©s Ã vos attentes esthÃ©tiques et Ã votre
              mode de vie.
            </p>
          </li>
          <li className="ml-6">
            <h3 className="font-semibold text-xl mb-1">Suivi rÃ©gulier</h3>
            <p>
              Ajustements fins pour guider progressivement vos dents vers leur
              position idÃ©ale.
            </p>
          </li>
          <li className="ml-6">
            <h3 className="font-semibold text-xl mb-1">
              Phase de stabilisation
            </h3>
            <p>
              Port de gouttiÃ¨res de contention pour garantir des rÃ©sultats
              durables.
            </p>
          </li>
        </ol>
      </section>

      {/* TÃ©moignage */}
      <section className="bg-[#F7F5EF] py-10">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="italic text-lg mb-4 max-w-xl mx-auto">
              "Avant je n'osais pas sourire... Aujourd'hui, grÃ¢ce Ã mon
              traitement orthodontique chez BioSmile, je souris sans complexe !"
            </p>
            <p className="font-semibold">Sara, 29 ans</p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="container mx-auto max-w-3xl px-4 py-10 text-center">
        <p className="mb-6 text-lg">
          Offrez-vous le sourire que vous mÃ©ritez. RÃ©servez dÃ¨s maintenant
          votre premiÃ¨re consultation orthodontique personnalisÃ©e.
        </p>
        <ContactUs />
      </section>
    </div>
  );
}
