import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getUsername } from '../helpers/localStorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usernameSource = new BehaviorSubject(getUsername());
  currentUsername = this.usernameSource.asObservable();

  constructor() { }

  handleChangeUsernameAfterLogin(username: string) {
    this.usernameSource.next(username);
  }

  handleRemoveUsernameAfterLogout() {
    this.usernameSource.next('');
  }
}
