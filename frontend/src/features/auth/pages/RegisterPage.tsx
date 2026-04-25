import logo from "@/assets/icons/LOGO.svg";
import { RegisterForm } from "../components/RegisterForm";
import { motion } from "framer-motion"
import { ANIM_VARIANTS_SYSTEM } from "@/shared/animations/variants";

const RegisterPage = () => {
  return (
    <main className="login-container">
      <div className="login-box">
        <div className="flex flex-col items-center justify-center gap-5">
          <motion.img
            variants={ANIM_VARIANTS_SYSTEM.logo}
            initial="initial"
            animate="animate"
            src={logo} alt="leafpay logo" />

          <h1>Criar conta</h1>
          <p>Preencha com suas informações abaixo</p>
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
          <RegisterForm />
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
