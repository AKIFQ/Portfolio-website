"use client";

import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import ButtonLink from './ButtonLink';
import { socialLinks } from '../data/socials';
import * as THREE from 'three';

interface SocialIconProps {
  name: string;
  url: string;
  icon: string;
}

// A simple 3D abstract data visualization
function AbstractDataVisualization() {
  const meshRef = useRef<THREE.Mesh>(null);
  const lineRef = useRef<any>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
    if (lineRef.current) {
      lineRef.current.rotation.x += 0.005;
      lineRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1.5, 32, 32]}>
        <meshStandardMaterial wireframe color="#00d4ff" transparent opacity={0.3} />
      </Sphere>
      <Line
        ref={lineRef}
        points={[
          new THREE.Vector3(-2, 0, 0),
          new THREE.Vector3(0, 2, 0),
          new THREE.Vector3(2, 0, 0),
          new THREE.Vector3(0, -2, 0),
          new THREE.Vector3(-2, 0, 0),
          new THREE.Vector3(0, 0, 2),
          new THREE.Vector3(0, 0, -2),
          new THREE.Vector3(-2, 0, 0),
        ]}
        color="#2edb8e"
        lineWidth={1}
      />
    </group>
  );
}

// Redesigned social media icons
const SocialIcon = ({ name, url, icon }: SocialIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const iconVariants = {
    rest: { scale: 1, rotate: 0, color: '#e0e6eb' },
    hover: { scale: 1.1, rotate: 5, color: '#00d4ff' }
  };

  let IconSVG;
  switch (icon) {
    case 'linkedin':
      IconSVG = () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 6.5h-5v16h5V10zM12 10c-2.48 0-4 2.1-4 4.5v9.5h5V17c0-1.5 1-2 1.5-2s1.5.5 1.5 2v6h5V17c0-3.5-2-6.5-4.5-6.5zm-5.5 0z" /></svg>
      );
      break;
    case 'github':
      IconSVG = () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017 2 16.292 4.672 19.988 8.337 21.362c.407.075.55-.173.55-.384 0-.19-.008-.698-.013-1.366-2.227.485-2.695-.944-2.695-.944-.364-.925-.886-1.171-.886-1.171-.723-.492.054-.482.054-.482.801.057 1.222.825 1.222.825.713 1.224 1.874.87 2.327.665.072-.518.277-.87.505-1.07-.179-1.4-.871-1.89-2.24-.2-.364.316-.786.13-.786-.29.21-.663.31-.963.31-.98 0-1.842-.878-1.842-1.96 0-.87.424-1.577 1.11-2.02-.11-.2-.482-1.92.105-2.015.603-.01 1.97.747 2.766 1.127.674-.185 1.39-.278 2.103-.278.713 0 1.43.093 2.103.278.796-.38 2.163-1.137 2.766-1.127.587.095.215 1.815.105 2.015.686.443 1.11 1.15 1.11 2.02 0 1.082-.862 1.96-1.842 1.96-.3.0-.673-.1-.963-.31-.179.91.737 1.4.505 1.07.453-.414 1.222-.665 2.327-.665C17.33 13.923 19 16.21 19 19.5c0 .384.143.63.55.384 3.665-1.374 6.337-5.07 6.337-9.345C22 6.484 17.523 2 12 2z" clipRule="evenodd" /></svg>
      );
      break;
    case 'email':
      IconSVG = () => (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l-7.997 3.998-.003-7.996zm0 12.232l8-4 8 4-.003-7.996-7.997 3.998-7.997-3.998zM22 6h-2v8h2V6zM22 10.01l-2 1.5v-1.5l2-1.5zm0 8l-2 1.5v-1.5l2-1.5z" /></svg>
      );
      break;
    default:
      IconSVG = () => <div className="w-8 h-8 bg-gray-400 rounded-full"></div>; // Fallback
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-3 rounded-full bg-card border border-border_light text-text transition-all duration-300 hover:scale-105 hover:border-accent group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        variants={iconVariants}
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative"
      >
        <IconSVG />
      </motion.div>
    </motion.a>
  );
};


export default function Contact() {
  const [currentUrl, setCurrentUrl] = useState('');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <section id="contact" className="relative px-6 py-24 bg-background text-text overflow-hidden">
      <div className="container mx-auto relative z-10">
        <SectionHeader title="Get in Touch" />
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto bg-card p-8 rounded-xl shadow-smooth border border-border_light">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-3xl font-bold font-sans text-accent mb-6">Send a Message</h3>
            <form className="space-y-6" action="https://formsubmit.co/akifazherq@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="New message from Portfolio Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={currentUrl} />
              <input type="hidden" name="_resume_url" value="https://akifq.com/Akif-Qureshi-Resume.pdf" />
              <div>
                <label htmlFor="name" className="block text-gray-400 font-sans text-sm mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full p-3 rounded-lg bg-background border border-border_dark text-text font-sans focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 font-sans text-sm mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full p-3 rounded-lg bg-background border border-border_dark text-text font-sans focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 font-sans text-sm mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5} 
                  className="w-full p-3 rounded-lg bg-background border border-border_dark text-text font-sans focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-300 resize-y"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-300">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Socials & 3D Element */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-3xl font-bold font-sans text-secondary_accent mb-6">Find Me Online</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((link) => (
                <SocialIcon key={link.name} {...link} />
              ))}
            </div>
            
            {/* 3D Abstract Data Visualization */}
            <div className="w-64 h-64 lg:w-80 lg:h-80 relative rounded-xl overflow-hidden border border-border_light shadow-smooth">
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <AbstractDataVisualization />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
              </Canvas>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 