import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/type-product.model';

@Component({
  selector: 'app-view-card-product',
  templateUrl: './view-card-product.component.html',
  styleUrls: ['./view-card-product.component.scss'],
})
export class ViewCardProductComponent {
  @Input() products!: Product[];
  @Output() editProduct = new EventEmitter<Product>();
  @Output() deleteProduct = new EventEmitter<Product>();

  onEdit(product: Product) {
    this.editProduct.emit(product);
  }
  onDelete(product: Product) {
    this.deleteProduct.emit(product);
  }
}
