import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import TutorialGrid from '../components/TutorialGrid';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Navigation />
      <TutorialGrid />
    </>
  );
};

export default HomePage;