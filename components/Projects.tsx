"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import { useState } from 'react';

// Enhanced project type extends base Project with gallery metadata
interface EnhancedProject extends Project {
  images: string[];
  imageDescriptions: string[];
  isGif: boolean;
}

// Enhanced project data with multiple images
const enhancedProjects: EnhancedProject[] = projects.map(project => {
  if (project.name === 'PATIO AI') {
    return {
      ...project,
      images: ['patioai1.png', 'patioai2.png'], // Light and dark mode
      imageDescriptions: ['Light Mode Interface', 'Dark Mode Interface'],
      isGif: false,
    } as EnhancedProject;
  }
  if (project.name === 'SAV') {
    return {
      ...project,
      images: [project.image],
      imageDescriptions: ['SAV in Action'],
      isGif: true // Flag to indicate this is a GIF
    } as EnhancedProject;
  }
  return {
    ...project,
    images: [project.image],
    imageDescriptions: ['Application Interface'],
    isGif: false
  } as EnhancedProject;
});

interface ProjectCardProps {
  project: EnhancedProject;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageExpanded, setImageExpanded] = useState(false);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
    >
      {/* Large Image Section - Takes up 3/5 of the space */}
      <motion.div
        className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
      >
        <div className="relative group">
          {/* Main Image Container */}
          <div className={`relative overflow-hidden rounded-2xl bg-card border border-border ${
            project.isGif ? 'aspect-auto' : 'aspect-[16/10]'
          }`}>
            <Image
              src={`/${project.images[currentImageIndex]}`}
              width={project.isGif ? 800 : undefined}
              height={project.isGif ? 600 : undefined}
              fill={!project.isGif}
              alt={`${project.name} - ${project.imageDescriptions[currentImageIndex]}`}
              className={`transition-transform duration-500 group-hover:scale-[1.02] ${
                project.isGif ? 'object-contain w-full h-auto' : 'object-cover'
              }`}
              unoptimized={project.isGif} // Don't optimize GIFs
            />
            
            {/* Image Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Navigation Arrows - Only show if multiple images */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              {/* Expand Button */}
              <button
                onClick={() => setImageExpanded(true)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Image Indicators - Only show if multiple images */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => setCurrentImageIndex(imgIndex)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      imgIndex === currentImageIndex ? 'bg-accent' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Image Description */}
          {project.images.length > 1 && (
            <div className="mt-3 text-center">
              <span className="text-sm text-text-secondary">
                {project.imageDescriptions[currentImageIndex]}
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Project Content - Takes up 2/5 of the space */}
      <motion.div
        className={`lg:col-span-2 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
        initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
      >
        {/* Project Header */}
        <div>
          <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            {project.name}
          </h3>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.features.slice(0, 3).map((feature, featureIndex) => (
              <li key={featureIndex} className="text-text-secondary leading-relaxed flex items-start">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1.5 text-xs font-medium bg-card border border-border rounded-full text-text-secondary hover:border-accent/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex gap-3 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 bg-card border border-border text-text-primary rounded-lg hover:border-accent hover:text-accent transition-all duration-300 text-sm font-medium"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-3 bg-accent text-black rounded-lg hover:bg-accent/90 transition-colors font-semibold text-sm"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        </div>
      </motion.div>

      {/* Image Modal */}
      {imageExpanded && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setImageExpanded(false)}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <Image
              src={`/${project.images[currentImageIndex]}`}
              width={project.isGif ? 1200 : undefined}
              height={project.isGif ? 900 : undefined}
              fill={!project.isGif}
              alt={`${project.name} - ${project.imageDescriptions[currentImageIndex]} (Full Size)`}
              className="object-contain max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
              unoptimized={project.isGif}
            />
            
            {/* Close button */}
            <button
              onClick={() => setImageExpanded(false)}
              className="absolute top-4 right-4 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
            >
              ✕
            </button>
            
            {/* Navigation for modal - Only show if multiple images */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            
            {/* Image description in modal */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                <span className="text-white text-lg font-medium bg-black/50 px-4 py-2 rounded-lg">
                  {project.imageDescriptions[currentImageIndex]}
                </span>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-background text-text-primary relative z-10">
      <div className="container mx-auto px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <motion.div
          className="max-w-4xl mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 text-white">
            Selected Work
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-32">
          {enhancedProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 