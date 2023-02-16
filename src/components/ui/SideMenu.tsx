import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { FaRegCreditCard, FaRoute, FaUsers, FaWrench } from "react-icons/fa";
import { AuthContext } from "../../context";
import { Typography } from "@mui/material";

export const SideMenu: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const navigateTo = (url: string) => {
    navigate(url);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <List sx={{ fontSize: "1.8rem" }}>
        <ListSubheader
          sx={{ backgroundColor: "#ddd", fontSize: "1.2rem", mb: 1 }}
        >
          General
        </ListSubheader>

        <Divider sx={{ mb: 2 }} />

        <ListItemButton onClick={() => navigateTo("/clients")}>
          <ListItemIcon>
            <FaUsers />
          </ListItemIcon>
          <ListItemText primary={"Clientes"} />
        </ListItemButton>

        <ListItemButton onClick={() => navigateTo("/credits")}>
          <ListItemIcon>
            <FaRegCreditCard />
          </ListItemIcon>
          <ListItemText primary={"Creditos"} />
        </ListItemButton>

        <ListItemButton onClick={() => navigateTo("/routes")} sx={{ mb: 2 }}>
          <ListItemIcon>
            <FaRoute />
          </ListItemIcon>
          <ListItemText primary={"Rutas"} />
        </ListItemButton>

        {user?.role === "admin" && (
          <>
            <Divider sx={{ mt: 3 }} />
            <ListSubheader
              sx={{ backgroundColor: "#ddd", fontSize: "1.2rem", mb: 1 }}
            >
              Admin panel
            </ListSubheader>
            <ListItemButton onClick={() => navigateTo("/admin")}>
              <ListItemIcon>
                <FaWrench />
              </ListItemIcon>
              <ListItemText primary={"Admin panel"} />
            </ListItemButton>
          </>
        )}
      </List>
    </Box>
  );
};
