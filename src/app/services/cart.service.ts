import { Injectable } from '@angular/core';
import { Product } from '../models/type-product.model';
import {
  Cart,
  CartInput,
  CartProducts,
  ProductCart,
  ProductCartInput,
} from '../models/type-cart.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/type-user.model';
import { Observable, catchError, map } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Variables
  private cartUrl = 'http://localhost:5000/carts/';
  private productCartUrl = 'http://localhost:5000/product_carts/';

  constructor(private _http: HttpClient, private _userService: UserService) {}

  // Add Product to Cart
  public addProductToCart(product: Product): void {
    if (this._userService.getCurrentCart() !== 0) {
      this.addProductToExistingCart(product);
    } else {
      this.createCart(product).subscribe(() => {
        this.addProductToExistingCart(product);
      });
    }
  }

  // Create Cart
  public createCart(product: Product) {
    const cartInput: CartInput = {
      active: true,
      idUser: this._userService.getUser()!.idUser,
    };
    var cart = this._http.post<[Cart, number]>(`${this.cartUrl}`, cartInput, {
      headers: this._userService.getHeaders(),
    });
    cart.subscribe((data) => {
      localStorage.setItem('idCart', data[0].idCart.toString());
    });
    return cart;
  }

  // Add Product to Existing Cart
  public addProductToExistingCart(product: Product) {
    const productCartInput: ProductCartInput = {
      quantity: 1,
      idCart: this._userService.getCurrentCart(),
      idProduct: product.idProduct,
    };
    return this._http
      .post<ProductCart>(`${this.productCartUrl}`, productCartInput, {
        headers: this._userService.getHeaders(),
      })
      .subscribe((data) => {
        console.log('Product added to cart', data);
      });
  }

  // Get Cart with Products
  public getCartWithProducts(idCart?: number): Observable<CartProducts | null> {
    const cartId =
      idCart !== undefined ? idCart : this._userService.getCurrentCart();
    return this._http
      .post<CartProducts>(
        `${this.cartUrl}products/${cartId}`,
        {},
        {
          headers: this._userService.getHeaders(),
          observe: 'response',
        }
      )
      .pipe(
        map((response) => response.body),
        catchError((error) => {
          localStorage.removeItem('idCart');
          console.error('Error:', error);
          throw error;
        })
      );
  }

  public getProductCartByProductIdAndCartId(
    idProduct: number,
    idCart: number
  ): Observable<ProductCart[]> {
    return this._http
      .get<ProductCart[]>(`${this.productCartUrl}`, {
        headers: this._userService.getHeaders(),
      })
      .pipe(
        map((data) => {
          return data
            .filter((item) => item.Product?.idProduct === idProduct)
            .filter((item) => item.Cart?.idCart === idCart);
        })
      );
  }
  public deleteAllProducts(idProduct: number) {
    return new Observable<void>((observer) => {
      var productCarts = this.getProductCartByProductIdAndCartId(
        idProduct,
        this._userService.getCurrentCart()
      );
      productCarts.subscribe((data) => {
        for (let productCart of data) {
          this._http
            .delete(`${this.productCartUrl}${productCart.idProductCart}`, {
              headers: this._userService.getHeaders(),
            })
            .subscribe(
              () => {},
              (error) => {
                observer.error(error);
              },
              () => {
                observer.next();
                observer.complete();
              }
            );
        }
      });
    });
  }
  public deleteProduct(idProduct: number): Observable<void> {
    return new Observable<void>((observer) => {
      var productCarts = this.getProductCartByProductIdAndCartId(
        idProduct,
        this._userService.getCurrentCart()
      );
      productCarts.subscribe((data) => {
        this._http
          .delete(`${this.productCartUrl}${data[0].idProductCart}`, {
            headers: this._userService.getHeaders(),
          })
          .subscribe(
            () => {
              observer.next();
              observer.complete();
            },
            (error) => {
              observer.error(error);
            }
          );
      });
    });
  }
}
