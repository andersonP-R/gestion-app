import { FC, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FaTimesCircle } from "react-icons/fa";
import { AuthContext } from "../../context";
import { validations } from "../../helpers";

type FormData = {
  email: string;
  password: string;
};

export const SignInPage: FC = () => {
  const [showError, setShowError] = useState(false);
  const [isLoggin, setIsLoggin] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onLoginUser = async ({ email, password }: FormData) => {
    setIsLoggin(true);

    const { hasError, created } = await login(email, password);

    if (hasError) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }

    setIsLoggin(false);
    if (created) navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onLoginUser)}>
      <Box
        sx={{
          width: 350,
          height: 380,
          padding: "10px 20px",
          pt: 6,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1">Iniciar sesión</Typography>
            <Chip
              label="No reconocemos el usuario / contraseña"
              color="error"
              icon={<FaTimesCircle />}
              className="fadeIn"
              sx={{ display: showError ? "flex" : "none" }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="email"
              label="Correo"
              variant="filled"
              fullWidth
              {...register("email", {
                required: "Este campo es requerido",
                validate: validations.isEmail,
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>

          {/*  */}

          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              variant="filled"
              fullWidth
              {...register("password", {
                required: "Este campo es requerido",
                minLength: { value: 6, message: "Mínimo 6 caracteres" },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" color="primary" size="large" fullWidth>
              Ingresar
            </Button>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="end">
            <Link to="/sign-up">Registrarse</Link>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
          <CircularProgress
            thickness={2}
            sx={{
              display: isLoggin ? "flex" : "none",
            }}
          />
        </Box>
      </Box>
    </form>
  );
};
