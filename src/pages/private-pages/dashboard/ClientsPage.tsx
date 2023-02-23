import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  Box,
  Grid,
  Icon,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import { DashboardLayout } from "../../../components/layouts";
import { FaSearch } from "react-icons/fa";
import { gestionApi } from "../../../api";
import { IClient } from "../../../interfaces";
import "../../../assets/css/client_page.css";

export const ClientsPage: FC = () => {
  const [data, setData] = useState<IClient[]>([]);
  const [clients, setClients] = useState<IClient[]>([]);

  useEffect(() => {
    handleGetClients();
  }, []);

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const clientSearched = target.value.toUpperCase();
    const clientsResult = data.filter((client) =>
      client.fullName.includes(clientSearched)
    );
    // console.log("search: ", clientsResult);
    setClients(clientsResult);
  };

  const handleGetClients = async () => {
    try {
      const { data } = await gestionApi.get("/clients");
      const { clients } = data;
      setData(clients);
      setClients(clients);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <DashboardLayout title={"Listado de clientes"}>
      <div className="box-head">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Input
            onChange={handleSearch}
            type="text"
            placeholder="Buscar"
            endAdornment={
              <InputAdornment position="end">
                <Icon>
                  <FaSearch />
                </Icon>
              </InputAdornment>
            }
          />
        </Box>

        <Box>
          <Typography variant="subtitle1">Agregar cliente</Typography>
        </Box>
      </div>

      <Grid container>
        <div className="table_main_container">
          <table className="table">
            <thead className="table_header">
              <tr className="table_header_cols">
                <th className="th_col name">Nombre</th>
                <th className="th_col status">Estado</th>
                <th className="th_col idNumber">Cédula</th>
                <th className="th_col route">Ruta</th>
                <th className="th_col credits">Créditos</th>
                <th className="th_col phone">Teléfono</th>
                <th className="th_col address">Dirección</th>
                <th className="th_col neighb">Barrio</th>
              </tr>
            </thead>
            <tbody className="table_body">
              {clients.map((client) => (
                <tr key={client.ID_number} className="tb_client">
                  <td className="tb_client tb_name">{client.fullName}</td>
                  <td className="tb_client tb_status">{client.status}</td>
                  <td className="tb_client tb_IdNumber">{client.ID_number}</td>
                  <td className="tb_client tb_route">{client.route}</td>
                  <td className="tb_client tb_credits">
                    {client.TotalCredits}
                  </td>
                  <td className="tb_client tb_phone">{client.phone}</td>
                  <td className="tb_client tb_address">{client.address}</td>
                  <td className="tb_client tb_neighb">{client.neighborhood}</td>
                </tr>
              ))}
              <tr
                style={{
                  display: !clients.length ? "flex" : "none",
                  padding: "10px",
                }}
              >
                <td>
                  <h2>sin resultados</h2>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Grid>
    </DashboardLayout>
  );
};
