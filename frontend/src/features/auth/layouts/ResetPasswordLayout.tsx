import { Link, Outlet } from "react-router-dom";
import logo from "@/assets/icons/LOGO.svg";
import { motion } from "framer-motion";
import { ANIM_VARIANTS_SYSTEM } from "@/shared/animations/variants";

export default function ResetPasswordLayout() {
  return (
    <div className="login-container">
      <div className="login-box">
        <motion.img
          variants={ANIM_VARIANTS_SYSTEM.logo}
          initial="initial"
          animate="animate"
          src={logo} alt="leafpay logo" />
        <Outlet />

        <div className="flex flex-col items-center gap-10">
          {/* LINHA PARA ESTILO */}
          <motion.div
            variants={ANIM_VARIANTS_SYSTEM.textReveal}
            initial="hidden"
            animate="animate"
            className="divider">
          </motion.div>
          <Link to="/register">
            <motion.button
              variants={ANIM_VARIANTS_SYSTEM.buttons}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="btn-secondary w-90 cursor-pointer">cadastre-se</motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
