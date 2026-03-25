import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

interface Project {
  title: string;
  description: string;
  techStack: Array<{ icon: any; name: string }>;
  liveUrl: string;
  githubUrl: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-Commerce Website',
      description: 'Developed a responsive e-commerce platform with a product catalog, cart system, and checkout interface. Implemented client-side validation and interactive UI features using JavaScript.',
      techStack: [
        { icon: SiTailwindcss, name: 'HTML' },
        { icon: SiTailwindcss, name: 'CSS' },
        { icon: FaReact, name: 'JavaScript' },
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/Srishtirana',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Typing Speed Test Application',
      description: 'Built a desktop-based typing speed test application with user login, leaderboard, and typing performance analytics. Features real-time WPM calculation and accuracy tracking.',
      techStack: [
        { icon: FaNodeJs, name: 'Python' },
        { icon: FaReact, name: 'Tkinter' },
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/Srishtirana',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Smart Digital Tourism Platform',
      description: 'Developed an AI-based tourism recommendation platform focused on improving travel experience using intelligent suggestions and modern web development practices.',
      techStack: [
        { icon: FaNodeJs, name: 'Python' },
        { icon: SiExpress, name: 'Flask' },
        { icon: SiMongodb, name: 'MySQL' },
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/Srishtirana',
      image: '/api/placeholder/400/250',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9] as const,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
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
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                }}
                className="glass rounded-xl overflow-hidden hover-lift group"
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="relative h-48 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-neon-purple to-neon-blue rounded-lg animate-pulse"></div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="text-white" size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        <Code className="text-white" size={20} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                      >
                        <tech.icon className="text-neon-purple" size={12} />
                        <span>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-neon-purple to-neon-blue text-white rounded-lg text-sm font-medium hover-lift"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 text-center py-2 px-4 glass text-white rounded-lg text-sm font-medium hover-lift"
                    >
                      View Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
