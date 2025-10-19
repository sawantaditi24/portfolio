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
      description: 'I was responsible for end-to-end feature development, functionality enhancements, and bug fixes.',
      achievements: [
        'Boosted data quality and query performance by 40% through custom ORM validations.',
        'Improved search scalability and speed by 65% with Elasticsearch integration.',
        'Enabled real-time data monitoring for 19M+ records, improving quality by 83%.',
        'Increased system reliability by 27% through automated testing pipelines.'
      ],
      technologies: ['Python', 'React', 'Ruby on Rails', 'PostgreSQL', 'AWS']
    }
  ];

  const education = [
    {
      title: 'Master of Science in Computer Science',
      university: 'California State University, Long Beach',
      period: '2024 - 2025',
      description: 'Specialized in Software Engineering and Data Structures.',
      subjects: [
        'Advanced Data Structures and Algorithms',
        'Advanced Software Engineering',
        'Design Patterns',
        'Advanced Artificial Intelligence'
      ]
    },
    {
      title: 'Bachelors in Computer Engineering',
      university: 'Modern Education Society\'s College of Engineering',
      period: '2018 - 2022',
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
    if (activeTab === 'experience') return experience;
    if (activeTab === 'education') return education;
    if (activeTab === 'certifications') return certifications;
    return experience;
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience-content">
          <div className="experience-header">
            <h2>Experience & Education</h2>
            <p className="experience-intro">
              My professional journey and educational background that shaped my expertise in technology.
            </p>
          </div>

          <div className="experience-tabs">
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
          </div>

          <div className="experience-timeline">
            {getCurrentData().map((item, index) => (
              <div key={`${activeTab}-${index}`} className="timeline-item">
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
                    <h4>{activeTab === 'education' ? 'Key Subjects:' : 'Key Achievements:'}</h4>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
