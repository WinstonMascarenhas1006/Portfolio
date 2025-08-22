'use client'

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-soft-peach text-deep-navy hover:bg-soft-peach/80",
        secondary:
          "border-transparent bg-slate-blue text-white hover:bg-slate-blue/80",
        destructive:
          "border-transparent bg-muted-crimson text-white hover:bg-muted-crimson/80",
        outline: "text-[#E0E0E0] border-slate-blue",
        success: "border-transparent bg-warm-sand text-deep-navy",
        warning: "border-transparent bg-soft-peach/80 text-deep-navy",
        info: "border-transparent bg-powder-blue/80 text-deep-navy",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
