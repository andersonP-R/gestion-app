import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../ui";

export const MainLayout: FC = () => {
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
