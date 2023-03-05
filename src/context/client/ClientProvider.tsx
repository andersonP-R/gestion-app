import { FC, PropsWithChildren, useReducer, useState } from "react";
import Cookies from "js-cookie";
import { gestionApi } from "../../api";
import { IClient, IDeleteClient } from "../../interfaces";
import { clientReducer } from "./clientReducer";
import { ClientContext } from "./ClientContext";

export interface ClientState {
  clients: IClient[];
}

const CLIENT_INITIAL_STATE: ClientState = {
  clients: [],
};

export const ClientProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(clientReducer, CLIENT_INITIAL_STATE);

  const handleGetClients = async () => {
    try {
      const { data } = await gestionApi.get("/clients");
      const { clients } = data;
      dispatch({ type: "[Client] - GetClients", payload: clients });
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const handleDelete = async (id: string): Promise<IDeleteClient> => {
    const previosClients = state.clients.map((client) => ({ ...client }));
    const updatedClients = state.clients.filter((client) => client._id !== id);
    try {
      const { data } = await gestionApi.delete(`/clients/${id}`);
      const { status } = data;
      if (status === "error") {
        dispatch({ type: "[Client] - deleteOne", payload: previosClients });
      }

      dispatch({ type: "[Client] - deleteOne", payload: updatedClients });
      return {
        error: false,
        deleted: true,
      };
    } catch (error) {
      console.log(error);
      return {
        error: true,
        deleted: false,
      };
    }
  };

  return (
    <ClientContext.Provider
      value={{
        ...state,
        handleGetClients,
        handleDelete,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
