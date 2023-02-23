import { FC, PropsWithChildren } from "react";
import { Box, Typography } from "@mui/material";
import { Navbar, SideMenu } from "../ui";
import "../../assets/css/main_layout.css";

interface Props {
  title: string;
  children: React.ReactNode;
}

const DashboardLayout: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <main className="main">
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <div className="aside">
          <SideMenu />
        </div>
      </Box>

      <div className="container">
        <nav className="navbar">
          <Navbar />
        </nav>
        <div className="title_dashboard_section">
          <Typography variant="h1">{title}</Typography>
        </div>

        <div className="outlet">{children}</div>
      </div>
      {/* <footer className="footer">
          <Typography variant="subtitle1">Gestion</Typography>
          <Typography variant="subtitle1">All rights reserve</Typography>
        </footer> */}
    </main>
  );
};

export default DashboardLayout;
