import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { checkMatchPassword } from '../../utils/validation.directive';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import * as bcryptjs from 'bcryptjs';
import { STATUS_FORM_ENUM } from '../../constants/form';

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
  isExisted = false;
  isFormValid = false;

  private userApiUrl = 'http://localhost:5000/users';

  constructor(private http: HttpClient, private router: Router) {}

  watchFormChanges() {
    this.formGroup.statusChanges.subscribe(status => {
      if (status === STATUS_FORM_ENUM.VALID) {
        this.isFormValid = true;
      } else {
        this.isFormValid = false;
      }
    })
  }

  ngOnInit(): void {
    this.watchFormChanges();
  }

  handleAuthentication(data) {
    const { email, password } = this.formGroup.controls;
    const user = data.find(user => user.email === email.value);
    if (user) {
      this.isExisted = true;
      return;
    }
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(password.value, salt);
    this.http.post<User[]>(this.userApiUrl, { email: email.value, password: hash }).subscribe(res => {
      this.router.navigate(['/login']);
    });
  }

  handleRegister(): void {
    this.isExisted = false;
    if (this.formGroup.invalid) return;
    this.http.get<User[]>(this.userApiUrl).subscribe(res => {
      this.handleAuthentication(res);
    });
  }

}
