import { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { AuthContext } from "../../context";

export const HomePage = () => {
  const { user, loadingUser } = useContext(AuthContext);

  // TODO: fix request url
  // const route = useParams();
  // console.log(route);

  return !user ? (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        sx={{
          width: 150,
          height: 150,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h1" sx={{ marginBottom: 2 }}>
            Bienvenido
          </Typography>

          {loadingUser ? (
            <CircularProgress thickness={2} />
          ) : (
            <Link to="/sign-in">
              <Button>Ingresar</Button>
            </Link>
          )}
        </Grid>
      </Grid>
    </Box>
  ) : (
    <Navigate replace to="/dashboard" />
  );
};
