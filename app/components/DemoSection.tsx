import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ArrowUpRight, ArrowDownRight, MapPin } from "lucide-react";

// Composant SVG de la carte de France
function FranceMap() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="w-full h-full opacity-30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Contour simplifié de la France */}
      <path
        d="M120 180 L150 120 L200 100 L280 110 L320 130 L380 140 L420 160 L450 180 L480 220 L490 260 L480 300 L460 340 L440 380 L420 420 L400 450 L370 480 L340 500 L300 510 L260 500 L220 480 L180 460 L150 430 L130 400 L110 360 L100 320 L105 280 L115 240 L120 200 Z"
        fill="rgba(59, 130, 246, 0.1)"
        stroke="rgba(59, 130, 246, 0.3)"
        strokeWidth="2"
      />
      
      {/* Régions principales pour le contexte */}
      <circle cx="300" cy="250" r="4" fill="rgba(59, 130, 246, 0.4)" /> {/* Paris */}
      <circle cx="180" cy="300" r="3" fill="rgba(59, 130, 246, 0.3)" /> {/* Nantes */}
      <circle cx="380" cy="350" r="3" fill="rgba(59, 130, 246, 0.3)" /> {/* Lyon */}
      <circle cx="320" cy="450" r="3" fill="rgba(59, 130, 246, 0.3)" /> {/* Marseille */}
      <circle cx="240" cy="190" r="3" fill="rgba(59, 130, 246, 0.3)" /> {/* Lille */}
      <circle cx="420" cy="280" r="3" fill="rgba(59, 130, 246, 0.3)" /> {/* Strasbourg */}
      
      {/* Lignes de connexion subtiles */}
      <line x1="300" y1="250" x2="180" y2="300" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" strokeDasharray="2,2" />
      <line x1="300" y1="250" x2="380" y2="350" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" strokeDasharray="2,2" />
      <line x1="300" y1="250" x2="420" y2="280" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" strokeDasharray="2,2" />
    </svg>
  );
}

export function DemoSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Visualisez le futur du marché immobilier
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre interface interactive vous permet d&apos;explorer les prédictions de prix en temps réel sur une carte intuitive.
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Mock interface header */}
          <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-white text-sm font-medium">UrbanScope Analytics Dashboard</span>
            </div>
            <div className="text-gray-400 text-sm">France • 6 mois de prédiction</div>
          </div>

          {/* Mock map interface with France map */}
          <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Carte de France en arrière-plan */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80">
                <FranceMap />
              </div>
            </div>

            {/* Prediction markers sur des vraies régions françaises */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Card className="p-4 bg-white/95 backdrop-blur-sm border-green-200 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <MapPin className="size-4 text-green-600 mr-2" />
                    <span className="text-sm font-medium">Paris 4ème</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    <ArrowUpRight className="size-3 mr-1" />
                    +12%
                  </Badge>
                </div>
                <div className="text-xs text-gray-600">
                  Prédiction 6 mois : €11,250/m²
                </div>
              </Card>
            </div>

            <div className="absolute top-2/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <Card className="p-4 bg-white/95 backdrop-blur-sm border-blue-200 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <MapPin className="size-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium">Lyon 2ème</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                    <ArrowUpRight className="size-3 mr-1" />
                    +8%
                  </Badge>
                </div>
                <div className="text-xs text-gray-600">
                  Prédiction 6 mois : €5,980/m²
                </div>
              </Card>
            </div>

            <div className="absolute bottom-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <Card className="p-4 bg-white/95 backdrop-blur-sm border-orange-200 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <MapPin className="size-4 text-orange-600 mr-2" />
                    <span className="text-sm font-medium">Marseille</span>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                    <ArrowUpRight className="size-3 mr-1" />
                    +15%
                  </Badge>
                </div>
                <div className="text-xs text-gray-600">
                  Prédiction 6 mois : €4,320/m²
                </div>
              </Card>
            </div>

            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <Card className="p-4 bg-white/95 backdrop-blur-sm border-red-200 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <MapPin className="size-4 text-red-600 mr-2" />
                    <span className="text-sm font-medium">Lille</span>
                  </div>
                  <Badge className="bg-red-100 text-red-800 border-red-200">
                    <ArrowDownRight className="size-3 mr-1" />
                    -2%
                  </Badge>
                </div>
                <div className="text-xs text-gray-600">
                  Prédiction 6 mois : €3,180/m²
                </div>
              </Card>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4">
              <Card className="p-3 bg-white/95 backdrop-blur-sm">
                <div className="text-xs font-medium text-gray-700 mb-2">Légende</div>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Hausse &gt; 10%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Hausse forte</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Hausse modérée</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Baisse attendue</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Stats bar */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="grid grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-lg font-bold text-gray-900">12,847</div>
                <div className="text-sm text-gray-600">Zones analysées</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">1,247</div>
                <div className="text-sm text-gray-600">Permis détectés</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">15 min</div>
                <div className="text-sm text-gray-600">Mise à jour</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">94%</div>
                <div className="text-sm text-gray-600">Fiabilité</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}