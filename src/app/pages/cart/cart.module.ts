import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogOrderComponent } from './dialog-order/dialog-order.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
const routes = [{ path: '', component: CartComponent }];
@NgModule({
  declarations: [CartComponent, DialogOrderComponent],
  imports: [
    CommonModule,
    CarouselModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  exports: [CartComponent],
})
export class CartModule {}
