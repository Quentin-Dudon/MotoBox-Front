import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {IconsModule, MDBBootstrapModule} from 'angular-bootstrap-md';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProfilComponent } from './pages/profil/profil.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/home/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    AdminComponent,
    HomeComponent,
    CartComponent,
    ContactComponent,
    FooterComponent,
    ProfilComponent,
    LayoutComponent,
    LoginComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(AppRoutingModule),
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
