import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/type-user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public user: User = {} as User;
  constructor(private _userService: UserService, private route: Router) {}
  ngOnInit() {
    this.loadUser();
  }
  loadUser() {
    const loadedUser = this._userService.getUser();
    if (loadedUser !== null) {
      this.user = loadedUser;
    }
  }
  routeToOrders() {
    this.route.navigate(['/user/orders']);
  }
}
