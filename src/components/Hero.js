import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

// Import the profile photo
import profilePhoto from '../assets/images/profile-photo.jpeg';

const Hero = () => {

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/sawantaditi24/ImageSenseAI', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sawant-aditi/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:sawantaditi24@gmail.com', label: 'Email' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <motion.div 
            className="shape shape-1"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="shape shape-2"
            animate={{ 
              rotate: -360,
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="shape shape-3"
            animate={{ 
              y: [-20, 20, -20],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Hi, I'm <span className="highlight">Aditi</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              variants={itemVariants}
            >
              A passionate Software Developer creating beautiful, functional, and user-centered digital experiences.
            </motion.p>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              I specialize in Full-stack web development with a focus on clean code and exceptional user experiences. 
              For me, the Software Development is not about hype, but about constraints, design decisions, and long-term thinking. 
              I care about user experience as much as I care about building well-architected solutions.
            </motion.p>

            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            variants={itemVariants}
          >
            <div className="profile-card">
              <div className="profile-image">
                <div className="profile-photo">
                  <img 
                    src={profilePhoto} 
                    alt="Aditi - Full Stack Developer"
                    onLoad={() => {
                      console.log('✅ Image loaded successfully!');
                      console.log('Image source:', profilePhoto);
                    }}
                    onError={(e) => {
                      console.log('❌ Image failed to load');
                      console.log('Trying to load:', profilePhoto);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="profile-placeholder" style={{display: 'none'}}>
                    <span>AD</span>
                  </div>
                </div>
                <div className="profile-ring"></div>
              </div>
              <div className="profile-info">
                <h3>Aditi Krishna Sawant</h3>
                <h5>Masters Student in Computer Science</h5>
                <h5>Student Research Assistant</h5>
                <h5>Ex-Software Engineer</h5>
                <h5>Ex-Project Intern</h5>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-social"
          variants={itemVariants}
        >
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon />
                <span className="social-label">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow">
          <span></span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
