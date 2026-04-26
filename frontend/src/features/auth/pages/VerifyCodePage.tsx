import { Link } from "react-router-dom";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { motion } from "framer-motion";
import { ANIM_VARIANTS_SYSTEM } from "@/shared/animations/variants";
import { useTranslation } from "react-i18next";

const MotionLink = motion(Link);

export default function VerifyCodePage() {
  const { t } = useTranslation("passwordReset");

  return (
    <div className="flex flex-col items-center text-center gap-5">
      <div className="flex gap-1">
        <p>{t("verifyCode.text")}</p>
      </div>

      <p>{t("verifyCode.description")}</p>
      <InputOTP
        maxLength={4}
        pattern={REGEXP_ONLY_DIGITS}
        className="cursor-pointer"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>

      <small>
        {t("verifyCode.noReceive")}{" "}
        <span className="text-primary cursor-pointer hover:underline">
          {t("verifyCode.resend_button")}
        </span>
      </small>

      <MotionLink
        to="/reset/new"
        variants={ANIM_VARIANTS_SYSTEM.buttons}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="btn-primary w-90 mx-auto flex items-center justify-center cursor-pointer border-none outline-none uppercase"
      >
        {t("sendButton")}
      </MotionLink>
    </div>
  );
}
