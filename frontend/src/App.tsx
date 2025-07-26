import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import TutorialGrid from './components/TutorialGrid';
import TutorialPage from './components/TutorialPage';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTutorial, setSelectedTutorial] = useState(null);

  const handleNavigate = (page: string, tutorial?: any) => {
    setCurrentPage(page);
    if (tutorial) {
      setSelectedTutorial(tutorial);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter overflow-x-hidden">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <Navigation onNavigate={handleNavigate} />
          <TutorialGrid onTutorialSelect={(tutorial) => handleNavigate('tutorial', tutorial)} />
        </>
      )}
      
      {currentPage === 'tutorial' && selectedTutorial && (
        <TutorialPage 
          tutorial={selectedTutorial} 
          onBack={() => handleNavigate('home')} 
        />
      )}
      
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;