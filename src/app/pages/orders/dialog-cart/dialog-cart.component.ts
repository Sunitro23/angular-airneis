import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Product } from 'src/app/models/type-product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'dialog-cart',
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.scss'],
})
export class DialogCartComponent {
  public products: Product[] = [];
  public productQuantities: { [key: number]: number } = {};
  public totalItems: number = 0;
  public totalPrice: number = 0;
  public cart: any;
  constructor(
    public dialogRef: MatDialogRef<DialogCartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _cartService: CartService
  ) {}
  ngOnInit() {
    this.loadCartItems();
  }
  loadCartItems() {
    this.products = [];
    this.totalPrice = 0;
    return this._cartService.getCartWithProducts(this.data).subscribe(async (data) => {
      this.cart = data!.Cart;
      this.productQuantities = {};
      for (let product of data!.Products) {
        if (this.productQuantities[product.idProduct]) {
          this.productQuantities[product.idProduct]++;
        } else {
          this.productQuantities[product.idProduct] = 1;
          this.products.push(product);
        }
        this.totalPrice += product.price;
      }
      for (let quantity of Object.values(this.productQuantities)) {
        this.totalItems += quantity;
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
