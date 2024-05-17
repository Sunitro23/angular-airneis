import { Product } from '../../../features/products/models/type-product.model';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-list-edit-product',
  templateUrl: './list-edit-product.component.html',
  styleUrls: ['./list-edit-product.component.scss'],
})
export class ListEditProductComponent implements OnInit {
  public selectedProduct?: Product | null;
  public products: Product[] = [];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  private loadProducts(): void {
    this._productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  close() {
    this.selectedProduct = null;
  }

  deleteProduct(newProduct: Product) {
    this.close();
    this._productService.deleteProduct(newProduct.idProduct);
    this.loadProducts();
  }

  updateProduct(newProduct: Product) {
    this._productService.updateProduct(newProduct);
    this.loadProducts();
  }
}
