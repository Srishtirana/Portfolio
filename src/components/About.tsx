import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const About: React.FC = () => {
  const skills = [
    { name: 'JavaScript', icon: FaReact, level: 85 },
    { name: 'React.js', icon: FaReact, level: 80 },
    { name: 'Node.js', icon: FaNodeJs, level: 75 },
    { name: 'MongoDB', icon: SiMongodb, level: 70 },
    { name: 'Express.js', icon: SiExpress, level: 75 },
    { name: 'HTML/CSS', icon: SiTailwindcss, level: 90 },
    { name: 'Python', icon: FaPython, level: 75 },
    { name: 'Git', icon: FaGitAlt, level: 80 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9] as const,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a Computer Science undergraduate specializing in Frontend and MERN stack development. 
                I have experience building responsive web applications using JavaScript, HTML5, and CSS3, and I am currently improving 
                my skills in React.js, Node.js, Express.js, and MongoDB.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I enjoy creating visually appealing, user-friendly, and functional digital experiences. 
                My focus is on building scalable applications with attention to detail and performance optimization.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With a strong foundation in computer science principles and hands-on experience in full-stack development, 
                I enjoy tackling complex problems and turning ideas into reality through clean, efficient code.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-white">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="glass p-4 rounded-lg hover-lift"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {React.createElement(skill.icon as any, { className: "text-2xl text-neon-purple" })}
                      <span className="font-medium text-white">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-neon-purple to-neon-blue h-2 rounded-full"
                      />
                    </div>
                    <span className="text-xs text-gray-400 mt-1">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                FaReact, FaNodeJs, SiMongodb, SiExpress, 
                SiTailwindcss, FaGitAlt, FaPython
              ].map((Icon, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass p-4 rounded-lg hover-lift"
                >
                  {React.createElement(Icon as any, { className: "text-3xl text-neon-purple" })}
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
