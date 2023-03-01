import { useState } from "react";
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
import { gestionApi } from "../../../api";
import { DashboardLayout } from "../../../components/layouts";
import { mainContainer } from "../../../assets/materialUI-styles";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

type FormData = {
  fullName: string;
  ID_number: number;
  address: string;
  phone: string;
  neighborhood: string;
  TotalCredits?: number;
  status?: string;
  route: string;
};

const routes = [
  {
    id: 1,
    ruta: "Default",
  },
  {
    id: 2,
    ruta: "Default 2",
  },
];

export const ClientCreatePage = () => {
  const [isCreated, setIsCreated] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState(false);
  const [helpBox, setHelpBox] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const handleSaveClient = async (formData: FormData) => {
    setIsCreating(true);
    try {
      const { data } = await gestionApi.post("/clients", formData);
      setIsCreated(true);
      setIsCreating(false);
      setTimeout(() => setIsCreated(false), 3000);
      setHelpBox(true);
    } catch (error) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      setIsCreating(false);
    }
  };

  const handleAddOtherClient = () => {
    reset();
    const field = document.querySelector("#field");
    field?.scrollIntoView({ behavior: "smooth", block: "start" });
    setHelpBox(false);
  };

  return (
    <DashboardLayout title={"Nuevo usuario"}>
      <Divider sx={{ mb: 2 }} />

      <form onSubmit={handleSubmit(handleSaveClient)}>
        <Grid container sx={{ width: { xs: "270px", sm: "500px" } }}>
          <Grid item xs={12} sx={mainContainer}>
            <TextField
              id="field"
              type="text"
              label="Nombre"
              variant="filled"
              fullWidth
              {...register("fullName", {
                required: "Este campo es requerido",
                minLength: { value: 3, message: "Mínimo 3 caracteres" },
              })}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />
            <TextField
              type="number"
              label="Cédula"
              variant="filled"
              fullWidth
              {...register("ID_number", {
                required: "Este campo es requerido",
                minLength: { value: 3, message: "Mínimo 3 caracteres" },
              })}
              error={!!errors.ID_number}
              helperText={errors.ID_number?.message}
            />
            <TextField
              type="text"
              label="Dirección"
              variant="filled"
              fullWidth
              {...register("address", {
                required: "Este campo es requerido",
              })}
              error={!!errors.address}
              helperText={errors.address?.message}
            />
            <TextField
              type="text"
              label="Teléfono"
              variant="filled"
              fullWidth
              {...register("phone", {
                required: "Este campo es requerido",
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
            <TextField
              type="text"
              label="Barrio"
              variant="filled"
              fullWidth
              {...register("neighborhood", {
                required: "Este campo es requerido",
              })}
              error={!!errors.neighborhood}
              helperText={errors.neighborhood?.message}
            />
            <Box sx={{ display: "flex", gap: 1 }}>
              <label>Ruta</label>

              <select {...register("route")}>
                {routes.map((ruta) => (
                  <option key={ruta.id} value={ruta.ruta}>
                    {ruta.ruta}
                  </option>
                ))}
              </select>
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Button type="submit" size="large" fullWidth variant="contained">
              Guardar
            </Button>

            <CircularProgress
              thickness={2}
              sx={{
                display: isCreating ? "flex" : "none",
                alignSelf: "center",
              }}
            />

            <Chip
              label="Guardado correctamente"
              color="success"
              icon={<FaCheckCircle />}
              className="fadeIn"
              sx={{ display: isCreated ? "flex" : "none" }}
            />

            <Chip
              label="Usuario ya existe"
              color="error"
              icon={<FaTimesCircle />}
              className="fadeIn"
              sx={{ display: error ? "flex" : "none" }}
            />

            <Box
              sx={{
                display: helpBox ? "flex" : "none",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <Link to="/dashboard/clients">Ver listado</Link>
              <Button onClick={handleAddOtherClient}>
                Agregar otro cliente
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </DashboardLayout>
  );
};
