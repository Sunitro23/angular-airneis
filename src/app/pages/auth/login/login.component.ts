import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public groupForm!: FormGroup;
  public roles: string[] = [];

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._initGroupForm();
  }

  private _initGroupForm() {
    this.groupForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.groupForm.valid) {
      const email: string = this.groupForm.controls['login'].value;
      const password: string = this.groupForm.controls['password'].value;
      if (await this._userService.findUser(email, password)) {
        this._router.navigate(['/']);
      }
    }
  }
}
