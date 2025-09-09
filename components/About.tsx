"use client";

import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Code2,
      title: 'AI Safety Research',
      description: 'Analyzing 50,000+ neural activations to detect manipulative reasoning patterns in language models before they reach users.'
    },
    {
      icon: Lightbulb,
      title: 'Production Reliability',
      description: 'Architecting fault-tolerant systems that maintain 95% uptime while processing concurrent AI conversations.'
    },
    {
      icon: Users,
      title: 'Emerging Problems',
      description: 'Building tools for challenges that don\'t exist yet—like version control for AI-generated code and collaborative human-AI interfaces.'
    },
    {
      icon: Zap,
      title: 'Performance Under Pressure',
      description: 'Optimizing WebSocket architectures, distributed processing, and real-time systems that handle actual user load.'
    }
  ];

  return (
    <section id="about" className="py-32 bg-background text-text-primary relative z-10">
      <div className="container mx-auto px-8 md:px-40">
        {/* Section Header */}
        <motion.div
          className="max-w-4xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 text-white">
            About Me
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            I build AI systems that work reliably in production and analyze them to make sure they're safe. 
            Currently finishing my Master's at Pace University while shipping platforms like PATIO AI and building tools for AI safety.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                className="group p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="mb-6">
                  <IconComponent className="w-8 h-8 text-accent group-hover:text-accent/80 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Background/Bio */}
        <motion.div
          className="mt-32 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
            My Story
          </h3>
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              My path started with a problem: how do you review AI generated code before it breaks something important? 
              That question led to SAV, a staging system for AI code that's now used at Pace University's AI Lab.
            </p>
            <p>
              Then I wondered about real time collaboration with AI models, which became PATIO AI a platform where 
              multiple users can have conversations with different AI models simultaneously. The technical challenge of 
              managing streaming responses across WebSocket connections while maintaining conversation state taught me 
              what production AI systems actually require.
            </p>
            <p>
              Teaching 700+ students programming concepts while building these systems showed me how to explain complex 
              technical decisions clearly. But the real learning happened when I started analyzing AI model behavior 
              directly mapping emotional and manipulative patterns in neural activations to understand how these systems actually reason.
            </p>
            <p>
              Currently completing my Master's in Computer Science at Pace University (3.91 GPA) with a Bachelor's in 
              IT Engineering from Nawab Shah Alam Khan College (3.8 GPA). Based in New York, building the future of AI safety.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 