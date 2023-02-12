import { Box } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FC = () => {
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
