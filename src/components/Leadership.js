import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChalkboardTeacher, FaHandsHelping, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';
import './Leadership.css';

const Leadership = () => {
  const leadershipExperiences = [
    {
      title: 'Technical Lead',
      organization: 'Society of Women Engineers Club',
      period: 'Sep 2024 - Present',
      description: 'Supported students by mentoring incoming class through mock interviews, resume preparation, current innovations and soft-skills workshops.',
      achievements: [
        'Conducted mock technical interviews for 50+ students',
        'Organized resume review sessions improving student success rates',
        'Led workshops on current tech innovations and trends',
        'Developed soft-skills training programs for engineering students'
      ],
      impact: 'Helped 50+ students improve their interview skills and career readiness',
      icon: FaUsers,
      color: 'pink'
    },
    {
      title: 'Project Mentor',
      organization: 'Association of Computing Machinery Club',
      period: 'Dec 2024 - Present',
      description: 'Mentored undergraduate and graduate students in understanding the software development life cycle through workshops, and conferences.',
      achievements: [
        'Mentored 30+ students in software development best practices',
        'Organized workshops on SDLC methodologies and tools',
        'Conducted technical conferences and knowledge sharing sessions',
        'Guided students through real-world project implementations'
      ],
      impact: 'Mentored 30+ students in software development methodologies',
      icon: FaChalkboardTeacher,
      color: 'pink'
    },
    {
      title: 'Office Buddy',
      organization: 'Professional Mentorship Program',
      period: 'Jul 2023 - Dec 2023',
      description: 'Mentored two interns to understand and navigate huge codebases, helping them become productive team members.',
      achievements: [
        'Mentored 2 interns through complex codebase navigation',
        'Developed onboarding processes for new team members',
        'Created documentation and learning resources',
        'Facilitated knowledge transfer and best practices sharing'
      ],
      impact: 'Successfully onboarded 2 interns to become productive team members',
      icon: FaHandsHelping,
      color: 'pink'
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

  const cardVariants = {
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
    <section id="leadership" className="leadership">
      <div className="container">
        <motion.div
          className="leadership-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="leadership-header" variants={itemVariants}>
            <h2>Leadership & Mentorship</h2>
            <p className="leadership-intro">
              Empowering others through mentorship, technical leadership, and knowledge sharing. 
              I believe in lifting others up and creating inclusive learning environments.
            </p>
          </motion.div>

          <motion.div className="leadership-grid" variants={containerVariants}>
            {leadershipExperiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                className={`leadership-card card ${experience.color}`}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-header">
                  <div className="card-icon">
                    <experience.icon />
                  </div>
                  <div className="card-title-section">
                    <h3>{experience.title}</h3>
                    <p className="organization">{experience.organization}</p>
                    <span className="period">{experience.period}</span>
                  </div>
                </div>

                <div className="card-content">
                  <p className="description">{experience.description}</p>
                  
                  <div className="achievements-section">
                    <h4>Key Contributions:</h4>
                    <ul>
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="impact-section">
                    <div className="impact-badge">
                      <FaLightbulb />
                      <span>{experience.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="leadership-values" variants={itemVariants}>
            <h3>My Leadership Philosophy</h3>
            <div className="values-grid">
              <motion.div 
                className="value-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaRocket />
                <h4>Empowerment</h4>
                <p>I believe in giving others the tools and confidence to succeed on their own.</p>
              </motion.div>
              <motion.div 
                className="value-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaHeart />
                <h4>Inclusive Growth</h4>
                <p>Creating environments where everyone feels valued and can contribute meaningfully.</p>
              </motion.div>
              <motion.div 
                className="value-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaLightbulb />
                <h4>Knowledge Sharing</h4>
                <p>I'm passionate about sharing knowledge and helping others learn and grow.</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
