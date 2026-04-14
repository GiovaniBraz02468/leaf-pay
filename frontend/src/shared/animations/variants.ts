export const ANIM_VARIANTS_SYSTEM = {
  buttons: {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 17,
      },
    },

    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 20,
      },
    },
  },

  openModals: {
    hidden: {},
    animate: {},
    exit: {},
  },

  closeModals: {
    hidden: {},
    animate: {},
    exit: {},
  },
} as const;
