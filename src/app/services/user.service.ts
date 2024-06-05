import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUser, User, UserToken } from '../models/type-user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _loginUrl = 'http://localhost:5000/auth/login';
  private _registerUrl = 'http://localhost:5000/auth/register';
  constructor(private _http: HttpClient) {}

  public logOut() {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
  }

  public async findUser(
    email: string,
    password: string
  ): Promise<User | null | undefined | string> {
    const response = await this._http
      .post<UserToken>(this._loginUrl, { email: email, password: password })
      .toPromise();
    const user = response?.User;
    const token = response?.access_token;
    if (user && token) {
      localStorage.setItem('userInfo', JSON.stringify(user));
      localStorage.setItem('token', token);
      return localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo') || '')
        : null;
    }
    if (response?.message) {
      return response?.message;
    }
    return undefined;
  }
  public async createUser(
    lastName: string,
    firstName: string,
    street: string,
    zipCode: string,
    city: string,
    phone: string,
    email: string,
    password: string
  ): Promise<string> {
    const user_to_create: CreateUser = {
      lastName: lastName,
      firstName: firstName,
      street: street,
      zipCode: zipCode,
      city: city,
      phone: phone,
      email: email,
      password: password,
      isAdmin: false,
    };
    const response = await this._http
      .post<UserToken>(this._registerUrl, user_to_create)
      .toPromise();
    const user = response?.User;
    const token = response?.access_token;
    if (user && token) {
      localStorage.setItem('userInfo', JSON.stringify(user));
      localStorage.setItem('token', token);
      return 'Success';
    } else if (response?.error?.message) {
      return response?.error.message;
    } else if (response?.message) {
      return response?.message;
    }
    return 'error';
  }

  public isLogin(): boolean {
    return localStorage.getItem('userInfo') !== null;
  }
  public isAdmin(): boolean {
    const userInfo = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo') || '')
      : null;
    return userInfo?.isAdmin || false;
  }
  public getToken(): string | null {
    return localStorage.getItem('token');
  }
  public getUser(): User | null {
    return localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo') || '')
      : null;
  }
  // Get Headers, Current Cart, and User
  public getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found in local storage');
    }

    return new HttpHeaders().set('Authorization', `Bearer ${token || ''}`);
  }
  public getCurrentCart(): number {
    return parseInt(localStorage.getItem('idCart') || '0');
  }
  public clearCart() {
    localStorage.removeItem('idCart');
  }
}
