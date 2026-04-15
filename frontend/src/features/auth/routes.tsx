import { Route } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import RegisterPage from "./pages/RegisterPage";

export const authRoutes = (
  <>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </>
);
