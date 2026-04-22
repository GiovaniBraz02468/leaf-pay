import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/icons/google-icon.svg";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    // TODO -> VALIDAR OS INPUTS
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 mt-5">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="johndoe@hotmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Senha</label>
        <div className="relative">
          <input
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="jn8dd%FCT$bj123"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
