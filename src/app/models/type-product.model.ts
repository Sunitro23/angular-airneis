import { ImageFile } from './type-image.model';
export interface Products {
  products: Product[];
  total_pages: number;
  current_page: number;
  total_items: number;
}

export interface Product {
  idProduct: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  date_published: Date;
  idCategory: Category;
}

export interface Category {
  idCategory: number;
  libelle: string;
}
export interface ProductInput {
  name: string;
  price: number;
  description: string;
  idCategory: number;
}
export interface ProductImages {
  product: Product;
  images: ImageFile[];
}
export interface ProductOptions {
  page: number;
  per_page: number;
  sort_by: 'stock' | 'price' | 'date_published';
  sort_order: 'asc' | 'desc';
  min_price: number | null;
  max_price: number | null;
  search_query: string | null;
  idCategory: number | string;
}
