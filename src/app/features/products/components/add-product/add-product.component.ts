import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { CreateProductDTO } from '../../../../models/type-product.model';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  public groupForm!: FormGroup;
  public get productFromForm(): CreateProductDTO {
    return this.groupForm.value;
  }

  constructor(
    private _productService: ProductService,
    private _fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._initGroupForm();
  }

  private _initGroupForm() {
    this.groupForm = this._fb.group({
      name: ['', Validators.required],
      first_name: ['', Validators.required],
      email: ['', Validators.required],
      centre: [false],
      organisme: [false],
      perenne: [false],
      occasionnel: [false],
    });
  }

  onSubmit() {
    this.groupForm.markAllAsTouched();
    if (this.groupForm.valid) {
      this._productService
        .addProduct(this.productFromForm)
        .pipe(take(1))
        .subscribe(() => {
          this._router.navigate(['/product/list']);
        });
    }
  }
}
