import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/type-product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() sendNewProduct = new EventEmitter<Product>();

  public editForm!: FormGroup;

  ngOnInit(): void {
    this._initGroupForm();
  }

  private _initGroupForm() {
    this.editForm = this.fb.group({
      idProduct: [this.product.idProduct],
      name: [this.product.name, Validators.required],
      price: [this.product.price, Validators.required],
      description: [this.product.description, Validators.required],
      category: this.fb.group({
        idCategory: [this.product.idCategory.idCategory],
        libelle: [this.product.idCategory.libelle],
      }),
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.sendNewProduct.emit(this.editForm.value);
    }
  }

  constructor(private fb: FormBuilder) {}
}
