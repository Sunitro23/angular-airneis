import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public isLogin?: boolean;
  public isAdmin?: boolean;
  public searchInput?: string;
  public isOpened = false;
  searchQuery: string | null = null;
  @Output() searchQueryChange: EventEmitter<string | null> = new EventEmitter<
    string | null
  >();
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  constructor(private _serviceUser: UserService, private _route: Router) {
    this.routeEvent(this._route);
    this._initMenu();
  }

  ngAfterViewInit(): void {
    this.sidenav.close();
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
  toggleSidenav(): void {
    if (this.isOpened) {
      this.sidenav.toggle().then(() => {
        this.isOpened = false;
      });
    } else {
      this.isOpened = true;
      this.sidenav.toggle();
    }
  }
}
