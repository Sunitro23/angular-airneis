import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public isLogin?: boolean;
  public isAdmin?: boolean;

  constructor(private _serviceUser: UserService, private _route: Router) {
    this.routeEvent(this._route);
    this._initMenu();
  }
  logout() {
    this._serviceUser.logOut();
    this._initMenu();
  }

  private _initMenu() {
    this.isLogin = this._serviceUser.isLogin();
    this.isAdmin = this._serviceUser.isAdmin();
  }

  routeEvent(router: Router) {
    router.events.subscribe(() => {
      this._initMenu();
    });
  }
}
