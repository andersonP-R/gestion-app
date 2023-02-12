import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
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
          <Link to="/sign-in">
            <Button>Ingresar</Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
