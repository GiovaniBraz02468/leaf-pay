import { Link, Outlet } from "react-router-dom";
import logo from "@/assets/icons/LOGO.svg";
import { motion } from "framer-motion";
import { ANIM_VARIANTS_SYSTEM } from "@/shared/animations/variants";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useTranslation } from "react-i18next";

export default function ResetPasswordLayout() {
  const { t } = useTranslation("passwordReset");

  return (
    <div className="login-container">
      <div className="login-box">
        <span className="self-start -mb-5">
          <LanguageSwitch />
        </span>

        <motion.img
          variants={ANIM_VARIANTS_SYSTEM.logo}
          initial="initial"
          animate="animate"
          src={logo}
          alt="leafpay logo"
        />
        <Outlet />

        <div className="flex flex-col items-center gap-10">
          {/* LINHA PARA ESTILO */}
          <motion.div
            variants={ANIM_VARIANTS_SYSTEM.textReveal}
            initial="hidden"
            animate="animate"
            className="divider"
          ></motion.div>
          <Link to="/register">
            <motion.button
              variants={ANIM_VARIANTS_SYSTEM.buttons}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="btn-secondary w-90 cursor-pointer"
            >
              {t("register_button")}
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
