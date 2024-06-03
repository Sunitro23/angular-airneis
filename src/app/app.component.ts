import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}
  actualRoute = this.router.url;
  searchQuery: string | null = null;
  idCategory: string | number = 'all';
  title = 'AIRNEIS';

  ngOnInit() {}
  goToLink(url: string) {
    window.open(url, '_blank');
  }
  onSearchQueryChange(searchQuery: any) {
    this.searchQuery = searchQuery;
  }

  onIdCategoryChange(idCategory: any) {
    this.idCategory = idCategory;
  }
}
