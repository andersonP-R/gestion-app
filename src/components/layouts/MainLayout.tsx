import { FC, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context";
import { Navbar } from "../ui";

export const MainLayout: FC = () => {
  const { session } = useContext(AuthContext);

  if (!session) return <Navigate to="/sign-in" />;

  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>{/* footer here! */}</footer>
    </>
  );
};
