import { Box } from "@mui/material";
import { FC, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context";

export const AuthLayout: FC = () => {
  const { session } = useContext(AuthContext);

  if (session) return <Navigate to="/dashboard" replace />;

  return (
    <>
      <main>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Outlet />
        </Box>
      </main>
    </>
  );
};
