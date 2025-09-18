import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Brain, Database, TrendingUp, MapPin, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligence Artificielle Avancée",
    description: "Algorithmes de machine learning entraînés sur 10 ans de données immobilières pour des prédictions ultra-précises.",
    color: "text-blue-600 bg-blue-100"
  },
  {
    icon: Database,
    title: "Données Multi-Sources",
    description: "Analyse croisée des permis de construire, données démographiques, projets d'infrastructure et tendances économiques.",
    color: "text-green-600 bg-green-100"
  },
  {
    icon: TrendingUp,
    title: "Prédictions à 6 Mois",
    description: "Anticipez les variations de prix jusqu'à 6 mois à l'avance avec une précision de 92% validée par nos backtests.",
    color: "text-purple-600 bg-purple-100"
  },
  {
    icon: MapPin,
    title: "Géolocalisation Précise",
    description: "Analyse quartier par quartier avec une granularité jusqu'à l'îlot urbain pour des investissements ciblés.",
    color: "text-orange-600 bg-orange-100"
  },
  {
    icon: Clock,
    title: "Alertes Temps Réel",
    description: "Notifications instantanées dès qu'une opportunité d'investissement ou un risque est détecté dans vos zones d'intérêt.",
    color: "text-red-600 bg-red-100"
  },
  {
    icon: Shield,
    title: "Validation Continue",
    description: "Nos modèles sont constamment affinés et validés par des experts immobiliers pour garantir leur fiabilité.",
    color: "text-indigo-600 bg-indigo-100"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            La technologie au service de l'investissement immobilier
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment UrbanScope révolutionne l'analyse prédictive immobilière grâce à l'intelligence artificielle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="size-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Performances validées scientifiquement
            </h3>
            <p className="text-lg text-gray-600">
              Nos modèles sont testés en continu sur des données historiques réelles
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600">92%</div>
              <div className="text-sm font-medium text-gray-900">Précision prédictive</div>
              <div className="text-xs text-gray-600">Validée sur 5 ans de données</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600">15M+</div>
              <div className="text-sm font-medium text-gray-900">Points de données</div>
              <div className="text-xs text-gray-600">Actualisés quotidiennement</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600">50+</div>
              <div className="text-sm font-medium text-gray-900">Indicateurs analysés</div>
              <div className="text-xs text-gray-600">Sources publiques et privées</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600">24h</div>
              <div className="text-sm font-medium text-gray-900">Délai d'alerte</div>
              <div className="text-xs text-gray-600">Détection d'opportunités</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}