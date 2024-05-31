import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VisionSection from './components/VisionSection';
import AboutSection from './components/AboutSection';
import AchievementsSection from './components/AchievementsSection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <VisionSection />
      <AboutSection />
      <AchievementsSection />
      <PartnersSection />
      <ContactSection />
    </div>
  );
}

export default App;