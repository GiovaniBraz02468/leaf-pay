import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/icons/google-icon.svg";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserFormSchema, type UserForm } from "../lib/validation";
import { motion } from "framer-motion"
import { ANIM_VARIANTS_SYSTEM } from "@/shared/animations/variants";

export const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: UserForm) => {
    console.log("form:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 mt-5">
        <label htmlFor="email">E-mail</label>
        {errors.email && <p className="error">{errors.email.message}</p>}
        <input
          {...register("email")}
          id="email"
          type="email"
          placeholder="example@gmail.com"
          data-invalid={!!errors.email}
        />

        <label htmlFor="password">Senha</label>
        {errors.password && <p className="error">{errors.password.message}</p>}
        <div className="relative">
          <input
            {...register("password")}
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="jn8dd%FCT$bj123"
            autoComplete="off"
            data-invalid={!!errors.password}
          />

          <button
            type="button"
            className="absolute top-4.5 right-3 text-gray-600 cursor-pointer hover:text-primary"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          >
            {isPasswordVisible ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
          </button>
        </div>

        <Link to="/reset" className="text-end text-sm cursor-pointer hover:text-primary">
          Esqueci a senha
        </Link>

        <motion.button type="submit"
          variants={ANIM_VARIANTS_SYSTEM.buttons}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="btn-primary mt-6 cursor-pointer">
          Entrar
        </motion.button>
        <motion.button
          type="button"
          variants={ANIM_VARIANTS_SYSTEM.buttons}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="btn-secondary hover:bg-white hover:text-primary flex justify-center gap-5 cursor-pointer"
        >
          Entrar com o Google
          <img src={GoogleIcon} alt="google icon" className="w-5" />
        </motion.button>

        <Link to="/register" className="underline text-center mt-3 hover:text-primary">
          Não tem uma conta?
        </Link>
      </div>
    </form>
  );
};
