import { Grid } from "@mui/material";
import { FaBiking, FaCoins, FaUserCog } from "react-icons/fa";
import { DashboardLayout } from "../../../components/layouts";
import { CardComponent } from "../../../components/ui/admin";

export const AdminPage = () => {
  // validar el valor del user guadado en las cookies, con el back para permitir el acceso a esta pantalla

  return (
    <DashboardLayout title={"Ajustes generales"}>
      <Grid container spacing={4}>
        <CardComponent description={"Usuarios"} url={"/dashboard/admin/users"}>
          <FaUserCog />
        </CardComponent>

        <CardComponent description={"Bases"} url={"/dashboard/admin/bases"}>
          <FaCoins />
        </CardComponent>

        <CardComponent description={"Rutas"} url={"/dashboard/admin/routes"}>
          <FaBiking />
        </CardComponent>
      </Grid>
    </DashboardLayout>
  );
};
