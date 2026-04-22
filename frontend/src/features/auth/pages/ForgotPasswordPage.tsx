import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  return (
    <div className="text-center flex flex-col gap-5">
      <p>Digite seu endereço de e-mail cadastrado.</p>

      <form action="#" className="flex flex-col gap-6">
        <input type="email" placeholder="johndoe@hotmail.com" required />

        <Link to="/reset/verify" className="btn-primary w-90">
          <button>enviar</button>
        </Link>
      </form>
    </div>
  );
}
