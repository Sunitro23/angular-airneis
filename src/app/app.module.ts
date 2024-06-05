import { CartModule } from './pages/cart/cart.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './pages/menu/page-menu.module';
import { AuthModule } from './pages/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { ProductsModule } from './pages/products/products.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    CartModule,
    HttpClientModule,
    AuthModule,
    MenuModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    ProductsModule,
    HomeModule,
  ],
  providers: [{ provide: MatPaginatorIntl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
