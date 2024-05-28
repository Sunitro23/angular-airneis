<<<<<<< Updated upstream
=======
import { HomeModule } from './pages/home/home.module';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
import { HttpClientModule } from '@angular/common/http';
=======
import { ProductsModule } from './features/products/products.module';

>>>>>>> Stashed changes
@NgModule({
  declarations: [AppComponent],
  imports: [
    HomeModule,
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
    ProductsModule,
  ],
  providers: [{ provide: MatPaginatorIntl }],
  providers: [{ provide: MatPaginatorIntl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
