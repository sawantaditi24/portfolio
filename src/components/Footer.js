import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:aditi@example.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="footer-main" variants={itemVariants}>
            <div className="footer-brand">
              <h3>Aditi</h3>
              <p>
                A passionate developer creating beautiful, functional, and user-centered 
                digital experiences. Let's build something amazing together!
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <a 
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <div className="contact-info">
                <p>
                  <FaEnvelope className="icon" />
                  aditi@example.com
                </p>
                <p>
                  <span className="icon">📱</span>
                  +1 (555) 123-4567
                </p>
                <p>
                  <span className="icon">📍</span>
                  San Francisco, CA
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="footer-bottom"
            variants={itemVariants}
          >
            <div className="footer-copyright">
              <p>
                © {currentYear} Aditi. Made with <FaHeart className="heart" /> with React
              </p>
            </div>
            
            <motion.button
              className="scroll-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <FaArrowUp />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="footer-decoration">
        <div className="decoration-shape shape-1"></div>
        <div className="decoration-shape shape-2"></div>
        <div className="decoration-shape shape-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
