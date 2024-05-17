import { Component, Input, OnInit } from '@angular/core';
import { HABILITATIONS } from '../../data/habilitation-data';
import { TYPE_SESSIONS } from '../../data/typeSession-data';
import { Session } from '../../models/type-session.model';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.scss'],
})
export class EditSessionComponent implements OnInit {
  @Input() session!: Session;
  constructor() {}
  public habilitations = HABILITATIONS;
  public typeSessions = TYPE_SESSIONS;
  ngOnInit(): void {}
}
