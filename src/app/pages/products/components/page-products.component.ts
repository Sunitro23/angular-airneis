import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss'],
})
export class PageProductsComponent implements OnInit {
  @Input() searchQuery!: string | null;
  @Input() idCategory!: string | number;
  ngOnInit(): void {}
}
