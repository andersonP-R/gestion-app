import { FC, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { AuthContext } from "../../context";
import { Navbar, SideMenu } from "../ui";
import { useSession } from "../../hooks";
import "../../assets/css/main_layout.css";

const MainLayout: FC = () => {
  const { user } = useContext(AuthContext);
  // const { isAuth } = useSession();

  // if (!isAuth) return <Navigate replace to="/sign-in" />;
  if (!user) return <Navigate replace to="/sign-in" />;

  return (
    <>
      <nav className="navbar">
        <Navbar />
      </nav>

      <main className="container">
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <div className="aside">
            <SideMenu />
          </div>
        </Box>

        <div className="outlet">
          <Outlet />
        </div>
      </main>

      {/* <footer className="footer">footer</footer> */}
    </>
  );
};

export default MainLayout;
