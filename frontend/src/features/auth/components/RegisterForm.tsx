import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/icons/google-icon.svg";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserFormSchema, type UserForm } from "../lib/validation";

export const RegisterForm = () => {
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
          placeholder="johndoe@hotmail.com"
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
            className="absolute top-4.5 right-3 text-gray-600"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          >
            {isPasswordVisible ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
          </button>
        </div>

        <button type="submit" className="btn-primary mt-6">
          Entrar
        </button>
        <button
          type="button"
          className="btn-secondary flex justify-center gap-5"
        >
          Entrar com o Google
          <img src={GoogleIcon} alt="google icon" className="w-5" />
        </button>

        <Link to="/login" className="underline text-center mt-3">
          Já tem uma conta?
        </Link>
      </div>
    </form>
  );
};
