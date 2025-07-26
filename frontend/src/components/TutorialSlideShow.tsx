import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftFromLine, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { tutorials } from '../data/stupid-data';
import { steps } from '../data/stupid-steps';

const TutorialSlideshow = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const tutorialId = parseInt(id || '1');
  const tutorial = tutorials.find(t => t.id === tutorialId) || tutorials[0];
  const tutorialSteps = steps[tutorial.id - 1] || [];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const currentStep = tutorialSteps[currentStepIndex];
  const totalSteps = tutorialSteps.length;
  const progress = ((currentStepIndex + 1) / totalSteps) * 100;

  const updateSlide = (index: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentStepIndex(index);
      setIsVisible(true);
    }, 300);
  };

  const goNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      updateSlide(currentStepIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentStepIndex > 0) {
      updateSlide(currentStepIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentStepIndex]);

  const isAlternateLayout = currentStepIndex % 2 === 1;

  if (!currentStep) return <p className="text-white text-center mt-20">Aucune étape trouvée pour ce tutoriel.</p>;

  return (
    <div className="min-h-screen bg-gray-900 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-6xl h-[90vh] max-h-[800px] bg-gray-900/85 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 flex flex-col overflow-hidden">
        <header className="p-6 border-b border-white/10 flex justify-between items-center relative">
          <button
            onClick={() => navigate(-1)}
            className="text-orange-500 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 font-semibold"
          >
            <ArrowLeftFromLine className="w-5 h-5" />
            <span>Retour</span>
          </button>
          <div className="text-center">
            <h1 className="text-xl font-semibold text-white">{tutorial.title}</h1>
            <div className="text-sm text-gray-400">
              Étape {currentStep.step} sur {totalSteps}
            </div>
          </div>
          <div></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500 ease-in-out rounded-r"
              style={{ width: `${progress}%` }}
            />
          </div>
        </header>

        <main className="flex-1 p-8 flex flex-col justify-center overflow-y-auto">
          <div className={`
            grid gap-8 items-center w-full transition-all duration-300 ease-in-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
            ${window.innerWidth <= 900 ? 'grid-cols-1 text-center' : 'grid-cols-2'}
            ${isAlternateLayout && window.innerWidth > 900 ? 'grid-flow-col-dense' : ''}
          `}>
            <div className={`max-w-lg ${isAlternateLayout && window.innerWidth > 900 ? 'order-2' : 'order-1'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4 leading-tight">
                {currentStep.title}
              </h2>
              <p className="text-lg text-white leading-relaxed">
                {currentStep.description}
              </p>
            </div>
            <div className={`flex justify-center items-center ${isAlternateLayout && window.innerWidth > 900 ? 'order-1' : 'order-2'}`}>
              <img
                src={tutorial.image}
                alt={`Illustration de l'étape : ${currentStep.title}`}
                className="max-w-full max-h-96 object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
          <p className="mt-6 text-gray-400 italic text-center">{currentStep.duration}</p>
        </main>

        <footer className="p-6 border-t border-white/10 flex justify-between items-center">
          <button
            onClick={goPrev}
            disabled={currentStepIndex === 0}
            className="bg-orange-500 hover:bg-orange-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
          >
            <ArrowLeftCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Précédent</span>
          </button>
          <button
            onClick={goNext}
            disabled={currentStepIndex === totalSteps - 1}
            className="bg-orange-500 hover:bg-orange-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
          >
            <span className="hidden sm:inline">Suivant</span>
            <ArrowRightCircle className="w-5 h-5" />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default TutorialSlideshow;
