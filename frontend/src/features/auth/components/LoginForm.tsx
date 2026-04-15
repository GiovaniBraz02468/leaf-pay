import { useState } from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
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
        <input
          id="password"
          type="password"
          placeholder="jn8dd%FCT$bj123"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="text-end text-sm cursor-pointer">Esqueci a senha</p>

        <button type="submit" className="btn-primary mt-6">
          Entrar
        </button>
        <button type="button" className="btn-secondary">
          Entrar com o Google
        </button>

        <Link to="/register" className="underline text-center mt-3">
          Não tem uma conta?
        </Link>
      </div>
    </form>
  );
};
