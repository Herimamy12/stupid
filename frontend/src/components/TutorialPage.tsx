import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Clock, Star, Users, Download, Share } from 'lucide-react';

const TutorialPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock tutorial data - in a real app, you'd fetch this based on the ID
  const tutorials = [
    {
      id: 1,
      title: "Comment ouvrir une porte",
      description: "Technique révolutionnaire pour ne pas casser la poignée",
      duration: "15 min",
      difficulty: "Expert",
      rating: 4.9,
      students: 2847,
      image: "https://images.pexels.com/photos/277574/pexels-photo-277574.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Manipulation d'objets"
    },
    {
      id: 2,
      title: "L'art de rater son CV",
      description: "Maximisez vos chances de refus avec ces techniques éprouvées",
      duration: "22 min",
      difficulty: "Débutant",
      rating: 4.8,
      students: 5621,
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800",
      category: "Carrière professionnelle"
    },
    {
      id: 3,
      title: "S'asseoir sur une chaise",
      description: "Guide complet étape par étape pour débutants",
      duration: "8 min",
      difficulty: "Novice",
      rating: 5.0,
      students: 12453,
      image: "https://images.pexels.com/photos/586000/pexels-photo-586000.jpg?auto=compress&cs=tinysrgb&w=800",
      category: "Bases de la vie"
    }
  ];

  const tutorial = tutorials.find(t => t.id === parseInt(id || '1')) || tutorials[0];

  const steps = [
    {
      step: 1,
      title: "Préparation mentale",
      description: "Convainquez-vous que vous allez réussir (c'est la première erreur)",
      duration: "2 min"
    },
    {
      step: 2,
      title: "Approche de l'objet",
      description: "Regardez la porte avec confiance excessive",
      duration: "1 min"
    },
    {
      step: 3,
      title: "Tentative d'ouverture",
      description: "Tirez au lieu de pousser, ou l'inverse selon la logique",
      duration: "3 min"
    },
    {
      step: 4,
      title: "Frustration optimale",
      description: "Secouez la poignée avec véhémence",
      duration: "2 min"
    },
    {
      step: 5,
      title: "Demande d'aide",
      description: "Acceptez finalement que vous avez échoué",
      duration: "5 min"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-8">
        <div className="container mx-auto px-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 mb-6 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Retour</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                {tutorial.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
                {tutorial.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {tutorial.description}
              </p>

              {/* Stats */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock size={20} className="text-orange-400" />
                  <span className="text-gray-300">{tutorial.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={20} className="text-orange-400" />
                  <span className="text-gray-300">{tutorial.students.toLocaleString()} étudiants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={20} className="text-yellow-400" fill="currentColor" />
                  <span className="text-gray-300">{tutorial.rating}/5</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center space-x-2">
                  <Play size={20} fill="currentColor" />
                  <span>Commencer l'échec</span>
                </button>
                <button className="border border-orange-400 text-orange-400 px-6 py-4 rounded-full hover:bg-orange-400/10 transition-colors duration-300 flex items-center space-x-2">
                  <Download size={20} />
                  <span>Télécharger</span>
                </button>
                <button className="border border-gray-600 text-gray-400 px-6 py-4 rounded-full hover:bg-gray-600/10 hover:text-gray-300 transition-colors duration-300">
                  <Share size={20} />
                </button>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="bg-orange-500 hover:bg-orange-600 rounded-full p-6 transition-colors duration-300 animate-pulse">
                    <Play size={32} className="text-white" fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tutorial Steps */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-orbitron font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Étapes de l'Échec Programmé
          </h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`flex items-start space-x-6 p-8 bg-gray-800/50 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 animate-fadeInUp delay-${index * 100}`}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <span className="text-orange-400 text-sm">{step.duration}</span>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Warning Box */}
          <div className="mt-12 p-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl">
            <h3 className="text-xl font-bold text-red-400 mb-4">⚠️ Avertissement Important</h3>
            <p className="text-gray-300 leading-relaxed">
              Ce tutoriel est conçu pour échouer de manière spectaculaire. Nous ne sommes pas responsables 
              des portes cassées, des poignées arrachées, ou de la perte de dignité qui pourrait résulter 
              de l'application de ces techniques. L'échec est garanti à 99.9%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;