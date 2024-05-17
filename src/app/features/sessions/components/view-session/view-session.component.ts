import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Session } from '../../models/type-session.model';
@Component({
  selector: 'app-view-session',
  templateUrl: './view-session.component.html',
  styleUrls: ['./view-session.component.scss'],
})
export class ViewSessionComponent {
  @Input() sessions?: Session[];
  @Output() sendSession = new EventEmitter<Session>();
  public displayedColumns: string[] = [
    'name',
    'nbJour',
    'module',
    'habilitation',
    'typeSession',
    'edit',
  ];
  public selectedSession?: Session;
  onSelect(session: Session): void {
    this.sendSession.emit(session);
  }
}
