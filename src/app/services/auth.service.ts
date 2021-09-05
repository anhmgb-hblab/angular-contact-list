import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usernameSource = new BehaviorSubject('');
  currentUsername = this.usernameSource.asObservable();

  constructor() { }

  handleChangeUsernameAfterLogin(username: string) {
    this.usernameSource.next(username);
  }

  handleRemoveUsernameAfterLogout() {
    this.usernameSource.next('');
  }
}
