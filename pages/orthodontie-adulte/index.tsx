import ContactUs from "@/components/ContactUs";
import PageHeader from "@/components/common/PageHeader";
import { CheckCircle, Star, User, Shield } from "lucide-react";

export default function OrthodontieAdulte() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Orthodontie Adulte Marrakech"
        description="Redressez votre sourire en toute discrÃ©tion avec nos appareils orthodontiques adaptÃ©s aux adultes"
      />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              L'orthodontie adulte, une solution moderne et discrÃ¨te
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Vous avez toujours rÃªvÃ© d'un sourire parfaitement alignÃ© ? Il
              n'est jamais trop tard ! Chez BioSmile Centre Dentaire Ã
              Marrakech, nous proposons des solutions orthodontiques
              spÃ©cialement conÃ§ues pour les adultes, alliant efficacitÃ© et
              discrÃ©tion.
            </p>
          </div>
        </section>

        {/* Pourquoi l'orthodontie adulte */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Pourquoi corriger son sourire Ã l'Ã¢ge adulte ?
              </h2>
              <p className="text-gray-600 mb-6">
                Contrairement aux idÃ©es reÃ§ues, l'orthodontie adulte est
                aujourd'hui trÃ¨s courante. Que ce soit pour des raisons
                esthÃ©tiques ou fonctionnelles, redresser ses dents amÃ©liore
                considÃ©rablement votre qualitÃ© de vie.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Confiance en soi renforcÃ©e
                    </h3>
                    <p className="text-gray-600">
                      Un sourire harmonieux booste votre assurance
                      professionnelle et personnelle
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      AmÃ©lioration de la santÃ© bucco-dentaire
                    </h3>
                    <p className="text-gray-600">
                      Des dents bien alignÃ©es sont plus faciles Ã nettoyer et
                      moins sujettes aux caries
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Fonctionnement optimisÃ©
                    </h3>
                    <p className="text-gray-600">
                      Meilleure mastication, rÃ©duction des tensions
                      articulaires et cervicales
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Le saviez-vous ?
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>25% des patients orthodontiques</strong> sont
                aujourd'hui des adultes. L'Ã¢ge n'est plus un obstacle grÃ¢ce
                aux techniques modernes et discrÃ¨tes.
              </p>
              <p className="text-gray-700">
                Chez BioSmile, nous adaptons chaque traitement Ã votre style de
                vie professionnel et personnel pour que votre orthodontie passe
                inaperÃ§ue.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions orthodontiques */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Nos solutions orthodontiques discrÃ¨tes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Bagues transparentes
              </h3>
              <p className="text-gray-600 mb-4">
                Bagues en cÃ©ramique transparente qui se fondent avec la couleur
                naturelle de vos dents. EfficacitÃ© maximale avec une
                discrÃ©tion optimale.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>â€¢ TrÃ¨s discrÃ¨tes</li>
                <li>â€¢ RÃ©sistantes aux taches</li>
                <li>â€¢ Correction prÃ©cise</li>
                <li>â€¢ DurÃ©e : 18-24 mois</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Orthodontie linguale
              </h3>
              <p className="text-gray-600 mb-4">
                Bagues placÃ©es sur la face interne des dents, totalement
                invisibles de l'extÃ©rieur. La solution la plus discrÃ¨te pour
                les professionnels.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>â€¢ 100% invisible</li>
                <li>â€¢ PersonnalisÃ©e</li>
                <li>â€¢ Confort optimal</li>
                <li>â€¢ DurÃ©e : 12-18 mois</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Aligneurs transparents
              </h3>
              <p className="text-gray-600 mb-4">
                GouttiÃ¨res transparentes et amovibles qui redressent
                progressivement vos dents. Confort et praticitÃ© au quotidien.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>â€¢ Amovibles</li>
                <li>â€¢ HygiÃ¨ne facilitÃ©e</li>
                <li>â€¢ Aucune restriction alimentaire</li>
                <li>â€¢ DurÃ©e : 12-20 mois</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Processus de traitement */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Votre traitement orthodontique en 4 Ã©tapes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">
                Examen clinique complet et analyse de votre situation
                orthodontique
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Diagnostic</h3>
              <p className="text-gray-600 text-sm">
                Radiographies et empreintes pour Ã©tablir un plan de traitement
                personnalisÃ©
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Traitement</h3>
              <p className="text-gray-600 text-sm">
                Pose de l'appareil orthodontique et suivi rÃ©gulier tous les
                mois
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Contention</h3>
              <p className="text-gray-600 text-sm">
                Maintien des rÃ©sultats avec des appareils de contention
                discrets
              </p>
            </div>
          </div>
        </section>

        {/* TÃ©moignage */}
        <section className="mb-16">
          <div className="bg-blue-50 p-8 rounded-lg max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </div>
            <p className="text-gray-700 text-lg mb-6 italic">
              "J'avais 35 ans quand j'ai dÃ©cidÃ© de corriger mes dents. GrÃ¢ce
              aux bagues transparentes de BioSmile, personne ne s'en est aperÃ§u
              au travail. Le rÃ©sultat est parfait et Ã§a a changÃ© ma vie !"
            </p>
            <p className="font-semibold text-gray-900">Karim, 37 ans, Avocat</p>
          </div>
        </section>

        {/* CTA final */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            PrÃªt Ã transformer votre sourire ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            BÃ©nÃ©ficiez d'une consultation orthodontique gratuite avec nos
            spÃ©cialistes. Nous Ã©tablirons ensemble un plan de traitement
            adaptÃ© Ã vos besoins et Ã votre budget.
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
