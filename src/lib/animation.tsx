'use client';

import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';

// Animation variants for consistent animations
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 }
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 }
};

export const fadeInFromLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideInFromTop: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 }
};

export const slideInFromBottom: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 }
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 }
};

// Smooth transitions
export const smoothTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94]
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

export const bounceTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 10
};

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: springTransition
};

export const hoverLift = {
  whileHover: { 
    y: -8,
    transition: { duration: 0.2 }
  },
  transition: springTransition
};

export const hoverGlow = {
  whileHover: { 
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 }
  },
  transition: springTransition
};

// Re-export framer-motion components
export { motion, AnimatePresence };

// Custom motion components with consistent variants
export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionButton = motion.button;
export const MotionImg = motion.img;
export const MotionCard = motion.div;
export const MotionNav = motion.nav;
export const MotionFooter = motion.footer;
