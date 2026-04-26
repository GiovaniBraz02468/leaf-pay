import { LoginForm } from "../components/LoginForm";
import logo from "@/assets/icons/LOGO.svg";
import { motion } from "framer-motion";
import { ANIM_VARIANTS_SYSTEM } from "@/shared/animations/variants";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "@/components/LanguageSwitch";

export const LoginPage = () => {
  const { t } = useTranslation("login");

  return (
    <main className="login-container">
      <div className="login-box">
        <span className="self-start -mb-5">
          <LanguageSwitch />
        </span>

        <div className="flex flex-col items-center justify-center gap-5">
          <motion.img
            variants={ANIM_VARIANTS_SYSTEM.logo}
            initial="initial"
            animate="animate"
            src={logo} alt="leafpay logo" />

          <h1>{t("signin.title")}</h1>
          <p>{t("login_text")}</p>
          {/* LINHA PARA ESTILO */}
          <motion.div
            variants={ANIM_VARIANTS_SYSTEM.textReveal}
            initial="hidden"
            animate="animate"
            className="divider">
          </motion.div>
        </div>

        {/* FORMULÁRIO */}
        <div className="flex items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </main >
  );
};
