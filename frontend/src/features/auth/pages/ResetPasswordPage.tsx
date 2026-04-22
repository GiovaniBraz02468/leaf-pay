import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ResetPasswordPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <div>
      <h1 className="text-center mb-5">Redefinição de senha</h1>

      <form action="#" className="flex flex-col gap-5 py-5">
        <label htmlFor="new-password">Digite sua nova senha</label>
        <div className="relative">
          <input
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="jn8dd%FCT$bj123"
            autoComplete="off"
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

        <button className="btn-primary">redefinir senha</button>
      </form>
    </div>
  );
}
