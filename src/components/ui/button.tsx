'use client'

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-soft-peach text-deep-navy hover:bg-soft-peach/90 border border-soft-peach/50",
        destructive:
          "bg-muted-crimson text-white hover:bg-muted-crimson/90 border border-muted-crimson/50",
        outline:
          "border border-powder-blue bg-transparent text-powder-blue hover:bg-powder-blue hover:text-deep-navy",
        secondary:
          "bg-slate-blue text-white hover:bg-slate-blue/80 border border-slate-blue/50",
        ghost: "hover:bg-slate-blue/20 hover:text-white text-[#E0E0E0]",
        link: "text-powder-blue underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-[#FF8C42] to-[#FF5E78] text-white hover:from-[#FF8C42]/90 hover:to-[#FF5E78]/90 border border-[#FF8C42]/30",
        soft: "bg-warm-sand text-deep-navy border border-warm-sand/50 hover:bg-warm-sand/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  // Framer Motion props (optional)
  initial?: any
  animate?: any
  exit?: any
  variants?: any
  transition?: any
  whileHover?: any
  whileTap?: any
  whileFocus?: any
  whileDrag?: any
  whileInView?: any
  layout?: any
  layoutId?: any
  layoutDependency?: any
  layoutScroll?: any
  layoutRoot?: any
  drag?: any
  dragConstraints?: any
  dragElastic?: any
  dragMomentum?: any
  dragPropagation?: any
  dragSnapToOrigin?: any
  dragTransition?: any
  onDrag?: any
  onDragStart?: any
  onDragEnd?: any
  onDragTransition?: any
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Filter out Framer Motion props to prevent them from being passed to DOM elements
    const {
      initial,
      animate,
      exit,
      variants,
      transition,
      whileHover,
      whileTap,
      whileFocus,
      whileDrag,
      whileInView,
      layout,
      layoutId,
      layoutDependency,
      layoutScroll,
      layoutRoot,
      drag,
      dragConstraints,
      dragElastic,
      dragMomentum,
      dragPropagation,
      dragSnapToOrigin,
      dragTransition,
      onDrag,
      onDragStart,
      onDragEnd,
      onDragTransition,
      ...domProps
    } = props

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...domProps}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
