import React, { useState } from 'react';
import Section from '../ui/Section';
import projects from '../../data/projects';
import { Project } from '../../types';
import Button from '../ui/Button';
import { ExternalLink } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <span className="px-2 py-1 bg-ferrari/10 text-ferrari text-sm font-medium rounded">
            {project.company}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Project <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter) || project.company === filter)
    : projects;

  const uniqueTags = Array.from(
    new Set([
      ...projects.flatMap(project => project.tags),
      ...projects.map(project => project.company)
    ])
  );

  const handleShowMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  const handleShowLess = () => {
    setVisibleProjects(3);
    window.scrollTo({
      top: document.getElementById('projects')?.offsetTop || 0,
      behavior: 'smooth'
    });
  };

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Check out some of my recent work"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setFilter(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === null
              ? 'bg-ferrari text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          All
        </button>
        {uniqueTags.map(tag => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === tag
                ? 'bg-ferrari text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.slice(0, visibleProjects).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {visibleProjects < filteredProjects.length ? (
        <div className="mt-12 text-center">
          <Button onClick={handleShowMore}>
            Show More Projects
          </Button>
        </div>
      ) : filteredProjects.length > 3 ? (
        <div className="mt-12 text-center">
          <Button variant="outline" onClick={handleShowLess}>
            Show Less
          </Button>
        </div>
      ) : null}
    </Section>
  );
};

export default ProjectsSection;