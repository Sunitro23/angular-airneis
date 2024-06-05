import { Component, OnInit } from '@angular/core';
import { Cart, CartProducts } from 'src/app/models/type-cart.model';
import { Product, ProductImages } from 'src/app/models/type-product.model';
import { CartService } from 'src/app/services/cart.service';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/models/type-image.model';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogOrderComponent } from '../dialog-order/dialog-order.component';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cart: Cart | undefined;
  public products: ProductImages[] = [];
  public productQuantities: { [key: number]: number } = {};
  public totalItems: number = 0;
  public totalPrice: number = 0;
  constructor(
    private _cartService: CartService,
    private _imageService: ImageService,
    private _userService: UserService,
    private _orderService: OrderService,
    public dialog: MatDialog,
    public route: Router
  ) {}
  ngOnInit(): void {
    this.loadCartItems();
  }
  loadCartItems() {
    this.products = [];
    this.totalPrice = 0;
    return this._cartService.getCartWithProducts().subscribe(async (data) => {
      this.cart = data!.Cart;
      this.productQuantities = {};
      for (let product of data!.Products) {
        if (product) {
          if (this.productQuantities[product.idProduct]) {
            this.productQuantities[product.idProduct]++;
          } else {
            this.productQuantities[product.idProduct] = 1;
            this.addProductToArray(product);
          }
          this.totalPrice += product.price;
        }
      }
      for (let quantity of Object.values(this.productQuantities)) {
        this.totalItems += quantity;
      }
    });
  }
  addProductToArray(product: Product) {
    // Placeholder first
    this.products.push({
      product: product,
      images: [
        {
          idImage: 0,
          alt: 'No Image',
          file: 'https://placehold.co/400',
          Product: product,
        },
      ],
    });
    // Then update with real image when available
    this.createProductImage(product).then((realImage) => {
      let productIndex = this.products.findIndex(
        (p) => p.product.idProduct === product.idProduct
      );
      if (productIndex !== -1) {
        this.products[productIndex] = realImage;
      }
    });
  }
  // Create a product image if it doesn't exist
  createProductImage(product: Product): Promise<ProductImages> {
    return this._imageService
      .getImageByProductId(product.idProduct)
      .then((images) => {
        var image: Image[];
        if (images) {
          image = [images];
        } else {
          image = [
            {
              idImage: 0,
              alt: 'No Image',
              file: 'https://placehold.co/400',
              Product: product,
            },
          ];
        }
        return {
          product: product,
          images: image,
        };
      });
  }
  deleteAllProducts(idProduct: number) {
    this._cartService.deleteAllProducts(idProduct).subscribe((date) => {
      this.loadCartItems();
      window.location.reload();
    });
  }
  deleteProduct(idProduct: number) {
    this._cartService.deleteProduct(idProduct).subscribe((data) => {
      this.loadCartItems();
      window.location.reload();
    });
  }
  createOrder() {
    const dialogRef = this.dialog
      .open(DialogOrderComponent, {
        width: '500px',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this._orderService
            .createOrder(result, this.totalPrice)
            .subscribe((data) => {
              this.route.navigate(['/user/orders']);
            });
        }
      });
  }
  getCurrentUser() {
    return this._userService.getUser();
  }
  isRouteCart() {
    return window.location.href.includes('cart');
  }
}
