import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ANIM_VARIANTS_SYSTEM } from "@/shared/animations/variants";

const MotionLink = motion(Link);

export default function ForgotPasswordPage() {
  return (
    <div className="text-center flex flex-col gap-5">
      <p>Digite seu endereço de e-mail cadastrado.</p>

      <form action="#" className="flex flex-col gap-6">
        <input type="email" placeholder="example@gmail.com" required />

        <MotionLink
          to="/reset/verify"
          variants={ANIM_VARIANTS_SYSTEM.buttons}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="btn-primary w-90 mx-auto flex items-center justify-center cursor-pointer border-none outline-none uppercase"
        >
          enviar
        </MotionLink>

      </form>
    </div >
  );
}
