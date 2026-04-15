import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authRoutes } from "./features/auth/routes";
import { WelcomePage } from "./features/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        {authRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
