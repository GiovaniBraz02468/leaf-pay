import { LoginForm } from "../components/LoginForm";
// import logo from '@/assets/logo/logo.png';

export const LoginPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LADO ESQUERDO */}
      <div className="hidden md:flex flex-col justify-center items-center bg-primary text-white p-8">
        <h1 className="text-3xl font-bold font-title">LeafPay</h1>

        <p className="text-sm mt-2 text-center max-w-xs">
          Organize sua vida financeira de forma simples
        </p>
      </div>

      {/* LADO DIREITO */}
      <div className="flex items-center justify-center bg-background p-6">
        <LoginForm />
      </div>
    </div>
  );
};
