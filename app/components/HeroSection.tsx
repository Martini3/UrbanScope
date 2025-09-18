"use client"
import { Button } from "./ui/button";
import { ArrowRight, BarChart3, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239CA3AF%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                <TrendingUp className="size-4 mr-2" />
                <span className="text-sm font-medium">Accès anticipé disponible</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Anticipez l'évolution des prix immobiliers avec l'
                <span className="text-blue-600">IA</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                UrbanScope analyse en temps réel les permis de construire, données démographiques et projets d'infrastructure pour prédire les variations de prix immobiliers avant qu'elles n'arrivent.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white">
                Rejoindre la liste d'attente
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50">
                <BarChart3 className="mr-2 size-5" />
                Voir la démo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">92%</div>
                <div className="text-sm text-gray-600">Précision prédictive</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15M+</div>
                <div className="text-sm text-gray-600">Points de données</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">6 mois</div>
                <div className="text-sm text-gray-600">d'anticipation</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl transform rotate-6 opacity-10"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1595644389761-a01fe9f465fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZSUyMHVyYmFufGVufDF8fHx8MTc1ODExNTE1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Urban skyline with data analytics overlay"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}