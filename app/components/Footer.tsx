"use client"
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">UrbanScope</h3>
              <p className="text-gray-400 leading-relaxed">
                L&apos;intelligence artificielle au service de l&apos;investissement immobilier. 
                Anticipez les évolutions du marché avec précision.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="size-4 mr-3 text-blue-400" />
                <span className="text-sm">contact@urbanscope.fr</span>
              </div>
              <div className="flex items-center">
                <Phone className="size-4 mr-3 text-blue-400" />
                <span className="text-sm">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <MapPin className="size-4 mr-3 text-blue-400" />
                <span className="text-sm">Paris, France</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Produit</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Intégrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Entreprise</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carrières</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Presse</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partenaires</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Centre d&apos;aide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutoriels</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinaires</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Communauté</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 bg-gray-800 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Restez informé des évolutions du marché
              </h4>
              <p className="text-gray-400">
                Recevez nos analyses hebdomadaires et les alertes sur les tendances immobilières.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                S&apos;abonner
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-400">
              © 2024 UrbanScope. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                CGU
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="size-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="size-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}