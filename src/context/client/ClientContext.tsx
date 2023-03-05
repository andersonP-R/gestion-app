import { createContext } from "react";
import { IClient, IDeleteClient } from "../../interfaces";

interface ContextProps {
  clients: IClient[];

  //   methods
  handleGetClients: () => Promise<void>;
  handleDelete: (id: string) => Promise<IDeleteClient>;
}

export const ClientContext = createContext({} as ContextProps);
