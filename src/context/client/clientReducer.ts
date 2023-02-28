import { IClient } from "../../interfaces";
import { ClientState } from "./ClientProvider";

type ClientActionType = { type: "[Client] - GetClients"; payload: IClient[] };

export const clientReducer = (
  state: ClientState,
  action: ClientActionType
): ClientState => {
  switch (action.type) {
    case "[Client] - GetClients":
      return {
        ...state,
        clients: action.payload,
      };

    default:
      return state;
  }
};
