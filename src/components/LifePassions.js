import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGlobe, FaTrophy, FaStar, FaUsers, FaGamepad } from 'react-icons/fa';
import './LifePassions.css';

const LifePassions = () => {
  const passionSections = [
    {
      title: 'Community Impact',
      subtitle: 'Volunteering & Giving Back',
      icon: FaHeart,
      color: 'pink',
      description: 'Making a positive difference in my community through volunteer work and social impact initiatives.',
      highlights: [
        'Organized community clean-up drives',
        'Volunteered at local food banks',
        'Mentored underprivileged students',
        'Participated in charity fundraising events'
      ],
      impact: '100+ hours of community service',
      quote: '"The best way to find yourself is to lose yourself in the service of others."'
    },
    {
      title: 'Wanderlust Adventures',
      subtitle: 'Travel & Exploration',
      icon: FaGlobe,
      color: 'pink',
      description: 'Exploring new cultures, cuisines, and landscapes while creating unforgettable memories around the world.',
      highlights: [
        'Backpacked through 15+ countries',
        'Experienced diverse cultures and traditions',
        'Captured stunning landscapes and moments',
        'Made lifelong friends across continents'
      ],
      impact: '15+ countries explored',
      quote: '"Travel is the only thing you buy that makes you richer."'
    },
    {
      title: 'Cricket Chronicles',
      subtitle: 'Passion for the Gentleman\'s Game',
      icon: FaGamepad,
      color: 'pink',
      description: 'From childhood dreams to adult passion - cricket has been my constant companion, teaching me teamwork, strategy, and perseverance.',
      highlights: [
        'Played cricket since childhood',
        'Followed international cricket tournaments',
        'Analyzed game strategies and techniques',
        'Connected with cricket communities worldwide'
      ],
      impact: '20+ years of cricket passion',
      quote: '"Cricket is a game of glorious uncertainties."'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="life-passions" className="life-passions">
      <div className="container">
        <motion.div
          className="life-passions-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="life-passions-header" variants={itemVariants}>
            <h2>Life & Passions</h2>
            <p className="life-passions-intro">
              Beyond the code, I'm passionate about making a difference, exploring the world, 
              and enjoying the beautiful game of cricket. These experiences shape who I am.
            </p>
          </motion.div>

          <motion.div className="passions-grid" variants={containerVariants}>
            {passionSections.map((passion, index) => (
              <motion.div
                key={passion.title}
                className={`passion-card card ${passion.color}`}
                variants={cardVariants}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-header">
                  <div className="passion-icon">
                    <passion.icon />
                  </div>
                  <div className="passion-title-section">
                    <h3>{passion.title}</h3>
                    <p className="passion-subtitle">{passion.subtitle}</p>
                  </div>
                </div>

                <div className="card-content">
                  <p className="passion-description">{passion.description}</p>
                  
                  <div className="highlights-section">
                    <h4>Key Highlights:</h4>
                    <ul>
                      {passion.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="impact-quote-section">
                    <div className="impact-badge">
                      <FaStar />
                      <span>{passion.impact}</span>
                    </div>
                    <div className="passion-quote">
                      <FaUsers />
                      <em>"{passion.quote}"</em>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="life-philosophy" variants={itemVariants}>
            <h3>My Life Philosophy</h3>
            <div className="philosophy-grid">
              <motion.div 
                className="philosophy-item"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <FaHeart />
                <h4>Give Back</h4>
                <p>Always find ways to contribute to your community and help others succeed.</p>
              </motion.div>
              <motion.div 
                className="philosophy-item"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <FaGlobe />
                <h4>Explore</h4>
                <p>Step out of your comfort zone and discover the amazing world around you.</p>
              </motion.div>
              <motion.div 
                className="philosophy-item"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <FaTrophy />
                <h4>Passion</h4>
                <p>Pursue what you love with dedication and let it bring joy to your life.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="work-together-cta" variants={itemVariants}>
            <div className="cta-content">
              <h3>Interested in Working Together?</h3>
              <p>
                I'm always excited to collaborate on new projects, share ideas, and create something amazing together. 
                Whether it's a tech project, community initiative, or just a great conversation about cricket - let's connect!
              </p>
              <div className="cta-buttons">
                <motion.a 
                  href="#contact" 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                </motion.a>
                <motion.a 
                  href="#projects" 
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LifePassions;
