import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public getUserDetails(): string | null {
    if (localStorage.getItem('userData')) {
      return localStorage.getItem('userData');
    } else {
      return null;
    }
  }
  public setDataInLocalStorage(variableName: string, data: string) {
    localStorage.setItem(variableName, data);
  }
  public getToken(): string | null {
    return localStorage.getItem('token');
  }
  public clearStorage() {
    localStorage.clear();
  }
}
