import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image, ImageFile } from '../models/type-image.model';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private imageUrl = 'http://localhost:5000/images';
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  public async getImages(): Promise<Image[]> {
    return (
      (await this.http.get<Image[]>(`${this.imageUrl}/`).toPromise()) || []
    );
  }
  public async getImagesByProductId(id: number): Promise<ImageFile[]> {
    const images = await this.getImages();
    const imagesByProductId = images.filter(
      (image) => image.idProduct.idProduct === id
    );
    return await Promise.all(
      imagesByProductId.map(async (image) => ({
        image: image,
        file: await this.getImageFileById(image.idImage),
      }))
    );
  }
public async getImageFileById(id: number): Promise<string> {
    const response = await this.http
        .get(`${this.imageUrl}/file/${id}`, {
            responseType: 'blob',
            withCredentials: true,
        })
        .toPromise();
    const file = response ? URL.createObjectURL(response) : '';
    return this.sanitizer.bypassSecurityTrustUrl(file) as string;
}
  public async getOneImageByProductId(
    id: number
  ): Promise<ImageFile | undefined> {
    const images = await this.getImages();
    const imagesByProductId: Image[] =
      images.filter((image) => image.idProduct.idProduct === id) || [];
    if (imagesByProductId.length === 0) {
      return undefined;
    }
    const image = imagesByProductId[0];
    return { image: image, file: await this.getImageFileById(image.idImage) };
  }
}
