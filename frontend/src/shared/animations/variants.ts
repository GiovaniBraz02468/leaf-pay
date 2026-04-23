import type { Variants } from "framer-motion";

export const ANIM_VARIANTS_SYSTEM = {
  global: {
    initial: { opacity: 0 },
  },

  buttons: {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        mass: 0.1,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
      },
    },
  } as Variants,

  containerLogin: {
    hidden: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  } as Variants,

  logo: {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },

  textReveal: {
    hidden: {
      clipPath: "inset(0 50% 0 50%)",
      opacity: 0,
    },
    animate: {
      clipPath: "inset(0 0% 0 0%)",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  } as Variants,

  openModals: {
    hidden: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  } as Variants,

  closeModals: {
    hidden: { opacity: 1, scale: 1 },
    animate: { opacity: 0, scale: 0.9 },
    exit: { opacity: 0, scale: 0.9 },
  } as Variants,
};
