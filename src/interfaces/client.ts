export interface IClient {
  _id?: string;
  fullName: string;
  ID_number: number;
  address: string;
  phone: string;
  neighborhood: string;
  TotalCredits: number;
  status: string;
  route: string;
  isActive?: boolean;
}
