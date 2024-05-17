import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from './../../../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  public editForm!: FormGroup;

  constructor(
    private _productService: ProductService,
    private _fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._initGroupForm();
  }

  private _initGroupForm() {
    this.editForm = this._fb.group({
      id: [null],
      name: ['', Validators.required],
      first_name: ['', Validators.required],
      centre: [false],
      organisme: [false],
      perenne: [false],
      occasionnel: [false],
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      const product = this.editForm.value;
      this._productService.addProduct(product);
      this._router.navigate(['/product/list']);
    }
  }
}
