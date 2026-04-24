import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function VerifyCodePage() {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <div className="flex gap-1">
        <FaCheckCircle className="text-primary text-2xl" />
        <p>Enviamos um código para seu e-mail para redefinir sua senha.</p>
      </div>

      <p>Insira o código de verificação</p>
      <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS} className="" >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>

      <small>
        Não recebeu o código? <span className="text-primary">Reenvie.</span>
      </small>

      <Link to="/reset/new" className="btn-primary w-90 mx-auto">
        <button>enviar</button>
      </Link>
    </div>
  );
}
