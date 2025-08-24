import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import BioSection from './components/sections/BioSection';
import JourneySection from './components/sections/JourneySection';
import ProjectsSection from './components/sections/ProjectsSection';
import NewsSection from './components/sections/NewsSection';
import ArticlesSection from './components/sections/ArticlesSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-navy text-gray-900 dark:text-white">
        <Header />
        <main>
          <HeroSection />
          <JourneySection />
          <BioSection />
          {/* <ProjectsSection /> */}
          {/* <NewsSection /> */}
          {/* <ArticlesSection /> */}
          {/* <ContactSection /> */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;