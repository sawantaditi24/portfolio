import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experience = [
    {
      title: 'Student Research Assistant',
      company: 'California State University, Long Beach',
      period: '2024 - Present',
      type: 'experience',
      description: 'Built intelligent full-stack systems for freight safety and business analytics using FastAPI, Redis, and computer vision.',
      achievements: [
        'Reduced investor research time by 28% through data aggregation.',
        'Improved inventory automation by 42% via edge-optimized systems.',
        'Enhanced freight safety by 33% with object detection models.',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'GenAI', 'HTML/CSS', 'SQL', 'Docker']
    },
    {
      title: 'Software Engineer',
      company: 'Data Axle Solutions',
      period: '2022 - 2024',
      type: 'experience',
      description: 'I was responsible for end-to-end feature development, functionality enhancements, and bug fixes. My work involved collaborating closely with cross-functional teams to design and implement new features that aligned with product goals, while also refining existing functionalities to improve user experience and performance.',
      achievements: [
        'Boosted data quality and query performance by 40% through custom ORM validations.',
        'Improved search scalability and speed by 65% with Elasticsearch integration.',
        'Enabled real-time data monitoring for 19M+ records, improving quality by 83%.',
        'Increased system reliability by 27% through automated testing pipelines.'
      ],
      technologies: ['Python', 'React', 'Ruby on Rails', 'PostgreSQL', 'AWS']
    },
    {
      title: 'Project Intern',
      company: 'WebCraft Studios',
      period: '2020 - 2021',
      type: 'experience',
      description: 'Focused on creating engaging user interfaces and improving user experience.',
      achievements: [
        'Reduced delivery time by 2 days, increasing repeat purchases by 45% and cutting logistics costs.',
        'Automated 70% of inventory checks for 1.5K+ assets, boosting operational efficiency.',
        'Achieved 95% test coverage with 100+ integration tests, reducing QA troubleshooting time by 45%',
        'Improved page load speed by 30%, enhancing user experience.'
      ],
      technologies: ['Java', 'JavaScript', 'Bootstrap', 'jQuery']
    }
  ];

  const education = [
    {
      title: 'Master of Science in Computer Science',
      university: 'California State University, Long Beach',
      period: '2024 - 2025',
      type: 'education',
      description: 'Specialized in Software Engineering and Data Structures.',
      subjects: [
        'Advanced Data Structures and Algorithms',
        'Advanced Software Engineering',
        'Design Patterns',
        'Advanced Artificial Intelligence'
      ],
    },
    {
      title: 'Bachelors in Computer Engineering',
      university: 'Modern Education Society\'s College of Engineering',
      period: '2018 - 2022',
      type: 'education',
      description: 'Foundation in computer science principles and programming.',
      subjects: [
        'Object Oriented Programming',
        'Software Testing and Quality Assurance',
        'Database Management Systems',
        'Cloud Computing'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      company: 'Amazon Web Services',
      period: 'October 2023 - October 2026',
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
      title: 'Burp Suite extension for script based attacks',
      company: 'Cybersecurist',
      period: '2022',
      type: 'Research paper',
      description: 'Published research paper in IEEE Xplore conference.',
      achievements: [
        'Secured funding from Cybersecurity firm to carry out research',
        'Led a team of four members to delivier from inception to deployment',
        'Implemented a Burp Suite extension for script based attacks'
      ],
      technologies: ['Jython', 'JavaScript ES6+', 'BurpSuite', 'Testing']
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
                      <span className="company">{item.company || item.university}</span>
                      <span className="period">{item.period}</span>
                    </div>
                  </div>
                  
                  <p className="timeline-description">{item.description}</p>
                  
                  <div className="timeline-achievements">
                    <h4>{item.type === 'education' ? 'Key Subjects:' : 'Key Achievements:'}</h4>
                    <ul>
                      {(item.achievements || item.subjects || []).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="timeline-technologies">
                      <h4>Technologies:</h4>
                      <div className="tech-tags">
                        {item.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
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
