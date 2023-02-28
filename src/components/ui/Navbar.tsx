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
import { FaBars, FaSignOutAlt } from "react-icons/fa";

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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src="/src/assets/images/default-avatar.png"
              alt="img"
              width={45}
              height={45}
            />
          </Box>
        </NavLink>

        <Box sx={{ ml: 2 }}>
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
