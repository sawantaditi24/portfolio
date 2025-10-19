import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaAws,
  FaDocker,
  FaDatabase,
  FaMobile,
  FaCloud,
  FaBrain,
  FaRobot,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaComments
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FaReact,
      skills: [
        { name: 'React', level: 95, icon: FaReact },
        { name: 'JavaScript', level: 90, icon: FaJs },
        { name: 'HTML5', level: 95, icon: FaHtml5 },
        { name: 'CSS3', level: 90, icon: FaCss3Alt },
        { name: 'TypeScript', level: 85, icon: FaJs },
        { name: 'Vue.js', level: 80, icon: FaJs }
      ]
    },
    {
      title: 'Backend Development',
      icon: FaNodeJs,
      skills: [
        { name: 'Node.js', level: 90, icon: FaNodeJs },
        { name: 'Python', level: 85, icon: FaPython },
        { name: 'Express.js', level: 88, icon: FaNodeJs },
        { name: 'REST APIs', level: 92, icon: FaNodeJs },
        { name: 'GraphQL', level: 75, icon: FaNodeJs },
        { name: 'Microservices', level: 80, icon: FaNodeJs }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: FaDatabase,
      skills: [
        { name: 'PostgreSQL', level: 85, icon: FaDatabase },
        { name: 'MongoDB', level: 80, icon: FaDatabase },
        { name: 'AWS', level: 75, icon: FaAws },
        { name: 'Docker', level: 82, icon: FaDocker },
        { name: 'Kubernetes', level: 70, icon: FaDocker },
        { name: 'Redis', level: 78, icon: FaDatabase }
      ]
    },
    {
      title: 'Tools & Others',
      icon: FaGitAlt,
      skills: [
        { name: 'Git', level: 90, icon: FaGitAlt },
        { name: 'CI/CD', level: 85, icon: FaGitAlt },
        { name: 'Testing', level: 80, icon: FaJs },
        { name: 'Mobile Dev', level: 75, icon: FaMobile },
        { name: 'DevOps', level: 78, icon: FaCloud },
        { name: 'Agile', level: 88, icon: FaGitAlt }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: FaBrain,
      skills: [
        { name: 'LLM Integration', level: 85, icon: FaRobot },
        { name: 'Vector Embeddings', level: 80, icon: FaDatabase },
        { name: 'RAG Systems', level: 82, icon: FaBrain },
        { name: 'FastAPI', level: 88, icon: FaPython },
        { name: 'LangChain', level: 75, icon: FaRobot },
        { name: 'OpenAI API', level: 78, icon: FaBrain }
      ]
    },
    {
      title: 'Soft Skills',
      icon: FaUsers,
      skills: [
        { name: 'Team Leadership', level: 90, icon: FaUsers },
        { name: 'Problem Solving', level: 95, icon: FaLightbulb },
        { name: 'Communication', level: 88, icon: FaComments },
        { name: 'Project Management', level: 85, icon: FaHandshake },
        { name: 'Mentoring', level: 82, icon: FaUsers },
        { name: 'Adaptability', level: 90, icon: FaLightbulb }
      ]
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

  const skillVariants = {
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="skills-header" variants={itemVariants}>
            <h2>Skills & Expertise</h2>
            <p className="skills-intro">
              A comprehensive overview of my technical skills and expertise across different domains of software development.
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="skill-category"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    <category.icon />
                  </div>
                  <h3>{category.title}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      variants={skillVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="skill-info">
                        <div className="skill-icon">
                          <skill.icon />
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
