"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

type Variant = 'primary' | 'secondary';

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  target?: string;
}

export default function ButtonLink({ href, children, variant = 'secondary', target }: Props) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-accent text-background hover:bg-secondary_accent hover:shadow-card-hover',
    secondary: 'bg-transparent text-accent border border-accent hover:bg-accent hover:text-background hover:shadow-card-hover',
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`} target={target}>
        {children}
      </Link>
    </motion.div>
  );
} 