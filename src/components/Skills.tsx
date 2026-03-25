import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      icon: '👨‍💻',
      skills: [
        { name: 'JavaScript (ES6+)', level: 85, category: 'Programming Languages' },
        { name: 'Java', level: 75, category: 'Programming Languages' },
        { name: 'Python', level: 75, category: 'Programming Languages' },
        { name: 'SQL', level: 70, category: 'Programming Languages' },
        { name: 'HTML', level: 90, category: 'Programming Languages' },
        { name: 'CSS', level: 85, category: 'Programming Languages' },
      ]
    },
    {
      name: 'Web Technologies',
      icon: '�',
      skills: [
        { name: 'React.js', level: 80, category: 'Web Technologies' },
        { name: 'Node.js', level: 75, category: 'Web Technologies' },
        { name: 'Express.js', level: 75, category: 'Web Technologies' },
        { name: 'MongoDB', level: 70, category: 'Web Technologies' },
        { name: 'Flask', level: 70, category: 'Web Technologies' },
      ]
    },
    {
      name: 'Concepts',
      icon: '🧠',
      skills: [
        { name: 'RESTful APIs', level: 80, category: 'Concepts' },
        { name: 'CRUD Operations', level: 85, category: 'Concepts' },
        { name: 'Client-Server Architecture', level: 75, category: 'Concepts' },
        { name: 'Responsive Design', level: 85, category: 'Concepts' },
      ]
    },
    {
      name: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 80, category: 'Tools & Platforms' },
        { name: 'GitHub', level: 85, category: 'Tools & Platforms' },
        { name: 'VS Code', level: 90, category: 'Tools & Platforms' },
        { name: 'Postman', level: 75, category: 'Tools & Platforms' },
        { name: 'Canva', level: 80, category: 'Tools & Platforms' },
        { name: 'Microsoft Excel', level: 85, category: 'Tools & Platforms' },
      ]
    }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skillCategories.flatMap(cat => cat.skills)
    : skillCategories.find(cat => cat.name === selectedCategory)?.skills || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9] as const,
      },
    }),
  };

  return (
    <section id="skills" className="py-20 relative">
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
            Skills
          </motion.h2>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white neon-border'
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white neon-border'
                    : 'glass text-gray-300 hover:text-white'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="glass p-6 rounded-xl hover-lift"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-neon-purple font-bold">{skill.level}%</span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      variants={skillBarVariants}
                      custom={skill.level}
                      className="bg-gradient-to-r from-neon-purple to-neon-blue h-3 rounded-full relative"
                    >
                      <motion.div
                        animate={{ 
                          boxShadow: ['0 0 10px rgba(168, 85, 247, 0.5)', '0 0 20px rgba(168, 85, 247, 0.8)'] 
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          repeatType: 'reverse' 
                        }}
                        className="absolute inset-0 rounded-full"
                      />
                    </motion.div>
                  </div>
                  
                  {/* Floating particles effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="absolute -top-1 -right-1 w-2 h-2 bg-neon-purple rounded-full"
                  />
                </div>

                {/* Skill tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.level >= 80 && (
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                      Expert
                    </span>
                  )}
                  {skill.level >= 60 && skill.level < 80 && (
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                      Proficient
                    </span>
                  )}
                  {skill.level < 60 && (
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                      Learning
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Overview */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Skills Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillCategories.map((category) => (
                <motion.div
                  key={category.name}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h4 className="text-white font-semibold mb-2">{category.name}</h4>
                  <p className="text-gray-400 text-sm">{category.skills.length} technologies</p>
                  <div className="mt-2">
                    <span className="text-neon-purple font-bold">
                      {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                    </span>
                    <span className="text-gray-400 text-sm"> avg</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
