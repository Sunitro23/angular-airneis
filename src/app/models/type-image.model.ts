import { Product } from './type-product.model';

export interface Image {
  idImage: number;
  alt: string;
  file: string;
  idProduct: Product;
}
