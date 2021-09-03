import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  handleLogin() {
    console.log('logged in');
  }

  handleLogout() {
    console.log('logged out');
  }
}
