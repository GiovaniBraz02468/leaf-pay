import { Link } from "react-router-dom";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { motion } from "framer-motion";
import { ANIM_VARIANTS_SYSTEM } from "@/shared/animations/variants";

const MotionLink = motion(Link);

export default function VerifyCodePage() {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <div className="flex gap-1">
        <p>Enviamos um código para seu e-mail para redefinir sua senha.</p>
      </div>

      <p>Insira o código de verificação</p>
      <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS} className="cursor-pointer" >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>

      <small >
        Não recebeu o código? <span className="hover:text-primary cursor-pointer">Reenvie.</span>
      </small>

      <MotionLink
        to="/reset/new"
        variants={ANIM_VARIANTS_SYSTEM.buttons}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="btn-primary w-90 mx-auto flex items-center justify-center cursor-pointer border-none outline-none uppercase"
      >
        enviar
      </MotionLink>
    </div>
  );
}
