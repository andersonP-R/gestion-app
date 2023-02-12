import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthLayout, MainLayout } from "../components/layouts";
import { DashboardPage } from "../pages/DashboardPage";
import { HomePage } from "../pages/HomePage";
import { SignInPage } from "../pages/SignInPage";
import { SignUpPage } from "../pages/SignUpPage";

export const Routing = () => {
  return (
    <BrowserRouter>
      {/* ---------------------------------- routes --------------------------------------- */}

      <Routes>
        {/* home page */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<HomePage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>

        {/* dashboard page */}
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>

      {/* --------------------------------- end routes ------------------------------------ */}
    </BrowserRouter>
  );
};
