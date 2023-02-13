import { createContext } from "react";
import { IUser } from "../../interfaces";

interface ContextProps {
  session: boolean;
  user?: IUser;

  //   methods
  login: (email: string, password: string) => Promise<boolean>;
}

export const AuthContext = createContext({} as ContextProps);
