"use client"
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Menu, X, BarChart3 } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <BarChart3 className="size-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">UrbanScope</span>
              <Badge className="ml-2 bg-blue-100 text-blue-800 border-blue-200 text-xs">
                Bêta
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
              Fonctionnalités
            </a>
            <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors">
              Démo
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              Tarifs
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
              Témoignages
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-gray-300 text-gray-700">
              Se connecter
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Accès anticipé
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="size-6 text-gray-700" />
            ) : (
              <Menu className="size-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="py-4 space-y-4">
              <a 
                href="#features" 
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Fonctionnalités
              </a>
              <a 
                href="#demo" 
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Démo
              </a>
              <a 
                href="#pricing" 
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tarifs
              </a>
              <a 
                href="#testimonials" 
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Témoignages
              </a>
              <a 
                href="#" 
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              
              <div className="px-4 pt-4 border-t border-gray-200 space-y-3">
                <Button variant="outline" className="w-full border-gray-300 text-gray-700">
                  Se connecter
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Accès anticipé
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}