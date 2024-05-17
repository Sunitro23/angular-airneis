import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    MatExpansionModule,
    MatListModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [MenuComponent],
})
export class MenuModule {}
