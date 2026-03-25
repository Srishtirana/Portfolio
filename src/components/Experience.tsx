import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'work' | 'internship';
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Blockchain Development Trainee',
      company: 'Blockchain Training Program',
      location: 'Remote',
      period: 'Sep 2025 – Present',
      description: [
        'Developing and testing Smart Contracts using Solidity on Ethereum blockchain',
        'Designing decentralized application (dApp) prototypes',
        'Integrating blockchain-related frontend/backend components using Web3.js',
        'Learning blockchain architecture and consensus mechanisms',
        'Implementing security best practices for smart contract development'
      ],
      type: 'work'
    },
    {
      title: 'Technology Job Simulation',
      company: 'Deloitte',
      location: 'Virtual',
      period: 'Sep 2025',
      description: [
        'Analyzed real-world technology consulting case studies',
        'Proposed technical solutions based on business requirements',
        'Gained exposure to digital transformation problem-solving',
        'Collaborated on team-based project deliverables',
        'Developed understanding of enterprise technology frameworks'
      ],
      type: 'internship'
    }
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9] as const,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9] as const,
      },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
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
            Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              variants={lineVariants}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple to-neon-blue transform -translate-x-1/2"
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    variants={itemVariants}
                    className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full transform -translate-x-1/2 border-4 border-gray-900 z-10"
                  />

                  {/* Content card */}
                  <motion.div
                    variants={itemVariants}
                    className={`ml-16 md:ml-0 md:w-5/12 glass rounded-xl p-6 hover-lift ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-neon-purple font-semibold mb-2">{exp.company}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'work' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {exp.type === 'work' ? 'Full-time' : 'Internship'}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((desc, descIndex) => (
                        <motion.li
                          key={descIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: descIndex * 0.1 }}
                          className="flex items-start gap-2 text-gray-300 text-sm"
                        >
                          <span className="text-neon-purple mt-1">•</span>
                          <span>{desc}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
