import { FC, PropsWithChildren, useEffect, useReducer } from "react";
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

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const token = Cookies.get("token");

    if (!token) return null;

    const query = await fetch("http://localhost:8080/api/auth/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await query.json();
    dispatch({ type: "[Auth] - Login", payload: data.user });
  };

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
