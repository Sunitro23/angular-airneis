import {
  Category,
  Product,
  ProductImages,
  ProductOptions,
} from 'src/app/models/type-product.model';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ImageService } from 'src/app/services/image.service';
import { ImageFile } from 'src/app/models/type-image.model';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  public productImages: ProductImages[] = [];
  public productOptions: ProductOptions = {
    page: 1,
    per_page: 10,
    sort_by: 'stock',
    sort_order: 'asc',
    min_price: null,
    max_price: null,
    search_query: null,
    idCategory: "all",
  };
  public categories: Category[] = [];
  public total_items = 0;
  public isLoadingProducts = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private _productService: ProductService,
    private _imageService: ImageService,
    private _categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.isLoadingProducts = true;
    this.productImages = [];
    this._productService
      .getProducts(this.productOptions)
      .then(async (products) => {
        this.total_items = products.total_items;
        for (const product of products.products) {
          this.productImages.push({
            product: product,
            images: [this.mockImage(product)],
          });
        }
        this.isLoadingProducts = false;
        this.loadImages();
      });
  }
  loadImages() {
    this.productImages.forEach((productImage) => {
      this._imageService
        .getOneImageByProductId(productImage.product.idProduct)
        .then((images) => {
          if (images) {
            productImage.images = [images];
          }
        });
    });
  }
  loadCategories(): void {
    this._categoryService.getCategories().then((categories) => {
      this.categories = categories;
    });
  }

  onPageChange(event: any): void {
    this.productOptions.page = event.pageIndex + 1;
    this.productOptions.per_page = event.pageSize;
    this.loadProducts();
  }

  mockImage(product: Product): ImageFile {
    return {
      image: {
        idImage: 1,
        path: 'https://placehold.co/600x400',
        alt: 'Mock Image',
        idProduct: product,
      },
      file: 'https://placehold.co/600x400',
    };
  }
  sortOrder(sort_order: 'asc' | 'desc'): void {
    this.productOptions.sort_order = sort_order;
    this.loadProducts();
  }
  sortBy(event: any): void {
    const sort_by = event.target.value;
    this.productOptions.sort_by = sort_by;
    this.loadProducts();
  }
}
