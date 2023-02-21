import { createContext, Dispatch, SetStateAction } from "react";
import { INewUser, IUser } from "../../interfaces";

interface ContextProps {
  session: boolean;
  user?: IUser;
  loadingUser: boolean;

  //   methods
  registerUser: (
    name: string,
    email: string,
    password: string
  ) => Promise<INewUser>;
  login: (email: string, password: string) => Promise<INewUser>;
  logout: () => void;
  setLoadingUser: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as ContextProps);
