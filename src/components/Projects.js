import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDesktop } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend, Node.js backend, and PostgreSQL database. Features include user authentication, payment processing, inventory management, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Socket.io.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics. Integrates with multiple weather APIs.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction history, bill payments, and financial analytics. Built with React Native.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Biometric'],
      category: 'mobile',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 5,
      title: 'AI Chat Assistant',
      description: 'An intelligent chat assistant powered by OpenAI GPT, featuring natural language processing, context awareness, and multi-language support.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'OpenAI API', 'Node.js', 'WebSocket', 'Redis'],
      category: 'ai',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects, skills, and experience. Built with React and Framer Motion for smooth animations.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Framer Motion', 'CSS3', 'Responsive Design'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: FaCode },
    { key: 'web', label: 'Web Apps', icon: FaDesktop },
    { key: 'mobile', label: 'Mobile Apps', icon: FaMobile },
    { key: 'ai', label: 'AI/ML', icon: FaCode }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="projects-header" variants={itemVariants}>
            <h2>Featured Projects</h2>
            <p className="projects-intro">
              A showcase of my recent work and projects that demonstrate my skills and expertise in modern web development.
            </p>
          </motion.div>

          <motion.div className="projects-filters" variants={itemVariants}>
            <div className="filter-buttons">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  <filter.icon />
                  {filter.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            key={activeFilter}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={projectVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <div className="project-placeholder">
                    <span>{project.title.charAt(0)}</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="View Code"
                      >
                        <FaGithub />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    {project.featured && (
                      <span className="featured-badge">Featured</span>
                    )}
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="projects-cta" variants={itemVariants}>
            <div className="cta-content">
              <h3>Interested in working together?</h3>
              <p>Let's discuss your next project and bring your ideas to life.</p>
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
