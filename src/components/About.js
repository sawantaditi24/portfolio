import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaHeart, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I believe in writing maintainable, scalable, and well-documented code that stands the test of time.'
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Every application I build is optimized for speed, efficiency, and the best possible user experience.'
    },
    {
      icon: FaHeart,
      title: 'User-Centric',
      description: 'I put users at the center of every design decision, ensuring intuitive and delightful experiences.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'I stay updated with the latest technologies and trends to bring fresh ideas to every project.'
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

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="about-header" variants={itemVariants}>
            <h2>About Me</h2>
            <p className="about-intro">
              I'm a passionate developer with a love for creating digital experiences that make a difference. 
              With a background in computer science and years of hands-on experience, I bring both technical 
              expertise and creative problem-solving to every project.
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <h3>My Journey</h3>
              <p>
                My journey in technology began with curiosity and has evolved into a passion for building 
                solutions that solve real-world problems. I specialize in modern web development, with 
                expertise in React, Node.js, and cloud technologies.
              </p>
              <p>
                What drives me is the opportunity to create meaningful digital experiences that enhance 
                people's lives. Whether it's a simple website or a complex web application, I approach 
                each project with the same level of dedication and attention to detail.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in continuous learning 
                and staying ahead of the curve in this ever-evolving field.
              </p>
            </motion.div>

            <motion.div className="about-stats" variants={itemVariants}>
              <h3>By the Numbers</h3>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="stat-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div className="values-section" variants={itemVariants}>
            <h3>What I Value</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div 
                  key={value.title}
                  className="value-card"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="value-icon">
                    <value.icon />
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
