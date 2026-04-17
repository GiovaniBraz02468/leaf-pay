import { LoginForm } from "../components/LoginForm";
import logo from "@/assets/icons/LOGO.svg";

const RegisterPage = () => {
  return (
    <main className="login-container">
      <div className="login-box">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={logo} alt="leafpay logo" />
          <h1>Criar conta</h1>
          <p>Preencha com suas informações abaixo</p>
          {/* LINHA PARA ESTILO */}
          <div className="divider"></div>
        </div>

        {/* FORMULÁRIO */}
        <div className="flex items-center justify-center">
          {/* CRIAR REGISTERFORM */}
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
