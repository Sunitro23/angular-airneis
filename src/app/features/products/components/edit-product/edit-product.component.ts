import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Product } from '../../../../models/type-product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() editProduct = new EventEmitter<Product>();

  public groupForm!: FormGroup;

  constructor(private fb: FormBuilder, private _userService: UserService) {}

  ngOnInit(): void {
    this._initGroupForm();
  }

  private _initGroupForm() {
    this.groupForm = this.fb.group({
      id: [this.product.id],
      name: [this.product.name, Validators.required],
      first_name: [this.product.first_name, Validators.required],
      email: [this.product.email, Validators.required],
      centre: [this.product.centre],
      organisme: [this.product.organisme],
      perenne: [this.product.perenne],
      occasionnel: [this.product.occasionnel],
      active: [true],
    });
  }

  onSubmit() {
    this.groupForm.markAllAsTouched();
    if (this.groupForm.valid) {
      this.editProduct.emit(this.groupForm.value);
    }
  }
}
