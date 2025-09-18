"use client"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Mail, Users, Zap } from "lucide-react";
import { useState } from "react";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Ici on pourrait envoyer l'email à une API
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Prêt à anticiper le marché immobilier ?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Rejoignez les 500+ investisseurs qui utilisent déjà UrbanScope pour leurs décisions d&apos;investissement. 
            Accès anticipé limité aux 1000 premiers inscrits.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      Accès bêta privée
                    </h3>
                    <p className="text-blue-100">
                      Soyez parmi les premiers à utiliser UrbanScope et bénéficiez de conditions exceptionnelles.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-blue-100">
                      <Zap className="size-5 mr-3 text-yellow-300" />
                      <span>Accès immédiat à la plateforme</span>
                    </div>
                    <div className="flex items-center text-blue-100">
                      <Users className="size-5 mr-3 text-yellow-300" />
                      <span>Formation personnalisée incluse</span>
                    </div>
                    <div className="flex items-center text-blue-100">
                      <Mail className="size-5 mr-3 text-yellow-300" />
                      <span>Support prioritaire par email</span>
                    </div>
                  </div>

                  <div className="bg-yellow-300 text-yellow-900 p-4 rounded-lg">
                    <div className="font-semibold mb-1">Offre limitée</div>
                    <div className="text-sm">
                      Tarif bêta : -50% sur tous les plans pendant 6 mois
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                          Adresse email professionnelle
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="votre.email@entreprise.com"
                          required
                          className="bg-white/10 border-white/30 text-white placeholder:text-blue-200 focus:border-white focus:ring-white"
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        size="lg" 
                        className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                        disabled={!email}
                      >
                        Rejoindre la liste d&apos;attente
                        <ArrowRight className="ml-2 size-5" />
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                        <ArrowRight className="size-8 text-white transform rotate-45" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">
                        Inscription confirmée !
                      </h4>
                      <p className="text-blue-100">
                        Vous recevrez vos accès dans les 48h. Vérifiez vos emails.
                      </p>
                    </div>
                  )}

                  <div className="text-center">
                    <p className="text-sm text-blue-200">
                      En vous inscrivant, vous acceptez nos{" "}
                      <a href="#" className="underline hover:text-white transition-colors">
                        conditions d&apos;utilisation
                      </a>{" "}
                      et notre{" "}
                      <a href="#" className="underline hover:text-white transition-colors">
                        politique de confidentialité
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Urgency indicators */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-8 text-blue-100">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm">347 places restantes</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm">23 inscriptions aujourd&apos;hui</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}