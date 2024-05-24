import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { ViewCardProductComponent } from './components/view-card-product/view-card-product.component';

@NgModule({
  declarations: [
    EditProductComponent,
    ViewProductComponent,
    AddProductComponent,
    ViewCardProductComponent,
  ],
  imports: [
    MatDialogModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatMenuModule,
    SharedModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [
    ViewProductComponent,
    AddProductComponent,
    EditProductComponent,
    ViewCardProductComponent,
  ],
})
export class ProductFeatureModule {}
