import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/models/type-order.model';
import { OrderService } from 'src/app/services/order.service';
import { DialogCartComponent } from '../dialog-cart/dialog-cart.component';

@Component({
  selector: 'app-user',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  public orders: Order[] = [];
  constructor(private orderService: OrderService, public dialog: MatDialog) {}
  ngOnInit() {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data as Order[];
    });
  }
  openCartDialog(order: Order) {
    const dialogRef = this.dialog.open(DialogCartComponent, {
      data: order.Cart.idCart,
      width: '80%',
      height: '80%',
    });
  }
}
