import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform built with React and Node.js. Features include product listings, cart functionality, user authentication, and payment processing.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://example.com/project1'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality. Users can create boards, add tasks, and track their progress through different stages.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    link: 'https://example.com/project2'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather application that provides current conditions and forecasts for any location. Features include search functionality, saved locations, and detailed weather data.',
    image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'API Integration', 'CSS3', 'HTML5'],
    link: 'https://example.com/project3'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing skills, projects, and contact information. Features a responsive design, smooth animations, and dark/light mode toggle.',
    image: 'https://images.pexels.com/photos/3182747/pexels-photo-3182747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
    link: 'https://example.com/project4'
  },
  {
    id: '5',
    title: 'Blog Platform',
    description: 'A content management system for publishing and managing blog posts. Features include rich text editing, categories, tags, and user comments.',
    image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'Contentful', 'Vercel', 'CSS Modules'],
    link: 'https://example.com/project5'
  },
  {
    id: '6',
    title: 'Social Media Dashboard',
    description: 'A dashboard for monitoring and analyzing social media metrics across multiple platforms. Features include data visualization, custom date ranges, and exportable reports.',
    image: 'https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
    link: 'https://example.com/project6'
  }
];

export default projects;