import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Mail, ArrowDown } from 'lucide-react';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = useMemo(() => [
    'I build modern, responsive, and user-focused web experiences.',
    'Computer Science student crafting interactive and scalable web applications.',
    'Frontend & MERN Stack developer passionate about building real-world digital products.',
    'I turn ideas into functional digital solutions.'
  ], []);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(150);
        
        if (text === currentPhrase) {
          setIsDeleting(true);
          setTypingSpeed(2000);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(100);
        
        if (text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9] as const,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="neon-text">Srishti Rana</span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-300 mb-6">
              Frontend & MERN Stack Developer
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8 h-12">
            <h2 className="text-xl md:text-2xl text-gray-400">
              <span>{text}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white rounded-full font-semibold hover-lift neon-border"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass text-white rounded-full font-semibold hover-lift flex items-center gap-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail size={20} />
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
            <motion.a
              href="https://github.com/Srishtirana"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-neon-purple transition-colors"
            >
              <Code size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-neon-blue transition-colors"
            >
              <Briefcase size={24} />
            </motion.a>
            <motion.a
              href="mailto:srishtirana117@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-neon-pink transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-8 text-4xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-cyan-400"
            >
              {React.createElement(FaReact as any, { className: "text-4xl" })}
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-green-400"
            >
              {React.createElement(FaNodeJs as any, { className: "text-4xl" })}
            </motion.div>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-orange-400"
            >
              {React.createElement(FaGitAlt as any, { className: "text-4xl" })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
