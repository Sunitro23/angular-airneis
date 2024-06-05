import { UserComponent } from './components/user.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from '../orders/components/orders.component';
import { DialogCartComponent } from '../orders/dialog-cart/dialog-cart.component';
const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'orders', component: OrdersComponent },
];
@NgModule({
  declarations: [UserComponent, OrdersComponent, DialogCartComponent],
  imports: [
    MatExpansionModule,
    MatListModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    CommonModule,
    RouterModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    RouterModule.forChild(routes),
  ],
  exports: [UserComponent, OrdersComponent],
})
export class PageUserModule {}
