"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-card text-text py-8 border-t border-border_dark relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-gray-400 font-sans mb-4 md:mb-0">
          &copy; {currentYear} Akif Qureshi. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link href="#about" className="text-accent hover:text-secondary_accent transition-colors font-sans">About</Link>
          <Link href="#experience" className="text-accent hover:text-secondary_accent transition-colors font-sans">Experience</Link>
          <Link href="#projects" className="text-accent hover:text-secondary_accent transition-colors font-sans">Projects</Link>
          <Link href="#contact" className="text-accent hover:text-secondary_accent transition-colors font-sans">Contact</Link>
        </div>
      </div>
    </motion.footer>
  );
} 