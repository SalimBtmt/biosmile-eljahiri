import ContactUs from "@/components/ContactUs";
import PageHeader from "@/components/common/PageHeader";
import {
  CheckCircle,
  Clock,
  Star,
  Eye,
  Shield,
  Smile,
  RefreshCw,
} from "lucide-react";

export default function GouttieresInvisibles() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="GouttiÃ¨res Invisibles Marrakech"
        description="Redressez vos dents en toute discrÃ©tion avec nos aligneurs transparents personnalisÃ©s"
      />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              La rÃ©volution orthodontique transparente
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              DÃ©couvrez les gouttiÃ¨res invisibles, une alternative moderne et
              discrÃ¨te aux appareils orthodontiques traditionnels. Chez
              BioSmile Centre Dentaire Ã Marrakech, nous vous proposons une
              orthodontie invisible qui s'adapte parfaitement Ã votre mode de
              vie.
            </p>
          </div>
        </section>

        {/* Principe de fonctionnement */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Comment fonctionnent les gouttiÃ¨res invisibles ?
              </h2>
              <p className="text-gray-600 mb-6">
                Les aligneurs transparents sont des gouttiÃ¨res sur-mesure qui
                exercent une pression douce et contrÃ´lÃ©e sur vos dents. Chaque
                gouttiÃ¨re vous rapproche progressivement de votre sourire
                idÃ©al.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Transparence totale
                    </h3>
                    <p className="text-gray-600">
                      Pratiquement invisibles, vos collÃ¨gues ne s'apercevront
                      de rien
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Confort optimal
                    </h3>
                    <p className="text-gray-600">
                      MatÃ©riau souple sans irritation ni blessure
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      LibertÃ© alimentaire
                    </h3>
                    <p className="text-gray-600">
                      Amovibles pour manger et boire sans contrainte
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <Eye className="w-6 h-6 text-blue-600 inline mr-2" />
                IdÃ©al pour qui ?
              </h3>
              <p className="text-gray-700 mb-4">
                Les gouttiÃ¨res invisibles conviennent parfaitement aux adultes
                et adolescents qui souhaitent corriger leur sourire sans impact
                sur leur vie sociale ou professionnelle.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>â€¢ Professionnels en contact avec le public</li>
                <li>â€¢ Adolescents soucieux de leur apparence</li>
                <li>â€¢ Sportifs et musiciens</li>
                <li>â€¢ Patients allergiques aux mÃ©taux</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Avantages vs inconvÃ©nients */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            GouttiÃ¨res transparentes vs appareils traditionnels
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                Avantages des gouttiÃ¨res
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Pratiquement invisibles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Amovibles pour manger et se brosser les dents
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Confort supÃ©rieur, pas d'irritation
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    HygiÃ¨ne bucco-dentaire facilitÃ©e
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Pas de restriction alimentaire
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Rendez-vous plus espacÃ©s
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 text-gray-600 mr-2" />
                Points d'attention
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Port minimum 22h/jour requis
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Discipline personnelle nÃ©cessaire
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Adaptation initiale (3-5 jours)
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    LimitÃ©es aux cas moyennement complexes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Processus de traitement */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Votre traitement par gouttiÃ¨res en 5 Ã©tapes
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">
                Ã‰valuation de votre cas et Ã©ligibilitÃ© aux gouttiÃ¨res
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Empreintes</h3>
              <p className="text-gray-600 text-sm">
                Prise d'empreintes prÃ©cises pour conception sur-mesure
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Simulation</h3>
              <p className="text-gray-600 text-sm">
                AperÃ§u du rÃ©sultat final et validation du plan
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fabrication</h3>
              <p className="text-gray-600 text-sm">
                CrÃ©ation de toutes vos gouttiÃ¨res personnalisÃ©es
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                5
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Suivi</h3>
              <p className="text-gray-600 text-sm">
                Changement toutes les 2 semaines, contrÃ´les rÃ©guliers
              </p>
            </div>
          </div>
        </section>

        {/* Conseils d'utilisation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Conseils pour optimiser votre traitement
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Port quotidien
              </h3>
              <p className="text-gray-600 mb-4">
                Portez vos gouttiÃ¨res 22h/jour minimum. Ne les retirez que pour
                manger, boire (sauf l'eau) et vous brosser les dents.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>â€¢ Matin : remise aprÃ¨s brossage</li>
                <li>â€¢ Repas : retrait temporaire</li>
                <li>â€¢ Soir : port durant le sommeil</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Smile className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Entretien
              </h3>
              <p className="text-gray-600 mb-4">
                Nettoyez quotidiennement vos gouttiÃ¨res avec une brosse douce
                et un dentifrice non abrasif. Rincez Ã l'eau tiÃ¨de.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>â€¢ Brossage matin et soir</li>
                <li>â€¢ Pastilles nettoyantes 2x/semaine</li>
                <li>â€¢ Ã‰viter l'eau chaude</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Changement
              </h3>
              <p className="text-gray-600 mb-4">
                Changez de gouttiÃ¨re toutes les 2 semaines selon la
                prescription. Respectez l'ordre numÃ©rotÃ© pour un rÃ©sultat
                optimal.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>â€¢ Changement le soir</li>
                <li>â€¢ PremiÃ¨re sensation de serrage normale</li>
                <li>â€¢ Conservez la gouttiÃ¨re prÃ©cÃ©dente</li>
              </ul>
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
              "J'enseigne devant 200 Ã©tudiants chaque jour. Avec mes
              gouttiÃ¨res invisibles, personne ne s'est aperÃ§u de mon
              traitement orthodontique. En 18 mois, j'ai obtenu le sourire dont
              je rÃªvais !"
            </p>
            <p className="font-semibold text-gray-900">
              Fatima, 32 ans, Professeure d'universitÃ©
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Transformez votre sourire en toute discrÃ©tion
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            DÃ©couvrez si vous Ãªtes Ã©ligible aux gouttiÃ¨res invisibles.
            Consultation gratuite avec simulation du rÃ©sultat final pour
            visualiser votre nouveau sourire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Simulation gratuite
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
