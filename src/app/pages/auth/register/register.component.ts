import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  async onSubmit() {
    if (this.groupForm.valid) {
      const lastName: string = this.groupForm.controls['lastName'].value;
      const firstName: string = this.groupForm.controls['firstName'].value;
      const street: string = this.groupForm.controls['street'].value;
      const zipCode: string = this.groupForm.controls['zipCode'].value;
      const city: string = this.groupForm.controls['city'].value;
      const phone: string = this.groupForm.controls['phone'].value;
      const email: string = this.groupForm.controls['email'].value;
      const password: string = this.groupForm.controls['password'].value;
      const response = await this._userService.createUser(lastName, firstName, street, zipCode, city, phone, email, password);
      if (response === 'Success') {
        this._router.navigate(['/']);
      }else{
        alert(response);
      }
      }
  }
}
