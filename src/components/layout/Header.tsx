import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Download } from 'lucide-react';
import Container from '../ui/Container';
import { NavItem } from '../../types';
import { useTheme } from '../../context/ThemeContext';

const navItems: NavItem[] = [
  { title: 'Home', href: '#home' },
  { title: 'Bio', href: '#bio' },
  { title: 'Journey', href: '#journey' },
  { title: 'Projects', href: '#projects' },
  { title: 'News', href: '#news' },
  { title: 'Articles', href: '#articles' },
  { title: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Replace with actual resume download link
    window.open('/path-to-your-resume.pdf', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy dark:bg-navy-dark shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-bold tracking-tight text-ferrari dark:text-ferrari-light"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            Your Name
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-ferrari dark:text-gray-300 dark:hover:text-ferrari-light font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.title}
              </a>
            ))}
            <button
              onClick={handleResumeDownload}
              className="flex items-center px-4 py-2 bg-ferrari hover:bg-ferrari-dark text-white rounded-md transition-colors"
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </button>
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={handleResumeDownload}
              className="mr-4 p-2 text-ferrari hover:text-ferrari-light transition-colors"
              aria-label="Download Resume"
            >
              <FileText className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-ferrari transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-navy dark:bg-navy-dark shadow-lg py-4 px-6 animate-slideDown">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-ferrari dark:text-gray-300 dark:hover:text-ferrari-light font-medium transition-colors py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;