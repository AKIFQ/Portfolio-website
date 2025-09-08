import React from 'react'
import { cn } from '../../lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center' | 'right'
}

export function SectionHeader({ 
  title, 
  subtitle, 
  className,
  align = 'center' 
}: SectionHeaderProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <div className={cn('mb-16', alignments[align], className)}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 bg-gradient-to-r from-text-primary via-accent to-accent-secondary bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      
      {/* Decorative line */}
      <div className="mt-8 flex items-center justify-center">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="mx-4 h-2 w-2 rounded-full bg-accent animate-pulse" />
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>
    </div>
  )
}
