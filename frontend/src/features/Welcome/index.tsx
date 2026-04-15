import { Link } from "react-router-dom";

export const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-50 text-xl gap-5 text-center">
      <div>
        <h1>Welcome to LeafPay</h1>
        <p className="text-sm mt-2 text-center max-w-xs">
          Organize sua vida financeira de forma simples
        </p>
      </div>
      <Link
        to="/login"
        className="btn-primary"
      >
        <button>Fazer login</button>
      </Link>
    </div>
  );
};
