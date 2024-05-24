import { Component } from '@angular/core';
import { take } from 'rxjs';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private _userService: UserService,
  ) {}

  title = 'formation-tst';

  ngOnInit() {
    
  }
  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
