import { FC, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { FaBars, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

export const Navbar: FC = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <AppBar
      sx={{
        height: "80px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Toolbar>
        <NavLink to="/">
          <Box sx={{ fontSize: "2rem", pt: 1, color: "#0d3ca0" }}>
            <FaUserCircle />
          </Box>
        </NavLink>

        <Box sx={{ ml: 1 }}>
          <Typography variant="subtitle1" color="#000">
            {user?.name}
          </Typography>
        </Box>

        <Box flex={1} />

        <Box flex={1} />

        {/* <IconButton onClick={toggleSideMenu} sx={{ color: "#000" }}>
          <FaBars />
        </IconButton> */}
        <IconButton sx={{ display: { xs: "flex", sm: "none" }, color: "#000" }}>
          <FaBars />
        </IconButton>

        <IconButton sx={{ color: "#000" }} onClick={handleLogout}>
          <Typography marginRight={1}>Salir</Typography>
          <FaSignOutAlt />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
