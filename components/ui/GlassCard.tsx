import React from 'react'
import { cn } from '../../lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'subtle'
  hover?: boolean
  glow?: boolean
}

export function GlassCard({ 
  children, 
  className, 
  variant = 'default',
  hover = true,
  glow = false,
  ...props 
}: GlassCardProps) {
  const variants = {
    default: 'bg-glass border border-border',
    elevated: 'bg-glass-light border border-border-light',
    subtle: 'bg-glass-dark border border-border-dark'
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl backdrop-blur-md transition-all duration-300',
        variants[variant],
        hover && 'hover:bg-glass-light hover:border-border-light hover:scale-[1.02]',
        glow && 'shadow-glow hover:shadow-glow-lg',
        className
      )}
      {...props}
    >
      {/* Glass gradient overlay */}
      <div className="absolute inset-0 bg-glass-gradient opacity-50" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shimmer effect */}
      {hover && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 hover:translate-x-full hover:opacity-100" />
      )}
    </div>
  )
}
