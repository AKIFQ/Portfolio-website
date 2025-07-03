"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import ButtonLink from './ButtonLink';
import { Project } from '../data/projects';
import { useState } from 'react';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative bg-card rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-smooth border border-border_light"
        initial={{ y: 50, scale: 0.9 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 50, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text hover:text-accent text-3xl font-bold transition-colors z-50"
        >
          &times;
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <Image
              src={`/${project.image}`}
              width={1000}
              height={600}
              alt={project.name}
              className="rounded-lg mb-6 border border-border_light"
            />
            <h3 className="text-4xl font-bold font-sans text-accent mb-4">{project.name}</h3>
            <p className="text-gray-300 font-sans leading-relaxed mb-6">
              {project.description}
            </p>
            {/* Tech stack badges - Clean and integrated */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-mono">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <ButtonLink href={project.github} target="_blank">Github</ButtonLink>
              <ButtonLink variant="primary" href={project.live} target="_blank">Live Demo</ButtonLink>
            </div>
          </div>

          <div className="lg:w-1/3 space-y-6">
            {/* Further details or images */} 
            <div className="bg-background rounded-lg p-4 border border-border_dark">
              <h4 className="text-xl font-semibold text-text mb-2 font-sans">Key Features</h4>
              <ul className="list-disc list-inside text-gray-400 font-sans text-sm space-y-1">
                {project.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
            </div>

            <div className="bg-background rounded-lg p-4 border border-border_dark">
              <h4 className="text-xl font-semibold text-text mb-2 font-sans">Challenges Overcome</h4>
              <ul className="list-disc list-inside text-gray-400 font-sans text-sm space-y-1">
                {project.challenges.map((ch) => (
                  <li key={ch}>{ch}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 