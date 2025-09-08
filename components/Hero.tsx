"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';


export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-text-primary relative overflow-hidden">
      {/* Background gradient - Dynamic asymmetrical design */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-accent/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-accent/40" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent/30 via-accent/10 to-transparent blur-3xl" />
      
      {/* Dynamic floating elements */}
      <motion.div 
        className="absolute top-20 right-10 w-2 h-2 bg-accent/60 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent/40 rounded-full"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-accent/20 rounded-full blur-sm"
        animate={{ 
          y: [0, -10, 0],
          x: [0, 5, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      />
      
      {/* Main content container */}
      <motion.div 
        className="container mx-auto px-8 md:px-40 relative z-10"
        style={{ y, opacity }}
      >
        <div className="max-w-6xl">
          {/* Text content */}
          <motion.div 
            className="space-y-8 max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Large heading - sleek proportions like reference */}
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-white">Akif Azher</span>
              <br />
              <span className="text-white">Qureshi</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              className="space-y-4 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-lg md:text-xl text-text-secondary font-medium">
                AI Systems & Full Stack Engineer
              </p>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                Building reliable AI platforms while ensuring they don't break in ways that matter. 
                Currently finishing my Master's at Pace University while shipping platforms like PATIO AI.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button 
                className="inline-flex items-center px-6 py-3 bg-accent text-black font-medium text-sm rounded-lg hover:bg-accent/90 transition-colors w-fit"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Work
                <ArrowDown className="ml-2 w-4 h-4" />
              </button>
              
              <button 
                className="inline-flex items-center px-6 py-3 border border-border text-text-primary font-medium text-sm rounded-lg hover:border-accent hover:text-accent transition-colors w-fit"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a 
                href="https://github.com/AKIFQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/akifqureshi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:akifazherq@gmail.com"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center cursor-pointer hover:border-accent transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div 
            className="w-1 h-3 bg-text-secondary rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
