import { NavLink } from "react-router-dom";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  return (
    <AppBar sx={{ height: "65px", display: "flex", justifyContent: "center" }}>
      <Toolbar>
        <NavLink to="/">
          <Button variant="outlined">Inicio</Button>
        </NavLink>

        <Box flex={1} />

        <Box flex={1} />

        {/* <IconButton onClick={toggleSideMenu} sx={{ color: "#000" }}>
          <FaBars />
        </IconButton> */}
        <IconButton sx={{ color: "#000" }}>
          <FaBars />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
