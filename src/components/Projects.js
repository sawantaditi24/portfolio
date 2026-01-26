import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'ImageSenseAI',
      description: 'An AI-powered web app that organizes and semantically searches screenshots using OCR and LLMs for effortless retrieval turning messy screenshots into a smart search.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      category: 'web',
      github: 'https://github.com/sawantaditi24/ImageSenseAI',
      live: 'https://imagesenseai-1.onrender.com/',
      featured: true
    },
    {
      id: 2,
      title: 'GateGrab',
      description: 'An airport food delivery platform that connects hungry travelers with airport restaurants and delivery agents. Travelers can browse nearby restaurants, place orders, and have food delivered directly to their boarding gate with real-time tracking - solving the dilemma of missing flights while searching for food.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'Node.js', 'Real-time Tracking', 'Express', 'WebSocket'],
      category: 'web',
      github: 'https://github.com/sawantaditi24/GateGrab',
      live: 'https://gate-grab.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'RoomSync',
      description: 'A comprehensive platform designed to simplify accommodation and roommate search for international students at CSULB. Solves the challenge of finding compatible roommates and housing by providing advanced filtering (budget, preferences, lifestyle), real-time availability status, and an integrated marketplace for furniture and essentials - all in one student-focused platform.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Database', 'Filtering System', 'Marketplace'],
      category: 'web',
      github: 'https://github.com/sawantaditi24/RoomSync',
      live: 'https://example.com',
      featured: true
    }
  ];


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


          <motion.div 
            className="projects-grid"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={projectVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-image">
                  <div className="project-placeholder">
                    <span>{project.title.charAt(0)}</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links" onClick={(e) => e.stopPropagation()}>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="View Code"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub />
                      </a>
                      {project.live !== 'https://example.com' && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          title="Live Demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
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

                  <div className="project-action-buttons" onClick={(e) => e.stopPropagation()}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      title="View Code on GitHub"
                    >
                      <FaGithub /> GitHub
                    </a>
                    {project.live !== 'https://example.com' && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        title="View Live Demo"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
