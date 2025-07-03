"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 bg-background text-text overflow-hidden">
      <div className="container mx-auto relative z-10">
        <SectionHeader title="About Me" />
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto bg-card p-8 rounded-xl shadow-smooth border border-border_light">
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative p-1 rounded-full bg-accent/20">
              <Image
                src="/about-pic.png"
                width={360}
                height={360}
                alt="Akif Qureshi smiling"
                className="rounded-full object-cover border-4 border-card"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 text-lg leading-relaxed text-gray-300 font-sans space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p>
              As a passionate and driven software engineer, with a solid background of a Bachelor's degree in IT Engineering from Osmania University—augmented by my current pursuit of an M.S. in Computer Science at Pace University in New York—I offer a comprehensive skill set and an unrelenting commitment to advancing the craft of software engineering.
            </p>
            <p>
              I'm proficient across a spectrum of technologies including <span className="text-accent font-semibold">HTML, CSS, JavaScript, Java, C, Python, SQL, PostgreSQL, and MongoDB.</span> My goal is to craft digital experiences that are not only functional but also visually stunning and user-centric.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 