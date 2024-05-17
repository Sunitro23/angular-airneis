export interface Product {
  readonly idProduct: number;
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly idCategory: Category;
}
export interface Category {
  readonly idCategory: number;
  readonly libelle: string;
}
