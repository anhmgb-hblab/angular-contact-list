import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'ngx-avatar';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { routingComponent } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { LoginComponent } from './pages/login/login.component';
import { InputComponent } from './components/input/input.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    routingComponent,
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ContactComponent,
    ContactListComponent,
    LoginComponent,
    LoginComponent,
    InputComponent,
    RegisterComponent,
    NotFoundComponent,
    ContactDetailComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AvatarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
