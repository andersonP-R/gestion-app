import { FC, PropsWithChildren, useEffect, useReducer, useState } from "react";
import Cookies from "js-cookie";
import { gestionApi } from "../../api";
import { INewUser, IUser } from "../../interfaces";
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
  const [loadingUser, setLoadingUser] = useState(false);
  const token = Cookies.get("token");

  useEffect(() => {
    authUser();
  }, []);

  const authUser = async () => {
    setLoadingUser(true);
    if (!token) return setLoadingUser(false);

    try {
      const query = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/auth/session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      const data = await query.json();
      dispatch({ type: "[Auth] - Login", payload: data.user });
      setLoadingUser(false);
    } catch (error) {
      setLoadingUser(false);
      return null;
    }
  };

  const login = async (email: string, password: string): Promise<INewUser> => {
    try {
      const { data } = await gestionApi.post("/auth/sign-in", {
        email,
        password,
      });

      const { token, user } = data;

      Cookies.set("token", token, { sameSite: "strict", secure: true });
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

  const logout = () => {
    Cookies.remove("token");
    window.location.reload();
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

      Cookies.set("token", token, { sameSite: "strict", secure: true });
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
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        registerUser,
        loadingUser,
        setLoadingUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
