import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { ProductFeatureModule } from 'src/app/features/products/product.module';
import { ListEditProductComponent } from './list-edit-products/list-edit-product.component';
import { PageAddProductComponent } from './page-add-product/page-add-product.component';
import { AdminGuard } from 'src/app/services/guards/admin.guard';

const routes: Routes = [
  { path: 'list', component: ListEditProductComponent },
  { path: 'add', component: PageAddProductComponent, canActivate: [AdminGuard] },
];

@NgModule({
  declarations: [ListEditProductComponent, PageAddProductComponent],
  imports: [
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
    ProductFeatureModule,
    RouterModule.forChild(routes),
  ],
})
export class ProductModule {}
