export interface IUser {
  name: string;
  email: string;
  role: string;
}

export interface INewUser {
  hasError: boolean;
  message?: string;
}
