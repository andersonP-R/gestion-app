import { IUser } from "../../interfaces";
import { AuthState } from "./AuthProvider";

type AuthActionType =
  | { type: "[Auth] - Login"; payload: IUser }
  | { type: "[Auth] - logout" };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case "[Auth] - Login":
      return {
        ...state,
        session: true,
        user: action.payload,
      };

    case "[Auth] - logout":
      return {
        ...state,
        session: false,
        user: undefined,
      };

    default:
      return state;
  }
};
