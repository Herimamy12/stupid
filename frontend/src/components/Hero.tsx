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
    <div>
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className='relative'>
          <img src="/test.png" style={{ width: '84%', opacity:"" }} />
        </div>
        <div>
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">donner moi une image comme ceci mais les fumees sont plus eloignes.pour creer une sorte d'animation
            <div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse"
              style={{ backgroundColor: '#FF990009' }} // équivalent à bg-orange-500/5
            ></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000"
              style={{ backgroundColor: '#FF990004' }} // équivalent à bg-orange-600/3
            ></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Main Title with Typing Animation */}
            <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-8">
              <span
                className="text-transparent bg-clip-text animate-pulse"
                style={{
                  backgroundImage: 'linear-gradient(to right, #FF9900, #FFA733, #CC7A00)',
                  WebkitBackgroundClip: 'text',
                }}
              >
                {displayedText}
              </span>
              <span className="animate-blink" style={{ color: '#FF9900' }}>
                |
              </span>
            </h1>

            {/* Subtitle with Wobble Animation */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-4 animate-fadeInUp">
                Comment échouer de manière
              </h2>
              <h2
                className="text-3xl md:text-4xl font-bold animate-bounce"
                style={{ color: '#FF9900' }}
              >
                SPECTACULAIRE
              </h2>
            </div>

            {/* Catchphrase */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-500">
              Découvrez l'art de transformer les tâches les plus simples en épopées catastrophiques.
              Nos experts en échec vous guident pas à pas vers l'incompétence totale !
            </p>

            {/* Scroll Indicator */}
            
          </div>
        </div>
      </section>
      <div className="relative z-10 text-center max-w-4xl mx-auto pb-20">
              <div className="absolute bottom-[140px] left-1/2 transform -translate-x-1/2 animate-bounce">
                <div
                  className="w-6 h-10 border-2 rounded-full flex justify-center"
                  style={{ borderColor: '#FF990088' }}
                >
                  <div
                    className="w-1 h-3 rounded-full mt-2 animate-pulse"
                    style={{ backgroundColor: '#FF9900' }}
                  ></div>
                </div>
              </div>
            </div>
    </div>
  );
};

export default Hero;
