import { Injectable } from '@angular/core';
import { SESSIONS } from '../features/sessions/data/sessions-data';
import { Session } from '../features/sessions/models/type-session.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _sessions: Session[] = SESSIONS;
  getSessions(): Observable<Session[]> {
    return of(this._sessions);
  }
  constructor() {}
}
