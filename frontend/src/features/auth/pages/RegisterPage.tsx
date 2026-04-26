import logo from "@/assets/icons/LOGO.svg";
import { RegisterForm } from "../components/RegisterForm";
import { motion } from "framer-motion";
import { ANIM_VARIANTS_SYSTEM } from "@/shared/animations/variants";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const { t } = useTranslation("auth");

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
            src={logo}
            alt="leafpay logo"
          />

          <h1>{t("signup.title")}</h1>
          <p>{t("login_text")}</p>

          {/* LINHA PARA ESTILO */}
          <motion.div
            variants={ANIM_VARIANTS_SYSTEM.textReveal}
            initial="hidden"
            animate="animate"
            className="divider"
          ></motion.div>
        </div>

        {/* FORMULÁRIO */}
        <div className="flex items-center justify-center">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
