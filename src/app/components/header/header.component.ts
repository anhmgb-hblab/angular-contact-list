import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { removeUsername, setAuthenticated } from '../../helpers/localStorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  username: string = '';
  usernameSubscription: Subscription;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.usernameSubscription = this.auth.currentUsername.subscribe(username => this.username = username);
  }
  
  ngOnDestroy(): void {
    this.usernameSubscription.unsubscribe();
  }

  handleLogout(): void {
    this.auth.handleRemoveUsernameAfterLogout();
    setAuthenticated('false');
    removeUsername();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    const unAuthorizedRoutes = ['/login', '/register'];
    return !unAuthorizedRoutes.includes(this.router.url);
  }

  handleNavigateListContactPage() {
    this.router.navigate(['/contacts']);
  }

  handleNavigateAboutPage() {
    this.router.navigate(['/about']);
  }
}
 