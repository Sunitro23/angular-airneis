import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Image } from 'src/app/models/type-image.model';
import { Product, ProductImages } from 'src/app/models/type-product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../dialog-added/dialog-added.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss'],
})
export class OneProductComponent implements OnInit {
  public isLogin: boolean = false;
  productId!: number | null;
  product: ProductImages = {
    product: this.createMockProduct(),
    images: [this.createMockImage()],
  };
  constructor(
    private route: ActivatedRoute,
    private _productService: ProductService,
    private _cartService: CartService,
    private _serviceUser: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isLogin = this._serviceUser.isLogin();
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = id !== null ? parseInt(id) : null;
    this.loadProduct();
  }
  loadProduct(): void {
    this._productService.getProductById(this.productId).then((data) => {
      this.product = data;
    });
  }
  addProductToCart(): void {
    if (this.product.product.idProduct === 0) return;
    this._cartService.addProductToCart(this.product.product);
    this.openDialog();
  }

  customOptions: OwlOptions = {
    items: this.product.images.length,
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

  // Mock ProductImages

  createMockProduct(): Product {
    return {
      idProduct: 0,
      name: '',
      description: '',
      price: 0,
      stock: 0,
      Category: {
        idCategory: 0,
        libelle: '',
      },
      date_published: new Date(),
    };
  }
  createMockImage(): Image {
    return {
      idImage: 0,
      alt: 'Image not found',
      file: 'https://placehold.co/400',
      Product: this.createMockProduct(),
    };
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
    });
  }
}
