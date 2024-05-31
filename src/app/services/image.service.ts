import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../models/type-image.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Category, CategoryImage } from '../models/type-category.model';
@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private imageUrl = 'http://localhost:5000/images';
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  // Get all images
  public async getImages(): Promise<Image[]> {
    return (
      (await this.http.get<Image[]>(`${this.imageUrl}/`).toPromise()) || []
    );
  }

  // Get image by id
  public async getImageFileById(id: number): Promise<Image> {
    const response = await this.http
      .get<Image>(`${this.imageUrl}/${id}`)
      .toPromise();
    if (!response) {
      throw new Error('Image not found');
    }
    const imageBlob = await fetch(
      `data:image/jpeg;base64,${response.file}`
    ).then((r) => r.blob());
    response.file = URL.createObjectURL(imageBlob);
    return response;
  }

  // Get image by product id
  public async getImageByProductId(id: number): Promise<Image> {
    const response = await this.http
      .get<Image>(`${this.imageUrl}/product/${id}`)
      .toPromise();
    if (!response) {
      throw new Error('Image not found');
    }

    const imageBlob = await fetch(
      `data:image/jpeg;base64,${response.file}`
    ).then((r) => r.blob());
    response.file = URL.createObjectURL(imageBlob);
    return response;
  }

  // Get image by category id
  public async getImageByCategoryId(
    category: Category
  ): Promise<CategoryImage> {
    const response = await this.http
      .get<Image>(`${this.imageUrl}/category/${category.idCategory}`)
      .toPromise();
    if (!response) {
      throw new Error('Image not found');
    }
    const imageBlob = await fetch(
      `data:image/jpeg;base64,${response.file}`
    ).then((r) => r.blob());
    response.file = URL.createObjectURL(imageBlob);
    return { category, image: response };
  }
}
