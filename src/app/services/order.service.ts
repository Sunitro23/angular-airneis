import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/type-user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orderUrl = 'http://localhost:5000/orders/';
  constructor(private http: HttpClient, private _userService: UserService) {}
  getOrders() {
    return this.http.get(
      `${this.orderUrl}user/${this._userService.getUser()!.idUser}`,
      {
        headers: this._userService.getHeaders(),
      }
    );
  }
  createOrder({ address, paymentMethod }: any, total: number) {
    var response = this.http.post(
      this.orderUrl,
      {
        paymentMethod: paymentMethod,
        status: 'pending',
        totalPrice: total,
        address: address,
        idUser: this._userService.getUser()!.idUser,
        idCart: this._userService.getCurrentCart(),
      },
      {
        headers: this._userService.getHeaders(),
      }
    );
    this._userService.clearCart();
    return response; 
  }
}
