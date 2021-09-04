import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import * as bcryptjs from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(12),
    ])
  });
  isWrongCredential = false;

  private userApiUrl = 'http://localhost:5000/users';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
  }

  handleAuthentication(data): void {
    const { email, password } = this.formGroup.controls;
    const user = data.find(user => user.email === email.value);
    if (!user) {
      this.isWrongCredential = true;
      return;
    }
    const isMatchPassword = bcryptjs.compareSync(password.value, user.password);
    if (!isMatchPassword) {
      this.isWrongCredential = true;
      return;
    }
    window.localStorage.setItem('isAuthenticated', 'true');
    this.router.navigate(['/contacts']);
    return;
  }

  handleLogin(): void {
    this.isWrongCredential = false;
    if (this.formGroup.invalid) return;
    this.http.get<User[]>(this.userApiUrl).subscribe(res => {
      this.handleAuthentication(res);
    });
  }
}
