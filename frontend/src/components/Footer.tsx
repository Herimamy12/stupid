import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'TikTocToc', url: '#', description: 'La plateforme des tutos absurdes' },
    { name: 'FailBook', url: '#', description: 'Partagez vos échecs en toute sécurité' },
    { name: 'InstaFail', url: '#', description: 'Photos ratées garanties' },
    { name: 'YouTubeNot', url: '#', description: 'Vidéos qui ne servent à rien' }
  ];

  const quickLinks = [
    { name: 'Comment échouer', url: '#' },
    { name: 'Pourquoi échouer', url: '#' },
    { name: 'Quand échouer', url: '#' },
    { name: 'Où échouer', url: '#' }
  ];

  return (
    <footer className="bg-black border-t border-orange-500/20 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TA</span>
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-orange-500">
                Tutos Absurdes
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              L'institut de référence pour apprendre à échouer de manière spectaculaire. 
              Depuis 2024, nous formons les futurs experts de l'incompétence.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Fait avec</span>
              <Heart size={16} className="text-red-500 animate-pulse" fill="currentColor" />
              <span>et beaucoup d'incompétence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation Rapide</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Réseaux Sociaux Fictifs</h4>
            <ul className="space-y-3">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    className="block group hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-orange-400 font-medium group-hover:text-orange-300">
                        {social.name}
                      </span>
                      <ExternalLink size={14} className="text-gray-500 group-hover:text-orange-400 transition-colors" />
                    </div>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                      {social.description}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © 2024 Tutos Absurdes. Tous droits d'échouer réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">
                Conditions d'Échec
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">
                Contact (si vous y arrivez)
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;