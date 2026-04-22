import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function VerifyCodePage() {
  return (
    <div className="flex flex-col text-center gap-5">
      <div className="flex gap-1">
        <FaCheckCircle className="text-primary text-2xl" />
        <p>Enviamos um código para seu e-mail para redefinir sua senha.</p>
      </div>

      <p>Insira o código de verificação</p>
      {/* TODO -> CRIAR O MODAL DO CÓDIGO */}

      <small>
        Não recebeu o código? <span className="text-primary">Reenvie.</span>
      </small>

      <Link to="/reset/new" className="btn-primary w-90 mx-auto">
        <button>enviar</button>
      </Link>
    </div>
  );
}
