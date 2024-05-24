import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatCardModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        RouterModule.forChild([
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ])
    ]
})
export class AuthModule { }