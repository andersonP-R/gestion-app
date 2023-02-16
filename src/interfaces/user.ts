export interface IUser {
  name: string;
  email: string;
  role: string;
}

export interface INewUser {
  created: boolean;
  hasError: boolean;
  message?: string;
}

export interface IUserSession {
  isAuthorized: boolean;
}
