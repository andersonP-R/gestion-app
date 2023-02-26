import { FC, PropsWithChildren, useReducer, useState } from "react";
import Cookies from "js-cookie";
import { gestionApi } from "../../api";
import { IClient } from "../../interfaces";
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

  return (
    <ClientContext.Provider
      value={{
        ...state,
        handleGetClients,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
