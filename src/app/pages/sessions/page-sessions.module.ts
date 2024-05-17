import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { SessionsModule } from 'src/app/features/sessions/sessions.module';
import { PageSessionComponent } from './page-session/page-session.component';

const routes: Routes = [{ path: 'list', component: PageSessionComponent }];

@NgModule({
  declarations: [PageSessionComponent],
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    SessionsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class PageSessionsModule {}
