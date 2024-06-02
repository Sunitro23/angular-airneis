import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/type-category.model';
import { ProductService } from './product.service';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categoryUrl = 'http://localhost:5000/categories';
  constructor(
    private http: HttpClient,
    private _serviceProduct: ProductService,
    private _imageService: ImageService
  ) {}

  public async getCategories(): Promise<Category[]> {
    const response = await this.http
      .get<Category[]>(`${this.categoryUrl}`)
      .toPromise();
    return response || [];
  }
  public async getCategoryById(idCategory: number): Promise<Category> {
    return (
      (await this.http
        .get<Category>(`${this.categoryUrl}/${idCategory}`)
        .toPromise()) || {
        idCategory: 0,
        libelle: '',
      }
    );
  }
}
