import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Category,
  Product,
  ProductOptions,
  Products,
} from '../models/type-product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'http://localhost:5000/products';

  constructor(private http: HttpClient) {}

  public async getProducts(options: ProductOptions): Promise<Products> {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(options);
    const response = await this.http
      .request<Products>('POST', `${this.productUrl}/options`, {
        body,
        headers,
      })
      .toPromise();

    return (
      response || {
        products: [],
        total_pages: 0,
        current_page: 0,
        total_items: 0,
      }
    );
  }

  public async getCategories(products: Product[]): Promise<Category[]> {
    const categories: Category[] = [];
    products.forEach((product) => {
      if (
        !categories.some(
          (category) => category.idCategory === product.idCategory.idCategory
        )
      ) {
        categories.push({
          idCategory: product.idCategory.idCategory,
          libelle: product.idCategory.libelle,
        });
      }
    });
    return categories;
  }
}
