import { Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/loginPage";

export const authRoutes = (
  <>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </>
);
