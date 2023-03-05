import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../components/layouts";
import { AuthGuard } from "../guards";
import {
  AdminPage,
  BasesAdminPage,
  ClientCreatePage,
  ClientEditPage,
  ClientPage,
  ClientSearchPage,
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
        <Route element={<AuthGuard />}>
          <Route path="/dashboard">
            <Route index element={<DashboardPage />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="credits" element={<CreditsPage />} />
            <Route path="routes" element={<RoutesPage />} />

            <Route path="clients/:id" element={<ClientPage />} />
            <Route path="clients/edit/:id" element={<ClientEditPage />} />
            <Route path="clients/create" element={<ClientCreatePage />} />
            <Route path="clients/search" element={<ClientSearchPage />} />

            {/* ADMIN SECTION - PRIVATE*/}
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
