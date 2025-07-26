import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Book, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', borderColor: '#FF990033' }} // équiv. à bg-black/90 & border-orange-500/20
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
<<<<<<< HEAD
          <Link 
            to="/"
=======
          <div
            onClick={() => onNavigate('home')}
>>>>>>> home
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              style={{
                backgroundImage: 'linear-gradient(to bottom right, #FF9900, #CC7A00)',
              }}
            >
              <span className="text-white font-bold text-lg">TA</span>
            </div>
            <h1
              className="text-xl font-orbitron font-bold transition-colors group-hover:opacity-90"
              style={{
                color: '#FF9900',
              }}
            >
              Tutos Absurdes
            </h1>
<<<<<<< HEAD
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-orange-500/10 hover:scale-105 ${
                isActive('/') ? 'text-orange-500' : 'text-gray-300 hover:text-orange-400'
=======
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                currentPage === 'home'
                  ? ''
                  : 'text-gray-300'
>>>>>>> home
              }`}
              style={{
                backgroundColor: currentPage === 'home' ? 'transparent' : 'transparent',
                color: currentPage === 'home' ? '#FF9900' : undefined,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#FF99001A'; // hover:bg-orange-500/10
                (e.currentTarget as HTMLElement).style.color = '#FF9900';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                if (currentPage !== 'home') {
                  (e.currentTarget as HTMLElement).style.color = '#D1D5DB'; // text-gray-300
                }
              }}
            >
              <Home size={20} />
              <span className="hidden md:inline">Accueil</span>
<<<<<<< HEAD
            </Link>
            <Link
              to="/alltutos"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-orange-500/10 hover:scale-105 ${
                isActive('/alltutos') ? 'text-orange-500' : 'text-gray-300 hover:text-orange-400'
              }`}
            >
              <Book size={20} />
              <span className="hidden md:inline">Tous les tutos</span>
            </Link>
            <Link
              to="/chatbot"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-orange-500/10 hover:scale-105 ${
                isActive('/chatbot') ? 'text-orange-500' : 'text-gray-300 hover:text-orange-400'
              }`}
=======
            </button>

            <button
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-gray-300"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#FF99001A';
                (e.currentTarget as HTMLElement).style.color = '#FF9900';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLElement).style.color = '#D1D5DB';
              }}
            >
              <Book size={20} />
              <span className="hidden md:inline">Tous les tutos</span>
            </button>

            <button
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-gray-300"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#FF99001A';
                (e.currentTarget as HTMLElement).style.color = '#FF9900';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLElement).style.color = '#D1D5DB';
              }}
>>>>>>> home
            >
              <MessageCircle size={20} />
              <span className="hidden md:inline">Chatbot</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
