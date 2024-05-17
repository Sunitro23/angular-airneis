import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Product } from '../features/products/models/type-product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://51.83.42.107:5000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const products = this.http.get<Product[]>(this.apiUrl);

    return products;
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.idProduct}`;
    return this.http.put<Product>(url, product);
  }

  deleteProduct(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  logError(products: Observable<Product[]>) {
    console.log('PRODUITS :');
    products.subscribe((data) => console.log(data));
  }
}
