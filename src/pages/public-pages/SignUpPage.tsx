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
import { validations } from "../../helpers";
import { AuthContext } from "../../context";
import { FaRegCheckCircle, FaTimesCircle } from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export const SignUpPage: FC = () => {
  const [showError, setShowError] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const navigate = useNavigate();
  const { registerUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onRegisterUser = async ({ name, email, password }: FormData) => {
    setIsCreating(true);

    const { hasError, created } = await registerUser(name, email, password);

    if (hasError) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }

    if (created) {
      setIsCreated(true);
      navigate("/dashboard");
    }

    setIsCreating(false);
  };

  return (
    <form onSubmit={handleSubmit(onRegisterUser)}>
      <Box
        sx={{
          width: 350,
          height: 450,
          padding: "10px 20px",
          pt: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1">Registrarse</Typography>
            <Chip
              label="Usuario ya existe"
              color="error"
              icon={<FaTimesCircle />}
              className="fadeIn"
              sx={{ display: showError ? "flex" : "none" }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="text"
              label="Nombre"
              variant="filled"
              fullWidth
              {...register("name", {
                required: "Este campo es requerido",
                minLength: { value: 3, message: "Mínimo 3 caracteres" },
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
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
                // arreglar validacion - ux experience
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
            <Link to="/sign-in">Ya tengo una cuenta</Link>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
          <CircularProgress
            thickness={2}
            sx={{
              display: isCreating ? "flex" : "none",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
          <Chip
            label="Acción existosa"
            color="success"
            icon={<FaRegCheckCircle />}
            className="fadeIn"
            sx={{ display: isCreated ? "flex" : "none" }}
          />
        </Box>
      </Box>
    </form>
  );
};
