export interface User {
  idUser: number;
  lastName: string;
  firstName: string;
  street: string;
  zipCode: string;
  city: string;
  phone: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
export interface UserToken{
  access_token: string;
  message: string | null | undefined;
  error: {
    message: string | null | undefined;
  }| null | undefined;
  User: User;
}
export interface CreateUser{
  lastName: string;
  firstName: string;
  street: string;
  zipCode: string;
  city: string;
  phone: string;
  email: string;
  password: string;
  isAdmin: boolean;
}