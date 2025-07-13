import React from 'react';
import { ArrowDown } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-300 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-emerald-300 blur-3xl" />
      </div>
      
      <Container className="py-20 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fadeIn">
            <span className="block">Hello, I'm </span>
            <span className="text-blue-600 dark:text-blue-400">Nihar</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fadeInDelay">
            A passionate <span className="text-emerald-600 dark:text-emerald-400 font-medium">web developer</span> creating beautiful and functional websites.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInDelayLong">
            <Button onClick={scrollToAbout} size="lg">
              Learn More
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow" 
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;