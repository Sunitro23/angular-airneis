import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private _userService: UserService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      if (this._userService.isAdmin()) {
        return true;
      } else {
        return this._router.parseUrl('/login');
      }
  }
}
