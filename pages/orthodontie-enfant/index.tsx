import ContactUs from "@/components/ContactUs";
import PageHeader from "@/components/common/PageHeader";
import { CheckCircle, Star, Heart, AlertTriangle, Users } from "lucide-react";

export default function OrthodontieEnfant() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Orthodontie Enfant Marrakech"
        description="Accompagnez la croissance de votre enfant avec une orthodontie prÃ©coce et adaptÃ©e"
      />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              L'orthodontie prÃ©coce, un investissement pour l'avenir
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              DÃ¨s l'Ã¢ge de 6 ans, il est possible de dÃ©tecter et corriger les
              problÃ¨mes orthodontiques de votre enfant. Chez BioSmile Centre
              Dentaire Ã Marrakech, nous proposons une approche douce et ludique
              pour accompagner la croissance de son sourire.
            </p>
          </div>
        </section>

        {/* Ã‚ge idÃ©al */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Pourquoi commencer tÃ´t ?
              </h2>
              <p className="text-gray-600 mb-6">
                L'orthodontie interceptive profite de la croissance naturelle de
                votre enfant. Entre 6 et 12 ans, les os de la mÃ¢choire sont
                encore en formation, ce qui permet des corrections plus faciles
                et plus rapides.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Correction guidÃ©e
                    </h3>
                    <p className="text-gray-600">
                      Orientons la croissance des mÃ¢choires dans le bon sens
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      PrÃ©vention efficace
                    </h3>
                    <p className="text-gray-600">
                      Ã‰vitons les extractions et les traitements lourds Ã
                      l'adolescence
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Confiance prÃ©servÃ©e
                    </h3>
                    <p className="text-gray-600">
                      Votre enfant grandit avec un sourire harmonieux
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <Heart className="w-6 h-6 text-red-500 inline mr-2" />
                L'approche BioSmile
              </h3>
              <p className="text-gray-700 mb-4">
                Notre Ã©quipe spÃ©cialisÃ©e en orthodontie pÃ©diatrique crÃ©e un
                environnement rassurant et ludique pour votre enfant.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>â€¢ PremiÃ¨re consultation gratuite et sans engagement</li>
                <li>â€¢ Explications adaptÃ©es Ã l'Ã¢ge de l'enfant</li>
                <li>â€¢ Appareils colorÃ©s et personnalisables</li>
                <li>â€¢ Suivi bienveillant et encourageant</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Signes d'alerte */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            4 signes qui doivent vous alerter
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-l-4 border-orange-400 p-6 shadow-sm">
              <AlertTriangle className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Dents qui se chevauchent
              </h3>
              <p className="text-gray-600 text-sm">
                Manque d'espace dans la mÃ¢choire, dents qui poussent de travers
              </p>
            </div>
            <div className="bg-white border-l-4 border-red-400 p-6 shadow-sm">
              <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Respiration par la bouche
              </h3>
              <p className="text-gray-600 text-sm">
                Bouche ouverte au repos, ronflement, assÃ¨chement buccal
              </p>
            </div>
            <div className="bg-white border-l-4 border-purple-400 p-6 shadow-sm">
              <AlertTriangle className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Succion persistante
              </h3>
              <p className="text-gray-600 text-sm">
                Pouce, tÃ©tine ou biberon au-delÃ de 3 ans
              </p>
            </div>
            <div className="bg-white border-l-4 border-blue-400 p-6 shadow-sm">
              <AlertTriangle className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                DÃ©calage des mÃ¢choires
              </h3>
              <p className="text-gray-600 text-sm">
                Dents du haut trop en avant ou mÃ¢choire dÃ©calÃ©e
              </p>
            </div>
          </div>
        </section>

        {/* Types d'appareils */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Nos appareils orthodontiques pour enfants
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Appareils amovibles
              </h3>
              <p className="text-gray-600 mb-4">
                Parfaits pour les corrections lÃ©gÃ¨res et l'Ã©ducation
                fonctionnelle. Votre enfant peut les retirer pour manger et se
                brosser les dents.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Avantages :</p>
                  <ul className="text-gray-600 space-y-1 mt-1">
                    <li>â€¢ HygiÃ¨ne facilitÃ©e</li>
                    <li>â€¢ Confort alimentaire</li>
                    <li>â€¢ Couleurs au choix</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Indications :</p>
                  <ul className="text-gray-600 space-y-1 mt-1">
                    <li>â€¢ Expansion du palais</li>
                    <li>â€¢ Correction des habitudes</li>
                    <li>â€¢ Alignement lÃ©ger</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Appareils fixes
              </h3>
              <p className="text-gray-600 mb-4">
                Bagues colorÃ©es et attaches dÃ©coratives pour les corrections
                plus importantes. Votre enfant peut choisir ses couleurs
                prÃ©fÃ©rÃ©es !
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Avantages :</p>
                  <ul className="text-gray-600 space-y-1 mt-1">
                    <li>â€¢ Action continue</li>
                    <li>â€¢ RÃ©sultats prÃ©cis</li>
                    <li>â€¢ Personnalisables</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Indications :</p>
                  <ul className="text-gray-600 space-y-1 mt-1">
                    <li>â€¢ Alignement complexe</li>
                    <li>â€¢ Correction des rotations</li>
                    <li>â€¢ Fermeture d'espaces</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processus de traitement */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Le traitement orthodontique de votre enfant
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                PremiÃ¨re visite
              </h3>
              <p className="text-gray-600">
                Consultation gratuite et familiarisation avec l'Ã©quipe. Examen
                clinique doux et explications adaptÃ©es.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Diagnostic personnalisÃ©
              </h3>
              <p className="text-gray-600">
                Radiographies et moulages pour analyser la croissance. Plan de
                traitement adaptÃ© Ã l'Ã¢ge et aux besoins.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Suivi rÃ©gulier
              </h3>
              <p className="text-gray-600">
                Rendez-vous toutes les 6 Ã 8 semaines. Accompagnement et
                encouragements Ã chaque Ã©tape.
              </p>
            </div>
          </div>
        </section>

        {/* TÃ©moignage */}
        <section className="mb-16">
          <div className="bg-green-50 p-8 rounded-lg max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </div>
            <p className="text-gray-700 text-lg mb-6 italic">
              "Mon fils Youssef avait 8 ans quand nous avons commencÃ© son
              traitement chez BioSmile. Il Ã©tait ravi de choisir ses couleurs
              de bagues ! Aujourd'hui, il a un sourire magnifique et n'a jamais
              eu peur du dentiste."
            </p>
            <p className="font-semibold text-gray-900">
              Aicha, maman de Youssef
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Offrez un beau sourire Ã votre enfant
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Consultation orthodontique gratuite pour les enfants de 6 Ã 12 ans.
            Nos spÃ©cialistes Ã©valueront les besoins de votre enfant dans un
            environnement rassurant et ludique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Consultation gratuite
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200">
              Appeler maintenant
            </button>
          </div>
        </section>
      </main>

      <ContactUs />
    </div>
  );
}
