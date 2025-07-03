"use client";

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const skills = [
  { name: 'HTML', level: 'Experienced', icon: 'code' },
  { name: 'CSS', level: 'Experienced', icon: 'palette' },
  { name: 'JavaScript', level: 'Intermediate', icon: 'command' },
  { name: 'Git', level: 'Intermediate', icon: 'git-branch' },
  { name: 'Java', level: 'Intermediate', icon: 'code' },
  { name: 'SQL', level: 'Experienced', icon: 'database' },
  { name: 'PostgreSQL', level: 'Experienced', icon: 'database' },
  { name: 'MongoDB', level: 'Intermediate', icon: 'database' },
  { name: 'Python', level: 'Intermediate', icon: 'code' },
  { name: 'React', level: 'Intermediate', icon: 'globe' },
  { name: 'Next.js', level: 'Intermediate', icon: 'globe' },
  { name: 'Tailwind CSS', level: 'Experienced', icon: 'palette' },
  { name: 'Node.js', level: 'Intermediate', icon: 'server' },
];

interface SkillCardProps {
  skill: { name: string; level: string; icon: string };
  index: number;
}

// Simplified and cleaner placeholder for dynamic icons.
const Icon = ({ name }: { name: string }) => {
  const baseClasses = "w-8 h-8 transition-colors duration-300";
  const colors = {
    code: "text-accent",
    palette: "text-secondary_accent",
    command: "text-accent",
    'git-branch': "text-secondary_accent",
    database: "text-accent",
    globe: "text-secondary_accent",
    server: "text-accent",
  };

  let IconSVG;
  switch (name) {
    case 'code':
      IconSVG = () => (
        <svg className={`${baseClasses} ${colors.code}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
      );
      break;
    case 'palette':
      IconSVG = () => (
        <svg className={`${baseClasses} ${colors.palette}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 3v1a2 2 0 01-2 2H9a2 2 0 01-2-2V3m6 6h.01M17 17H7" /></svg>
      );
      break;
    case 'command':
      IconSVG = () => (
        <svg className={`${baseClasses} ${colors.command}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3m0 0l3-3m-3 3v4m0 0a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h6a3 3 0 013 3v6" /></svg>
      );
      break;
    case 'git-branch':
      IconSVG = () => (
        <svg className={`${baseClasses} ${colors['git-branch']}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
      ); // Placeholder
      break;
    case 'database':
      IconSVG = () => (
        <svg className={`${baseClasses} ${colors.database}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10m0 0h16m-2-4h2m-2 4h2M4 7h16M4 7v4m0 0h16m0-4v4m0 4v4m0 0h-2m-14-4h-2m14 4h-2m-14 4h-2m16-4h-2M4 17h16M4 17v4m0 0h16" /></svg>
      );
      break;
    case 'globe':
      IconSVG = () => (
        <svg className={`${baseClasses} ${colors.globe}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 10h18M3 15h18M3 20h18M3 5v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2z" /></svg>
      ); // Placeholder
      break;
    case 'server':
      IconSVG = () => (
        <svg className={`${baseClasses} ${colors.server}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12v4m0-4h4m0-4H5m0 4h4m0-4h4m0-4H9m0 4h4m0-4h4m0-4H13m0 4h4m0-4h4" /></svg>
      ); // Placeholder
      break;
    default:
      IconSVG = () => (
        <svg className={`${baseClasses} text-gray-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m0 0H6" /></svg>
      ); // Default generic icon
  }
  return <IconSVG />;
};

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center p-6 border border-border_light rounded-xl bg-card shadow-smooth hover:shadow-card-hover transition-all duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: index * 0.05, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="mb-4 z-10">
        <Icon name={skill.icon} />
      </div>
      <h3 className="text-xl font-semibold font-sans text-text mb-2 z-10">{skill.name}</h3>
      <p className="text-gray-400 font-mono text-sm z-10">{skill.level}</p>
      {/* Subtle overlay effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 bg-background text-text overflow-hidden">
      <div className="container mx-auto relative z-10">
        <SectionHeader title="Skills & Expertise" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 