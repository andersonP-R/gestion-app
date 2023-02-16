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
import { FaRegCreditCard, FaRoute, FaTools, FaUsers } from "react-icons/fa";
import { AuthContext } from "../../context";

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

        <ListItemButton onClick={() => navigateTo("/dashboard/clients")}>
          <ListItemIcon>
            <FaUsers />
          </ListItemIcon>
          <ListItemText primary={"Clientes"} />
        </ListItemButton>

        <ListItemButton onClick={() => navigateTo("/dashboard/credits")}>
          <ListItemIcon>
            <FaRegCreditCard />
          </ListItemIcon>
          <ListItemText primary={"Creditos"} />
        </ListItemButton>

        <ListItemButton
          onClick={() => navigateTo("/dashboard/routes")}
          sx={{ mb: 2 }}
        >
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
              Administador
            </ListSubheader>
            <ListItemButton onClick={() => navigateTo("/dashboard/admin")}>
              <ListItemIcon>
                <FaTools />
              </ListItemIcon>
              <ListItemText primary={"Panel administrador"} />
            </ListItemButton>
          </>
        )}
      </List>
    </Box>
  );
};
