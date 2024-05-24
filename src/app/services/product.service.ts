import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateProductDTO, Product } from '../models/type-product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'http://localhost:3000/product/';
  constructor(private _http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.productUrl);
  }

  public getById(id: number): Observable<Product> {
    return this._http.get<Product>(this.productUrl + id);
  }

  public deleteProduct(product: Product): Observable<Product> {
    return this._http.delete<Product>(this.productUrl + product.id);
  }

  public updateProduct({
    id,
    ...product
  }: Product): Observable<Product> {
    return this._http.patch<Product>(this.productUrl + id, product);
  }

  public addProduct(product: CreateProductDTO) {
    return this._http.post<Product>(this.productUrl, product);
  }
}
