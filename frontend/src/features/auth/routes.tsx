import { Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/loginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordLayout from "./layouts/ResetPasswordLayout";
import VerifyCodePage from "./pages/VerifyCodePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

export const authRoutes = (
  <>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />

    <Route path="/reset" element={<ResetPasswordLayout />}>
      <Route index element={<ForgotPasswordPage />} />
      <Route path="verify" element={<VerifyCodePage />} />
      <Route path="new" element={<ResetPasswordPage />} />
    </Route>
  </>
);
