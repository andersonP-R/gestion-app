import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
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
