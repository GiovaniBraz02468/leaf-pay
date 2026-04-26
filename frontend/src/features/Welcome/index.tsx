import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/icons/LOGO.svg";
import { useEffect, useState } from "react";
import { ANIM_VARIANTS_SYSTEM } from "@/shared/animations/variants";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "@/components/LanguageSwitch";

export const WelcomePage = () => {
  const { t } = useTranslation("initial");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPaused(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        variants={ANIM_VARIANTS_SYSTEM.containerLogin}
        initial="hidden"
        animate="animate"
      >
        <motion.div
          className="absolute inset-0 bg-animated-gradient"
          animate={{ opacity: isPaused ? 0 : 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute inset-0 bg-static"
          variants={ANIM_VARIANTS_SYSTEM.global}
          initial="initial"
          animate={{ opacity: isPaused ? 1 : 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 bg-black/5" />

        <motion.div className="backdrop-blur-md bg-white/70 p-8 rounded-2xl shadow-lg w-full max-w-sm border border-white/40 relative z-10">
          <div className="absolute -top-13 right-37">
            <LanguageSwitch />
          </div>

          <motion.div className="flex justify-center mb-4">
            <motion.img
              src={logo}
              alt="LeafPay Logo"
              className="w-16 h-16 object-contain"
              variants={ANIM_VARIANTS_SYSTEM.logo}
              initial="initial"
              animate="animate"
            />
          </motion.div>

          <motion.div
            variants={ANIM_VARIANTS_SYSTEM.containerLogin}
            initial="hidden"
            animate="animate"
            className="flex flex-col gap-4 text-center"
          >
            <motion.h1
              className="text-2xl font-semibold text-[#041C0F] whitespace-nowrap"
              variants={ANIM_VARIANTS_SYSTEM.textReveal}
            >
              {t("initial.initial_title")}
            </motion.h1>

            <motion.p
              className="text-sm text-gray-500 whitespace-nowrap"
              variants={ANIM_VARIANTS_SYSTEM.textReveal}
            >
              {t("initial.initial_text")}
            </motion.p>
          </motion.div>

          <motion.div className="mt-6">
            <Link to="/login">
              <motion.button
                variants={ANIM_VARIANTS_SYSTEM.buttons}
                className="w-full bg-[#20A637] text-white py-2 rounded-lg font-medium 
                         transition-all duration-300 shadow-[0_0_0px_rgba(32,166,55,0.0)]
                         hover:shadow-[0_0_20px_rgba(32,166,55,0.5)] cursor-pointer"
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                {t("initial.initial_button")}
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
