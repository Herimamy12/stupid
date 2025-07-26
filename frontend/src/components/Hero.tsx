import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Les Tutos Absurdes';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Title with Typing Animation */}
        <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 animate-pulse">
            {displayedText}
          </span>
          <span className="animate-blink text-orange-500">|</span>
        </h1>

        {/* Subtitle with Wobble Animation */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-4 animate-fadeInUp">
            Comment échouer de manière
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 animate-bounce">
            SPECTACULAIRE
          </h2>
        </div>

        {/* Catchphrase */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-500">
          Découvrez l'art de transformer les tâches les plus simples en épopées catastrophiques.
          Nos experts en échec vous guident pas à pas vers l'incompétence totale !
        </p>

        {/* Floating CTA Button */}
        <div className="mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 animate-floating">
            Commencer à échouer
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-500/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;