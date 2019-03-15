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
import { AdminComponent } from './pages/admin/admin.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/home/search/search.component';
import { ResultsComponent } from './pages/home/results/results.component';
import { FiltersComponent } from './pages/home/results/filters/filters.component';
import { ResponseComponent } from './pages/home/results/response/response.component';
import { AdsDetailsComponent } from './pages/home/results/response/ads-details/ads-details.component';
import { BarResponseComponent } from './pages/home/results/response/bar-response/bar-response.component';
import { ProductComponent } from './pages/product/product.component';

// modal connexion
import { ConnexionModalComponent } from './pages/connexion-modal/connexion-modal.component';
import { LoginFormComponent } from './pages/connexion-modal/login-form/login-form.component';
import { SigninFormComponent } from './pages/connexion-modal/signin-form/signin-form.component';

import { RoleFormComponent } from './pages/connexion-modal/signin-form/role-form/role-form.component';
import { AddressFormComponent } from './pages/connexion-modal/signin-form/address-form/address-form.component';
import { PersonalFormComponent } from './pages/connexion-modal/signin-form/personal-form/personal-form.component';
import { ContactFormComponent } from './pages/connexion-modal/signin-form/contact-form/contact-form.component';
import { PasswordFormComponent } from './pages/connexion-modal/signin-form/password-form/password-form.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';


// ROUTING
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


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
    ConnexionModalComponent, // modal
    LoginFormComponent,
    SigninFormComponent,
    RoleFormComponent,
    AddressFormComponent,
    PersonalFormComponent,
    ContactFormComponent,
    PasswordFormComponent, // end modal
    SearchComponent,
    ResultsComponent,
    CartComponent,
    FiltersComponent,
    ResponseComponent,
    NotFoundComponent,
    AdsDetailsComponent,
    BarResponseComponent,
    ProductComponent
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
