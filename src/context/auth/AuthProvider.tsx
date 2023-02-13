import { FC, PropsWithChildren, useReducer } from "react";
import { gestionApi } from "../../api";
import { IUser } from "../../interfaces";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

export interface AuthState {
  session: boolean;
  user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
  session: false,
  user: undefined,
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data } = await gestionApi.post("/auth/sign-in", {
        email,
        password,
      });
      console.log(data);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login }}>
      {children}
    </AuthContext.Provider>
  );
};
