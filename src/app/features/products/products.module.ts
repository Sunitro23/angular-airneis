import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { ListProductsComponent } from './list-products/list-products.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, NgModel } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ListProductsComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [ProductService],
  exports: [ListProductsComponent],
})
export class ProductsModule {}
