"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonLink from './ButtonLink';
import SectionHeader from './SectionHeader';
import ProjectModal from './ProjectModal';
import { projects, Project } from '../data/projects';
import { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative px-6 py-24 bg-background text-text overflow-hidden">
      <div className="container mx-auto relative z-10">
        <SectionHeader title="My Creative Solutions" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((p, index) => (
            <motion.div
              key={p.name}
              className="relative rounded-xl overflow-hidden bg-card shadow-smooth border border-border_light group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(0, 212, 255, 0.2)' }}
              onClick={() => openModal(p)}
            >
              <Image
                src={`/${p.image}`}
                width={1200}
                height={700}
                alt={p.name}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 p-8 text-center">
                <h3 className="text-3xl font-bold font-sans text-white mb-2">{p.name}</h3>
                <p className="text-gray-300 font-sans text-sm">Click to view details</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <ButtonLink href={p.github} target="_blank">View Code</ButtonLink>
                  <ButtonLink variant="primary" href={p.live} target="_blank">Live Demo</ButtonLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
} 