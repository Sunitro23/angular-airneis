import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, NgModel } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from 'src/app/features/products/list-products/list-products.component';
import { OneProductComponent } from 'src/app/features/products/one-product/one-product.component';
import { PageProductsComponent } from './components/page-products.component';
const routes: Routes = [
  { path: 'products/list', component: PageProductsComponent },
  { path: 'products/:id', component: OneProductComponent },
];

@NgModule({
  declarations: [
    ListProductsComponent,
    OneProductComponent,
    PageProductsComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ],
  providers: [ProductService],
  exports: [PageProductsComponent],
})
export class ProductsModule {}
