import { Link, Outlet } from "react-router-dom";
import logo from "@/assets/icons/LOGO.svg";

export default function ResetPasswordLayout() {
  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="leafpay logo" />
        <Outlet />

        <div className="flex flex-col items-center gap-10">
          {/* LINHA PARA ESTILO */}
          <div className="divider"></div>
          <Link to="/register">
            <button className="btn-secondary w-90">cadastre-se</button>
          </Link>
        </div>
      </div> 
    </div>
  );
}
