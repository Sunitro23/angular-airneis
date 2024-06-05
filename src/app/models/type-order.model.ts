import { Cart } from './type-cart.model';
import { User } from './type-user.model';

export interface Order {
  idOrder: number;
  paymentMethod: string;
  status: string;
  totalPrice: number;
  address: string;
  User: User;
  Cart: Cart;
}

export interface OrderInput {
  paymentMethod: string;
  status: string;
  totalPrice: number;
  address: string;
  idUser: number;
  idCart: number;
}
