import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import { FaEye, FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { IClient } from "../../../interfaces";
import { ClientContext } from "../../../context";
import "../../../assets/css/client_list.css";
import { ClientDeleteCompont } from "./ClientDeleteCompont";

interface Props {
  clients: IClient[];
}

export const ClientList: FC<Props> = ({ clients }) => {
  const navigate = useNavigate();

  const seeClient = (url: string) => {
    navigate(url);
  };

  //
  return (
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
            <th className="th_col check">Ver</th>
            <th className="th_col update">Actualizar</th>
            <th className="th_col delete">Borrar</th>
          </tr>
        </thead>
        <tbody className="table_body">
          {clients.map((client) => (
            <tr key={client._id} className="tb_client">
              <td className="tb_client tb_name">
                <Link to={`/dashboard/clients/${client._id}`}>
                  {client.fullName}
                </Link>
              </td>
              <td className="tb_client tb_status">{client.status}</td>
              <td className="tb_client tb_IdNumber">{client.ID_number}</td>
              <td className="tb_client tb_route">{client.route}</td>
              <td className="tb_client tb_credits">{client.TotalCredits}</td>
              <td className="tb_client tb_phone">{client.phone}</td>
              <td className="tb_client tb_address">{client.address}</td>
              <td className="tb_client tb_neighb">{client.neighborhood}</td>
              <td className="tb_client tb_check">
                <Tooltip title="Ver">
                  <IconButton
                    onClick={() =>
                      seeClient(`/dashboard/clients/${client._id}`)
                    }
                  >
                    <FaEye />
                  </IconButton>
                </Tooltip>
              </td>
              <td className="tb_client tb_update">
                <Tooltip title="Editar">
                  <IconButton>
                    <FaUserEdit />
                  </IconButton>
                </Tooltip>
              </td>
              <td className="tb_client tb_delete">
                <ClientDeleteCompont client={client} />
              </td>
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
  );
};
