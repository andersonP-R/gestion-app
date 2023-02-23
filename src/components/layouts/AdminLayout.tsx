import { FC, PropsWithChildren, useContext } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context";
import DashboardLayout from "./DashboardLayout";

interface Props {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
}

export const AdminLayout: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  icon,
}) => {
  const { user } = useContext(AuthContext);

  if (user?.role !== "admin") return <Navigate replace to="/dashboard" />;

  return (
    <DashboardLayout title="Ajustes generales">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: "1.5rem",
          gap: 1,
          mb: 1,
        }}
      >
        <Typography variant="subtitle1">{title}</Typography>
        {icon}
      </Box>

      <Divider sx={{ mb: 2 }} />
      <Box>{children}</Box>
    </DashboardLayout>
  );
};
