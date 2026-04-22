import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '@/assets/icons/LOGO.svg';
import { useEffect, useState } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const WelcomePage = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPaused(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* BACKGROUND ANIMADO */}
      <motion.div
        className="absolute inset-0 bg-animated-gradient"
        animate={{ opacity: isPaused ? 0 : 1 }}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
      />

      {/* BACKGROUND ESTÁTICO */}
      <motion.div
        className="absolute inset-0 bg-static"
        initial={{ opacity: 0 }}
        animate={{ opacity: isPaused ? 1 : 0 }}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* CARD */}
      <motion.div
        className="backdrop-blur-md bg-white/70 p-8 rounded-2xl 
                   shadow-lg w-full max-w-sm border border-white/40 relative z-10"
      >
        {/* LOGO */}
        <motion.div
          custom={0}
          variants={item}
          initial="hidden"
          animate="show"
          className="flex justify-center mb-4"
        >
          <motion.img
            src={logo}
            alt="LeafPay Logo"
            className="w-16 h-16 object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* TEXTO */}
        <motion.div
          custom={1}
          variants={item}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 text-center"
        >
          <h1 className="text-2xl font-semibold text-[#041C0F]">
            Welcome to LeafPay
          </h1>

          <p className="text-sm text-gray-500">
            Organize sua vida financeira de forma simples
          </p>
        </motion.div>

        {/* BOTÃO */}
        <motion.div
          custom={2}
          variants={item}
          initial="hidden"
          animate="show"
          className="mt-6"
        >
          <Link to="/login">
            <motion.button
              className="w-full bg-[#20A637] text-white py-2 rounded-lg font-medium 
                         transition-all duration-300
                         shadow-[0_0_0px_rgba(32,166,55,0.0)]
                         hover:shadow-[0_0_20px_rgba(32,166,55,0.5)]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Fazer login
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
