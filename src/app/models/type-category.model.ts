import { Image } from './type-image.model';

export interface Category {
  idCategory: number;
  libelle: string;
}
export interface CategoryImage {
  category: Category;
  image: Image;
}
