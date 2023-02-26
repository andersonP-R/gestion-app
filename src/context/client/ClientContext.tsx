import { createContext } from "react";
import { IClient } from "../../interfaces";

interface ContextProps {
  clients: IClient[];

  //   methods
  handleGetClients: () => Promise<void>;
}

export const ClientContext = createContext({} as ContextProps);
