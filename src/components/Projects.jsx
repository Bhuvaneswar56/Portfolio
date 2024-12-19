import React from 'react';
import { Layout, ExternalLink, Github, Code2 } from 'lucide-react';
import github from '../assets/images/Github.png'
import E_commerce from '../assets/images/E_Commerce.png'
import DCInfrasight from '../assets/images/DC_InfraSight.png'
import THS_X from '../assets/images/THS_X.png'

function Projects() {
  const projects = [
    {
      name: 'DCInfrasight',
      type: 'Full Stack',
      description: 'A full-stack solution for infrastructure management.',
      image: DCInfrasight,
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
      links: {
        demo: 'https://Dc-infrasight.comake.in',
        github: 'https://github.com/Bhuvaneswar56/DC-InfraSight'
      }
    },
    {
      name: 'THS_X Twitter App',
      type: 'Full Stack',
      description: 'A modern Twitter-like app built for efficient task-based social interactions.',
      image: THS_X,
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      links: {
        demo: 'https://hackingexpert.io',
        github: 'https://github.com/Bhuvaneswar56/THS_X'
      }
    },
    {
      name: 'GitHub Search Engine',
      type: 'Frontend',
      description: 'Frontend project to search and filter GitHub repositories.',
      image: github,
      technologies: ['React', 'GitHub API', 'Tailwind CSS'],
      links: {
        demo: 'https://git-hub-search-engine-self.vercel.app/',
        github: 'https://github.com/Bhuvaneswar56/Git_Hub_SearchEngine'
      }
    },
    {
      name: 'Ecom',
      type: 'Frontend',
      description: 'Frontend application for online shopping.',
      image: E_commerce,
      technologies: ['React', 'Express', 'PostgreSQL', 'Redis'],
      links: {
        demo: 'https://ecommerce.comake.in/',
        github: 'https://github.com/Bhuvaneswar56/E_Commerce'
      }
    }
  ];

  const getProjectIcon = (type) => {
    switch (type) {
      case 'Full Stack':
        return <Layout className="w-5 h-5" />;
      case 'Frontend':
        return <Code2 className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-1.5 bg-white/5 text-blue-400 rounded-md">
                    {getProjectIcon(project.type)}
                  </span>
                  <span className="text-sm font-medium text-blue-400">{project.type}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.links.demo}
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;