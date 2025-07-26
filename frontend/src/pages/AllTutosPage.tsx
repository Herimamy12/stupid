import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Star, Users, Search, Filter } from 'lucide-react';
import { tutorials } from '../data/stupid-data';


const AllTutosPage: React.FC = () => {
  

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Novice': return 'text-green-400 bg-green-400/10';
      case 'Débutant': return 'text-blue-400 bg-blue-400/10';
      case 'Intermédiaire': return 'text-yellow-400 bg-yellow-400/10';
      case 'Expert': return 'text-orange-400 bg-orange-400/10';
      case 'Maître': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Tous les Tutos Absurdes
          </h1>
          <p className="text-center text-gray-400 text-xl max-w-3xl mx-auto">
            Explorez notre collection complète de tutoriels pour maîtriser l'art de l'échec dans tous les domaines de la vie
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-8 px-6 bg-gray-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un échec spécifique..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
              />
            </div>
            <button className="flex items-center space-x-2 px-6 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 hover:border-orange-500 hover:text-orange-400 transition-colors">
              <Filter size={20} />
              <span>Filtrer</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tutorials Grid */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <Link
                key={tutorial.id}
                to={`/tutorial/${tutorial.id}`}
                className={`group relative bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer animate-fadeInUp delay-${index * 100}`}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-orange-500 rounded-full p-4 hover:bg-orange-600 transition-colors duration-200 animate-pulse">
                      <Play className="text-white" size={24} fill="currentColor" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-black/70 text-orange-400 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {tutorial.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {tutorial.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock size={14} className="text-orange-400" />
                        <span className="text-gray-300">{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={14} className="text-orange-400" />
                        <span className="text-gray-300">{tutorial.students.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400" fill="currentColor" />
                      <span className="text-gray-300">{tutorial.rating}</span>
                    </div>
                  </div>

                  {/* Difficulty Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                    {tutorial.difficulty}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTutosPage;