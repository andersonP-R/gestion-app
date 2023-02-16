import { FC, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { AuthContext } from "../../context";
import { Navbar, SideMenu } from "../ui";
import "../../assets/css/main_layout.css";

export const MainLayout: FC = () => {
  const { session, loading } = useContext(AuthContext);

  // if (!session) return <Navigate to="/sign-in" />;
  if (loading) {
    return <h1>Cargando</h1>;
  } else {
    return (
      <>
        {session ? (
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

            <footer className="footer">footer</footer>
          </>
        ) : (
          <Navigate to="/sign-in" />
        )}
      </>
    );
  }
};
