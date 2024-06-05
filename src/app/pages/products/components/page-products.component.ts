import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductImages } from 'src/app/models/type-product.model';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss'],
})
export class PageProductsComponent implements OnInit {
  @Input() searchQuery!: string | null;
  @Input() idCategory!: string | number;
  constructor(private actualRoute: Router) {}
  ngOnInit(): void {}
  verifyRoute(string: string): boolean {
    if (string === '/products') {
      return this.actualRoute.url === '/products';
    } else if (string.includes('/products/')) {
      return this.actualRoute.url.includes('/products/');
    }
    return false;
  }
}
