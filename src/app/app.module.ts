// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { Ng5SliderModule } from 'ng5-slider';

// COMPONENTS
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/home/search/search.component';
import { ResultsComponent } from './pages/home/results/results.component';

import { AddressFormComponent } from './pages/login/signin/address-form/address-form.component';
import { PersonalFormComponent } from './pages/login/signin/personal-form/personal-form.component';
import { ContactFormComponent } from './pages/login/signin/contact-form/contact-form.component';
import { PasswordFormComponent } from './pages/login/signin/password-form/password-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// ROUTING
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';

// SERVICES

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    AdminComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    ProfilComponent,
    LoginComponent, // Form
    SigninComponent,
    AddressFormComponent,
    PersonalFormComponent,
    ContactFormComponent,
    PasswordFormComponent,
    SearchComponent,
    ResultsComponent,
    CartComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng5SliderModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(AppRoutingModule),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
