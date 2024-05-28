import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/type-product.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categoryUrl = 'http://localhost:5000/categories';

  constructor(private http: HttpClient) {}

  public async getCategories(): Promise<Category[]> {
    const response = await this.http
      .get<Category[]>(`${this.categoryUrl}`)
      .toPromise();
    console.log(response);
    return response || [];
  }
}
