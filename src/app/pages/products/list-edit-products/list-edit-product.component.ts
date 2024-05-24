import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { EditProductComponent } from 'src/app/features/products/components/edit-product/edit-product.component';
import { Product } from '../../../models/type-product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-list-edit-product',
  templateUrl: './list-edit-product.component.html',
  styleUrls: ['./list-edit-product.component.scss'],
})
export class ListEditProductComponent implements OnInit {
  public selectedProduct?: Product | null;
  public products: Product[] = [];
  public responsiveHeight: any;
  public responsiveWidth: any;
  public isTooSmall?: boolean;

  constructor(
    private _productService: ProductService,
    public dialog: MatDialog,
    private _responsive: BreakpointObserver
  ) {}

  private _setResponsive() {
    this._responsive.observe(Breakpoints.Web).subscribe((result) => {
      this.isTooSmall = true;
      this.responsiveHeight = '100%';
      this.responsiveWidth = '100%';
      if (result.matches) {
        this.isTooSmall = false;
        this.responsiveHeight = 'auto';
        this.responsiveWidth = '60%';
      }
    });
  }

  ngOnInit(): void {
    this._loadProducts();
    this._setResponsive();
  }

  private _loadProducts(): void {
    this._productService
      .getProducts()
      .pipe(take(1))
      .subscribe((products) => (this.products = products));
  }

  public closeModal() {
    this.selectedProduct = null;
  }

  deleteProduct(product: Product) {
    this._productService
      .deleteProduct(product)
      .pipe(take(1))
      .subscribe(() => this._loadProducts());
  }

  editProduct(product: Product) {
    this._productService
      .updateProduct(product)
      .pipe(take(1))
      .subscribe(() => this._loadProducts());
  }

  public dialogEditProduct(product: Product) {
    this.selectedProduct = product;
    const dialogProductEdit = this.dialog.open(EditProductComponent, {
      height: this.responsiveHeight,
      width: this.responsiveWidth,
      maxWidth: '100vw',
      maxHeight: '100vh',
    });
    dialogProductEdit.componentInstance.product = product;
    dialogProductEdit.componentInstance.editProduct.subscribe(
      (editedProduct) => {
        this.editProduct(editedProduct);
        dialogProductEdit.close();
        this.selectedProduct = null;
      }
    );
  }
}
