import { Component, EventEmitter, Output } from '@angular/core';
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
  public searchInput?: string;
  searchQuery: string | null = null;
  @Output() searchQueryChange: EventEmitter<string | null> = new EventEmitter<
    string | null
  >();

  constructor(private _serviceUser: UserService, private _route: Router) {
    this.routeEvent(this._route);
    this._initMenu();
  }

  onSearch(): void {
    this.searchQuery = this.searchInput || null;
    this.searchQueryChange.emit(this.searchQuery);
    this._route.navigate(['/products']);
  }
  private _initMenu() {
    this.isLogin = this._serviceUser.isLogin();
    this.isAdmin = this._serviceUser.isAdmin();
  }

  logout(): void {
    this._serviceUser.logOut();
    this._initMenu();
  }
  routeEvent(router: Router) {
    router.events.subscribe(() => {
      this._initMenu();
    });
  }
}
