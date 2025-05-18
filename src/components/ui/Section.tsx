import React from 'react';
import Container from './Container';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
}) => {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 relative inline-block">
                {title}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded transform translate-y-2"></span>
              </h2>
            )}
            {subtitle && <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;