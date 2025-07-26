import React from 'react';
import { Home, Book, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-orange-500/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">TA</span>
            </div>
            <h1 className="text-xl font-orbitron font-bold text-orange-500 group-hover:text-orange-400 transition-colors">
              Tutos Absurdes
            </h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-orange-500/10 hover:scale-105 ${
                currentPage === 'home' ? 'text-orange-500' : 'text-gray-300 hover:text-orange-400'
              }`}
            >
              <Home size={20} />
              <span className="hidden md:inline">Accueil</span>
            </button>
            <button
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-orange-500/10 hover:scale-105 text-gray-300 hover:text-orange-400"
            >
              <Book size={20} />
              <span className="hidden md:inline">Tous les tutos</span>
            </button>
            <button
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-orange-500/10 hover:scale-105 text-gray-300 hover:text-orange-400"
            >
              <MessageCircle size={20} />
              <span className="hidden md:inline">Chatbot</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;