import { createContext } from "react";
import { INewUser, IUser } from "../../interfaces";

interface ContextProps {
  session: boolean;
  user?: IUser;

  //   methods
  registerUser: (
    name: string,
    email: string,
    password: string
  ) => Promise<INewUser>;
  login: (email: string, password: string) => Promise<INewUser>;
}

export const AuthContext = createContext({} as ContextProps);
