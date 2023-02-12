import { createContext } from "react";
import { IUser } from "../../interfaces";

interface ContextProps {
  session: boolean;
  user?: IUser;

  //   methods
  login: () => Promise<void>;
}

export const AuthContext = createContext({} as ContextProps);
