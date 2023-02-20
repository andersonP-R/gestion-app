import { FC, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { AuthContext } from "../../context";
import { useSession } from "../../hooks";

const AuthLayout: FC = () => {
  const { user } = useContext(AuthContext);
  // const { isAuth } = useSession();

  if (user) return <Navigate replace to="/dashboard" />;

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

export default AuthLayout;
