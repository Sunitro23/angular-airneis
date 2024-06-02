import { Component, OnInit, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryImage } from 'src/app/models/type-category.model';
import { Product, ProductImages } from 'src/app/models/type-product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ImageService } from 'src/app/services/image.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories_image: CategoryImage[] = [];
  highlanders: ProductImages[] = [];
  @Output() idCategory: string | number = 'all';

  constructor(
    private _categoryService: CategoryService,
    private _productService: ProductService,
    private _imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadHighlanders();
  }
  loadCategories(): void {
    this._categoryService.getCategories().then((categories) => {
      for (const category of categories) {
        this._imageService.getImageByCategoryId(category).then((data) => {
          this.categories_image.push(data);
        });
      }
    });
  }
  loadHighlanders(): void {
    this._productService.getHighlanders().then((data) => {
      this.highlanders = data;
    });
  }
  onIdCategoryChange(idCategory: any): void {
    return this.idCategory = idCategory;
  }
  slidesStore = [
    {
      src: '/assets/img/image-1.jpg',
      alt: 'Airneis Image 1',
      title: 'Airneis',
    },
    {
      src: '/assets/img/image-2.jpg',
      alt: 'Airneis Image 2',
      title: 'Airneis',
    },
    {
      src: '/assets/img/image-3.jpg',
      alt: 'Airneis Image 3',
      title: 'Airneis',
    },
  ];
  customOptions: OwlOptions = {
    items: 3,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: true,
    center: true,
    autoplay: true,
    margin: 10,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };
}
