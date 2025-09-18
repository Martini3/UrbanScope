import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, Zap, Crown, Building } from "lucide-react";

const plans = [
  {
    name: "Découverte",
    icon: Zap,
    price: "Gratuit",
    period: "",
    description: "Parfait pour découvrir UrbanScope",
    badge: null,
    features: [
      "Accès à 3 zones d'analyse",
      "Prédictions à 1 mois",
      "1 alerte par semaine",
      "Données de base",
      "Support par email"
    ],
    limitations: [
      "Fonctionnalités limitées",
      "Historique de 30 jours",
      "Pas d'export de données"
    ],
    buttonText: "Commencer gratuitement",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Premium",
    icon: Crown,
    price: "297€",
    period: "/mois",
    description: "Pour les investisseurs individuels actifs",
    badge: "Le plus populaire",
    features: [
      "Accès illimité aux zones",
      "Prédictions à 6 mois",
      "Alertes illimitées",
      "Toutes les données sources",
      "Analyses comparatives",
      "Export Excel/PDF",
      "Support prioritaire",
      "API basique"
    ],
    limitations: [],
    buttonText: "Rejoindre la bêta",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Professionnel",
    icon: Building,
    price: "897€",
    period: "/mois",
    description: "Solution complète pour professionnels",
    badge: "Entreprise",
    features: [
      "Tout du plan Premium",
      "Accès API complet",
      "Modèles personnalisés",
      "Intégration CRM",
      "Rapports automatisés",
      "Formation équipe",
      "Account manager dédié",
      "SLA 99.9%",
      "Données en temps réel"
    ],
    limitations: [],
    buttonText: "Contacter l'équipe",
    buttonVariant: "outline" as const,
    popular: false
  }
];

export function PricingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choisissez votre plan d&apos;accès anticipé
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profitez de tarifs préférentiels pendant la phase bêta. Prix définitifs à partir du lancement officiel.
          </p>
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
            <span className="text-sm font-medium">🎉 -50% sur tous les plans pendant la bêta</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-gray-200'} hover:shadow-lg transition-all duration-300`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className={`w-16 h-16 mx-auto rounded-full ${plan.popular ? 'bg-blue-100' : 'bg-gray-100'} flex items-center justify-center mb-4`}>
                  <plan.icon className={`size-8 ${plan.popular ? 'text-blue-600' : 'text-gray-600'}`} />
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 text-lg">{plan.period}</span>}
                </div>
                
                <CardDescription className="mt-2 text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="size-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.limitations.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500 space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start">
                          <span className="text-gray-400 mr-3">•</span>
                          <span>{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button 
                  variant={plan.buttonVariant}
                  size="lg" 
                  className={`w-full mt-8 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Besoin d&apos;une solution sur mesure pour votre organisation ?
          </p>
          <Button variant="outline" size="lg" className="px-8">
            Planifier une démonstration personnalisée
          </Button>
        </div>

        {/* Money-back guarantee */}
        <div className="mt-12 bg-green-50 rounded-xl p-6 text-center border border-green-200">
          <div className="flex items-center justify-center mb-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <Check className="size-5 text-green-600" />
            </div>
            <span className="font-semibold text-green-800">Garantie satisfait ou remboursé 30 jours</span>
          </div>
          <p className="text-green-700">
            Testez UrbanScope sans risque. Si vous n&apos;êtes pas convaincu, nous vous remboursons intégralement.
          </p>
        </div>
      </div>
    </section>
  );
}