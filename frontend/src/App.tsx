import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AllTutosPage from './pages/AllTutosPage';
import TutorialPage from './components/TutorialPage';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import TutorialSlideshow from './components/TutorialSlideShow';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-inter overflow-x-hidden">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/alltutos" element={<AllTutosPage />} />
          <Route path="/tutorial/:id" element={<TutorialPage />} />
          <Route path="/chatbot" element={<div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-orbitron text-orange-500">Chatbot Page Coming Soon</h1></div>} />
		  <Route path="/tutorial/:id/start" element={<TutorialSlideshow />} />
        </Routes>
        
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;