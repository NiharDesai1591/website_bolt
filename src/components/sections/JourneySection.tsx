import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import { Milestone } from 'lucide-react';

const JourneySection = () => {
  const journeyItems = [
    {
      year: '2013',
      title: 'Senior Engineer',
      description: 'Leading development of enterprise applications and mentoring junior developers.'
    },
    {
      year: '2021',
      title: 'Full Stack Developer',
      description: 'Building scalable web applications using modern technologies.'
    },
    {
      year: '2019',
      title: 'Frontend Developer',
      description: 'Creating responsive and accessible user interfaces.'
    }
  ];

  return (
    <Section id="journey" className="py-16 bg-gray-50 dark:bg-navy-light">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">The path that led me here</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
          
          {/* Journey items */}
          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 pr-8 text-right">
                  {index % 2 === 0 && (
                    <>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
                      <span className="text-primary font-semibold mt-2 block">{item.year}</span>
                    </>
                  )}
                </div>
                
                <div className="relative flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                    <Milestone className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="w-1/2 pl-8">
                  {index % 2 !== 0 && (
                    <>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
                      <span className="text-primary font-semibold mt-2 block">{item.year}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default JourneySection;