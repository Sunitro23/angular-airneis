import { Product } from './type-product.model';
import { User } from './type-user.model';

export interface Cart {
  idCart: number;
  active: boolean;
  User: User;
}
export interface CartInput {
  active: boolean;
  idUser: number;
}
export interface ProductCart {
  idProductCart: number;
  quantity: number;
  Cart: Cart;
  Product: Product;
}
export interface ProductCartInput {
  quantity: number;
  idProduct: number;
  idCart: number;
}
export interface CartProducts {
  Cart: Cart;
  Products: Product[];
}
