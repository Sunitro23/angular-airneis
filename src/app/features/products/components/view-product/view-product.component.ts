import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/type-product.model';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent {
  public displayedColumns: string[] = [
    'idProduct',
    'name',
    'price',
    'description',
    'category',
    'actions',
  ];

  public selectedProduct?: Product;

  @Input() products!: Product[];
  @Output() editProduct = new EventEmitter<Product>();
  @Output() deleteProduct = new EventEmitter<Product>();

  onSelect(product: Product): void {
    this.editProduct.emit(product);
  }
  onDelete(product: Product) {
    this.deleteProduct.emit(product);
  }
}
