import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context";

export const AdminLayout = () => {
  const { user } = useContext(AuthContext);

  if (user?.role !== "admin") return <Navigate replace to="/dashboard" />;

  return (
    <Box>
      <Typography variant="h1" sx={{ mb: 2 }}>
        Ajustes generales
      </Typography>
      <>
        <Outlet />
      </>
    </Box>
  );
};
