import React from 'react'
import { cn } from '../../lib/utils'
import { Slot } from '@radix-ui/react-slot'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'glass' | 'outline' | 'ghost' | 'glow'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    
    const variants = {
      default: 'bg-accent text-white hover:bg-accent/90 shadow-lg hover:shadow-xl',
      glass: 'bg-glass border border-border backdrop-blur-md hover:bg-glass-light hover:border-border-light',
      outline: 'border border-border hover:bg-glass hover:border-border-light',
      ghost: 'hover:bg-glass hover:text-text-primary',
      glow: 'bg-accent text-white shadow-glow hover:shadow-glow-lg hover:scale-105'
    }

    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-6 text-lg',
      xl: 'h-14 px-8 text-xl'
    }

    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
