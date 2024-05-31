import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Product,
  ProductImages,
  ProductOptions,
  Products,
} from '../models/type-product.model';
import { Category } from '../models/type-category.model';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'http://localhost:5000/products';

  constructor(private http: HttpClient, private _imageService: ImageService) {}

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
  public async getOneProductByCategory(idCategory: number): Promise<Product[]> {
    const option: ProductOptions = {
      page: 1,
      per_page: 1,
      idCategory: idCategory,
      sort_by: 'date_published',
      sort_order: 'asc',
      min_price: null,
      max_price: null,
      search_query: null,
    };
    const response = await this.getProducts(option);
    return response.products;
  }
  public async getHighlanders(): Promise<ProductImages[]> {
    const option: ProductOptions = {
      page: 1,
      per_page: 4,
      idCategory: 'all',
      sort_by: 'date_published',
      sort_order: 'asc',
      min_price: null,
      max_price: null,
      search_query: null,
    };
    const response = await this.getProducts(option);
    const highlanders: ProductImages[] = [];
    for (const product of response.products) {
      const image = await this._imageService.getImageByProductId(
        product.idProduct
      );
      console.log(image);
      highlanders.push({
        product,
        images: [image],
      });
    }
    return highlanders;
  }
}
