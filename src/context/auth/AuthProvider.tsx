import { FC, PropsWithChildren, useReducer } from "react";
import { gestionApi } from "../../api";
import { INewUser, IUser } from "../../interfaces";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import Cookies from "js-cookie";

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

  const login = async (email: string, password: string): Promise<INewUser> => {
    try {
      const { data } = await gestionApi.post("/auth/sign-in", {
        email,
        password,
      });

      const { token, user } = data;

      Cookies.set("token", token, { sameSite: "strict" });
      dispatch({ type: "[Auth] - Login", payload: user });

      return {
        created: true,
        hasError: false,
      };
    } catch (error) {
      return {
        created: false,
        hasError: true,
        message: "Error on authentication",
      };
    }
  };

  const registerUser = async (
    name: string,
    email: string,
    password: string
  ): Promise<INewUser> => {
    try {
      const { data } = await gestionApi.post("/auth/sign-up", {
        name,
        email,
        password,
      });
      const { token, user } = data;

      Cookies.set("token", token, { sameSite: "strict" });
      dispatch({ type: "[Auth] - Login", payload: user });

      return {
        created: true,
        hasError: false,
      };
    } catch (error) {
      return {
        created: false,
        hasError: true,
        message: "Error on user creation",
      };
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};
