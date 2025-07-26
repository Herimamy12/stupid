import React from 'react';
import { Play, Clock, Star, Users } from 'lucide-react';

interface TutorialGridProps {
  onTutorialSelect: (tutorial: any) => void;
}

const TutorialGrid: React.FC<TutorialGridProps> = ({ onTutorialSelect }) => {
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
    },
    {
      id: 4,
      title: "Faire des noeuds impossibles",
      description: "Transformez n'importe quel câble en puzzle insoluble",
      duration: "18 min",
      difficulty: "Maître",
      rating: 4.7,
      students: 892,
      image: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpg?auto=compress&cs=tinysrgb&w=800",
      category: "Arts appliqués"
    },
    {
      id: 5,
      title: "Perdre ses clés efficacement",
      description: "Méthodes scientifiques pour égarer vos affaires",
      duration: "12 min",
      difficulty: "Intermédiaire",
      rating: 4.6,
      students: 3245,
      image: "https://images.pexels.com/photos/1698528/pexels-photo-1698528.jpg?auto=compress&cs=tinysrgb&w=800",
      category: "Organisation personnelle"
    },
    {
      id: 6,
      title: "Faire semblant de comprendre",
      description: "L'art de hocher la tête de manière convaincante",
      duration: "25 min",
      difficulty: "Expert",
      rating: 4.9,
      students: 7892,
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpg?auto=compress&cs=tinysrgb&w=800",
      category: "Communication sociale"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Novice': return 'text-lime-400 bg-lime-400/10';
      case 'Débutant': return 'text-sky-400 bg-sky-400/10';
      case 'Intermédiaire': return 'text-amber-400 bg-amber-400/10';
      case 'Expert': return 'text-[#FF9900] bg-[#FF9900]/10';
      case 'Maître': return 'text-rose-400 bg-rose-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FF9900]">
          Le Festival de la Débâcle
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Une galerie d'art pédagogique pour rater comme un pro
        </p>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12">
          {tutorials.map((tutorial, index) => (
            <div
              key={tutorial.id}
              className={`group relative bg-gray-800/40 border border-[#FF9900]/10 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-500 hover:rotate-1 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#FF9900]/20 cursor-pointer animate-fadeInUp delay-${index * 100}`}
              onClick={() => onTutorialSelect(tutorial)}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#FF9900] rounded-full p-4 hover:bg-[#e68100] transition-colors duration-200 animate-bounce">
                    <Play className="text-white" size={24} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-black/70 text-[#FF9900] px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                  {tutorial.category}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-[#FF9900] transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {tutorial.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Clock size={14} className="text-[#FF9900]" />
                      <span className="text-gray-300">{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} className="text-[#FF9900]" />
                      <span className="text-gray-300">{tutorial.students.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400" fill="currentColor" />
                    <span className="text-gray-300">{tutorial.rating}</span>
                  </div>
                </div>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                  {tutorial.difficulty}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorialGrid;
