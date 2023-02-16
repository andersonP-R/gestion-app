import { Box, Grid, Switch, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const UsersAdminPage = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    // TODO: guardar el estado del boton en db para evitar que se reinicie en cada render
  };

  return (
    <Grid item>
      <Box
        sx={{
          height: "80px",
          width: "230px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography>Permitir registros</Typography>
        <Switch
          checked={checked}
          onChange={handleChecked}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Box>
    </Grid>
  );
};
