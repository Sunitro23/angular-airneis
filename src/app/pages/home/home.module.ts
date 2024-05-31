import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './components/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CarouselModule, MatCardModule, MatGridListModule],
  providers: [],
  exports: [HomeComponent],
})
export class HomeModule {}
