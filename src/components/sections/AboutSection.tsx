import React from 'react';
import Section from '../ui/Section';
import { Skill } from '../../types';

const skills: Skill[] = [
  { name: 'HTML & CSS', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 80, category: 'frontend' },
  { name: 'React', level: 75, category: 'frontend' },
  { name: 'TypeScript', level: 70, category: 'frontend' },
  { name: 'Tailwind CSS', level: 80, category: 'frontend' },
  { name: 'Node.js', level: 65, category: 'backend' },
  { name: 'Git', level: 75, category: 'tools' },
  { name: 'Figma', level: 60, category: 'tools' },
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 transition-all duration-1000 ease-out" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Learn more about my background and skills"
      className="bg-white dark:bg-gray-900"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Hello! I'm Your Name, a passionate web developer dedicated to creating beautiful, 
              functional websites that deliver exceptional user experiences.
            </p>
            <p>
              With a background in design and development, I combine creativity with 
              technical expertise to build modern web applications that not only look 
              great but also perform flawlessly.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source projects, or enjoying outdoor activities. I'm always eager to 
              take on new challenges and expand my skill set.
            </p>
          </div>
          <div className="pt-4">
            <a 
              href="#contact" 
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Let's work together →
            </a>
          </div>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Skills</h3>
          <div className="space-y-1">
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;