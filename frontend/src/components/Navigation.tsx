import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NavigationProps {
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const sections = [
    {
      title: "Comment ouvrir une porte sans casser la poignée",
      subtitle: "Technique avancée de manipulation d'objet",
      color: "from-[#FF9900] to-red-500",
      delay: "delay-100"
    },
    {
      title: "L'art de rater son CV",
      subtitle: "Maximiser vos chances de refus",
      color: "from-red-500 to-pink-500",
      delay: "delay-200"
    },
    {
      title: "S'asseoir sur une chaise, étape par étape",
      subtitle: "Guide complet pour débutants",
      color: "from-pink-500 to-purple-500",
      delay: "delay-300"
    },
    {
      title: "Chatbot Absurdistan",
      subtitle: "IA spécialisée dans l'inutile",
      color: "from-purple-500 to-[#FF9900]",
      delay: "delay-400"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FF9900]">
          Nos Spécialités Catastrophiques
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${section.color} p-[1px] hover:scale-105 transition-all duration-500 ${section.delay} animate-fadeInUp cursor-pointer`}
              onClick={() => onNavigate('tutorial')}
            >
              <div className="relative bg-gray-900 rounded-2xl p-8 h-full hover:bg-gray-800/90 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#FF9900] transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {section.subtitle}
                    </p>
                  </div>
                  <ChevronRight 
                    className="text-[#FF9900] group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" 
                    size={24} 
                  />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF9900]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navigation;
