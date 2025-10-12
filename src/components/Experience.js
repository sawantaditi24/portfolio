import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      type: 'experience',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
      achievements: [
        'Led a team of 5 developers in building a customer management platform',
        'Improved application performance by 40% through code optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2021 - 2022',
      type: 'experience',
      description: 'Developed and maintained web applications for various clients across different industries.',
      achievements: [
        'Built responsive web applications serving 10,000+ daily users',
        'Collaborated with design team to implement pixel-perfect UIs',
        'Integrated third-party APIs and payment gateways',
        'Participated in agile development processes'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'JavaScript', 'CSS3']
    },
    {
      title: 'Frontend Developer',
      company: 'WebCraft Studios',
      period: '2020 - 2021',
      type: 'experience',
      description: 'Focused on creating engaging user interfaces and improving user experience.',
      achievements: [
        'Developed mobile-first responsive websites',
        'Implemented modern CSS frameworks and animations',
        'Optimized websites for better SEO and performance',
        'Worked closely with UX/UI designers'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery']
    }
  ];

  const education = [
    {
      title: 'Master of Science in Computer Science',
      company: 'University of Technology',
      period: '2018 - 2020',
      type: 'education',
      description: 'Specialized in Software Engineering and Data Structures.',
      achievements: [
        'Graduated with Distinction (GPA: 3.8/4.0)',
        'Completed thesis on "Machine Learning in Web Applications"',
        'Participated in multiple hackathons and coding competitions',
        'Served as President of Computer Science Society'
      ],
      technologies: ['Python', 'Java', 'Machine Learning', 'Data Structures', 'Algorithms']
    },
    {
      title: 'Bachelor of Science in Computer Science',
      company: 'State University',
      period: '2014 - 2018',
      type: 'education',
      description: 'Foundation in computer science principles and programming.',
      achievements: [
        'Graduated Magna Cum Laude (GPA: 3.7/4.0)',
        'Dean\'s List for 6 consecutive semesters',
        'Completed capstone project on "E-commerce Platform"',
        'Active member of Programming Club'
      ],
      technologies: ['C++', 'Java', 'Database Systems', 'Web Development', 'Software Engineering']
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      company: 'Amazon Web Services',
      period: '2023',
      type: 'certification',
      description: 'Professional certification in designing distributed systems on AWS.',
      achievements: [
        'Demonstrated expertise in AWS services and architecture',
        'Passed comprehensive exam covering cloud best practices',
        'Validated skills in designing scalable and secure applications'
      ],
      technologies: ['AWS', 'Cloud Architecture', 'DevOps', 'Security']
    },
    {
      title: 'React Developer Certification',
      company: 'Meta (Facebook)',
      period: '2022',
      type: 'certification',
      description: 'Official certification in React development and best practices.',
      achievements: [
        'Mastered React hooks, context, and state management',
        'Learned advanced patterns and performance optimization',
        'Completed hands-on projects and assessments'
      ],
      technologies: ['React', 'JavaScript ES6+', 'Redux', 'Testing']
    }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'experience':
        return experience;
      case 'education':
        return education;
      case 'certifications':
        return certifications;
      default:
        return experience;
    }
  };

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
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="experience-header" variants={itemVariants}>
            <h2>Experience & Education</h2>
            <p className="experience-intro">
              My professional journey and educational background that shaped my expertise in technology.
            </p>
          </motion.div>

          <motion.div className="experience-tabs" variants={itemVariants}>
            <div className="tab-buttons">
              <button
                className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                <FaBriefcase />
                Experience
              </button>
              <button
                className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                <FaGraduationCap />
                Education
              </button>
              <button
                className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('certifications')}
              >
                <FaAward />
                Certifications
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="experience-timeline"
            variants={containerVariants}
            key={activeTab}
          >
            {getCurrentData().map((item, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{item.title}</h3>
                    <div className="timeline-meta">
                      <span className="company">{item.company}</span>
                      <span className="period">{item.period}</span>
                    </div>
                  </div>
                  
                  <p className="timeline-description">{item.description}</p>
                  
                  <div className="timeline-achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="timeline-technologies">
                    <h4>Technologies:</h4>
                    <div className="tech-tags">
                      {item.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
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

export default Experience;
