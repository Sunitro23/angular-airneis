import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductImages } from 'src/app/models/type-product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss'],
})
export class OneProductComponent implements OnInit {
  productId!: number | null;
  product!: ProductImages;
  constructor(
    private route: ActivatedRoute,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = id !== null ? parseInt(id) : null;
    this.loadProduct();
  }
  loadProduct(): void {
    this._productService.getProductById(this.productId).then((data) => {
      this.product = data;
    });
  }
}
