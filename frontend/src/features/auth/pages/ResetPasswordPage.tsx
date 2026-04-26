import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordSchema } from "../lib/validation";
import { motion } from "framer-motion";
import { ANIM_VARIANTS_SYSTEM } from "@/shared/animations/variants";
import { useTranslation } from "react-i18next";

type ResetPassword = z.infer<typeof ResetPasswordSchema>;

export default function ResetPasswordPage() {
  const { t } = useTranslation("passwordReset");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPassword>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const onSubmit = (data: ResetPassword) => {
    console.log("nova senha:", data);
  };

  return (
    <div>
      <h1 className="text-center mb-5">{t("passwordReset.title")}</h1>

      <form
        className="flex flex-col gap-5 py-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="new-password">{t("passwordReset.newPassword")}</label>
        {errors.password && <p className="error">{errors.password.message}</p>}
        <div className="relative">
          <input
            {...register("password")}
            id="new-password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="jn8dd%FCT$bj123"
            autoComplete="off"
            data-invalid={!!errors.password}
          />

          <button
            type="button"
            className="absolute top-4.5 right-3 text-gray-600 hover:text-primary cursor-pointer"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          >
            {isPasswordVisible ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
          </button>
        </div>

        <motion.button
          variants={ANIM_VARIANTS_SYSTEM.buttons}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="btn-primary cursor-pointer"
        >
          {t("passwordReset.reset_button")}
        </motion.button>
      </form>
    </div>
  );
}
