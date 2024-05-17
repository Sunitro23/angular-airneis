import { Component } from '@angular/core';
import { Session } from 'src/app/features/sessions/models/type-session.model';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-page-session',
  templateUrl: './page-session.component.html',
  styleUrls: ['./page-session.component.scss'],
})
export class PageSessionComponent {
  constructor(private _sessionService: SessionService) {}

  public selectedSession?: Session | null;

  public sessions: Session[] = [];

  ngOnInit(): void {
    this.getSessions();
  }

  private getSessions(): void {
    this._sessionService
      .getSessions()
      .subscribe((sessions) => (this.sessions = sessions));
  }

  close() {
    this.selectedSession = null;
  }
}
