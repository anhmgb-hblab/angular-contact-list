import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { checkMatchPassword } from '../../utils/validation.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(12),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(12),
      checkMatchPassword(),
    ])
  });

  constructor() { }

  ngOnInit(): void {
  }

  handleRegister(): void {
    console.log(this.formGroup);
  }

}
