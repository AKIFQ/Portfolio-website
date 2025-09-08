"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [currentUrl, setCurrentUrl] = useState('');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AKIFQ',
      icon: Github
    },
    {
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/akifqureshi/',
      icon: Linkedin
    },
    {
      name: 'Email',
      url: 'mailto:akifazherq@gmail.com',
      icon: Mail
    }
  ];

  return (
    <section id="contact" className="py-32 bg-background text-text-primary">
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
            Get in Touch
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Let's discuss your next project or just say hello. I'm always open to interesting conversations and new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl">
          {/* Contact Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6" action="https://formsubmit.co/akifazherq@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="New message from Portfolio Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={currentUrl} />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-text-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-text-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5} 
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-text-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-y"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="inline-flex items-center px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Quick Contact */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">
                Let's Connect
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-text-secondary">
                  I'm currently available for freelance projects and full-time opportunities.
                </p>
                <div className="flex flex-col gap-3">
                  <a 
                    href="mailto:akifazherq@gmail.com"
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    akifazherq@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">
                Find Me Online
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-border rounded-lg text-text-secondary hover:text-accent hover:border-accent transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                <span className="text-sm font-medium text-accent">Usually responds within 24 hours</span>
              </div>
              <p className="text-sm text-text-secondary">
                I check my messages regularly and will get back to you as soon as possible.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 