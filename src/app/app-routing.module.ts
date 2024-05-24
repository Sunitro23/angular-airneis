import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminGuard } from './services/guards/admin.guard';
import { LoginGuard } from './services/guards/login.guard';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./pages/products/page-product.module').then(
        (m) => m.ProductModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
