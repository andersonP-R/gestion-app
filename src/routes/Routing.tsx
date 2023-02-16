import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AdminLayout, AuthLayout, MainLayout } from "../components/layouts";
import {
  AdminPage,
  BasesAdminPage,
  ClientsPage,
  CreditsPage,
  DashboardPage,
  RoutesAdminPage,
  RoutesPage,
  UsersAdminPage,
} from "../pages/private-pages";
import { HomePage, SignInPage, SignUpPage } from "../pages/public-pages";

export const Routing = () => {
  return (
    <BrowserRouter>
      {/* ---------------------------------- routes --------------------------------------- */}

      <Routes>
        {/* HOME SECTION - PUBLIC*/}
        <Route path="/" element={<HomePage />} />

        <Route path="/" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>

        {/* DASHBOARD SECTION - PRIVATE*/}
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="credits" element={<CreditsPage />} />
          <Route path="routes" element={<RoutesPage />} />

          {/* ADMIN PANEL SECTION - PRIVATE*/}
          <Route element={<AdminLayout />}>
            <Route path="admin" element={<AdminPage />} />
            <Route path="admin/bases" element={<BasesAdminPage />} />
            <Route path="admin/routes" element={<RoutesAdminPage />} />
            <Route path="admin/users" element={<UsersAdminPage />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>

      {/* --------------------------------- end routes ------------------------------------ */}
    </BrowserRouter>
  );
};
