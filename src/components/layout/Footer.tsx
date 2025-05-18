import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nihardesai1591/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;