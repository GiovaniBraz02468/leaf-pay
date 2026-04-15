import { Link } from "react-router-dom";

export const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-50 text-xl gap-5">
      <h1>Welcome to LeafPay</h1>
      <Link
        to="/login"
        className="bg-primary text-white p-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Fazer login
      </Link>
    </div>
  );
};
