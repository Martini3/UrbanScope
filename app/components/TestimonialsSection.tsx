import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sophie Martineau",
    role: "Investisseur Immobilier",
    company: "Portfolio Privé",
    image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODA0NDMzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "En 3 mois d'utilisation d'UrbanScope, j'ai identifié 2 opportunités majeures à Belleville que j'aurais complètement ratées. Le ROI sur l'abonnement s'est fait en une seule transaction.",
    rating: 5,
    investment: "+43% de rendement",
    verified: true
  },
  {
    name: "Thomas Dubois",
    role: "Directeur d'Investissement",
    company: "Foncière Urbaine",
    image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODA0NDMzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "La précision des prédictions d'UrbanScope nous a permis d'anticiper la gentrification de plusieurs quartiers. Notre équipe économise 15h d'analyse par semaine.",
    rating: 5,
    investment: "15M€ d'acquisitions",
    verified: true
  },
  {
    name: "Marie Chen",
    role: "Agent Immobilier",
    company: "Chen & Associés",
    image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODA0NDMzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "Mes clients font confiance à mes recommandations car je peux leur montrer les données UrbanScope. J'ai triplé mon taux de conversion sur les investissements locatifs.",
    rating: 5,
    investment: "300% de conversion",
    verified: true
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ils ont révolutionné leurs investissements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment les premiers utilisateurs d'UrbanScope ont transformé leur approche de l'investissement immobilier.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="size-8 text-blue-600 mr-4" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="size-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        {testimonial.verified && (
                          <Badge className="ml-2 bg-green-100 text-green-800 border-green-200 text-xs">
                            Vérifié
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <div className="text-sm font-medium text-blue-800">
                    Résultat obtenu : {testimonial.investment}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Rejoint par 500+ professionnels de l'immobilier
            </h3>
            <p className="text-gray-600">En phase bêta privée depuis 6 mois</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">127M€</div>
              <div className="text-sm text-gray-600">Volume d'investissements guidés</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">89%</div>
              <div className="text-sm text-gray-600">Taux de satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">2,100</div>
              <div className="text-sm text-gray-600">Opportunités détectées</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">24h</div>
              <div className="text-sm text-gray-600">Temps d'onboarding moyen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}