// MODULES
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Ng5SliderModule} from 'ng5-slider';
// bootstrap
import {MDBBootstrapModule} from 'angular-bootstrap-md';
// material
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule, MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

// COMPONENTS
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
// admin page
import { AdminComponent } from './pages/admin/admin.component';
import { AdminEditComponent } from './pages/admin/admin-edit/admin-edit.component';
import { AdminCreateComponent } from './pages/admin/admin-create/admin-create.component';
// profil
import {ProfilComponent} from './pages/profil/profil.component';
// about
import {AboutComponent} from './pages/about/about.component';
// contact
import {ContactComponent} from './pages/contact/contact.component';
// cart
import {CartComponent} from './pages/cart/cart.component';
// home
import {HomeComponent} from './pages/home/home.component';
import {SearchComponent} from './pages/home/search/search.component';
import {ResultsComponent} from './pages/home/results/results.component';
import {FiltersComponent} from './pages/home/results/filters/filters.component';
import {ResponseComponent} from './pages/home/results/response/response.component';
import {AdsDetailsComponent} from './pages/home/results/response/ads-details/ads-details.component';
import {BarResponseComponent} from './pages/home/results/response/bar-response/bar-response.component';
// product
import {ProductComponent} from './pages/product/product.component';
// connexion
import {ConnexionModalComponent} from './pages/connexion-modal/connexion-modal.component';
// login modal
import {LoginFormComponent} from './pages/connexion-modal/login-form/login-form.component';
// signin modal
import {SigninFormComponent} from './pages/connexion-modal/signin-form/signin-form.component';
import {RoleFormComponent} from './pages/connexion-modal/signin-form/role-form/role-form.component';
import {AddressFormComponent} from './pages/connexion-modal/signin-form/address-form/address-form.component';
import {PersonalFormComponent} from './pages/connexion-modal/signin-form/personal-form/personal-form.component';
import {ContactFormComponent} from './pages/connexion-modal/signin-form/contact-form/contact-form.component';
import {PasswordFormComponent} from './pages/connexion-modal/signin-form/password-form/password-form.component';
// not found
import {NotFoundComponent} from './pages/not-found/not-found.component';

// ROUTING
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';

// SERVICES
import {ContactService} from './services/contact.service';
import {UserService} from './services/user/user.service';
import {CartService} from './services/cart/cart.service';
import {AdsService} from './services/ads/ads.service';


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
    AdminEditComponent,
    AdsDetailsComponent,
    BarResponseComponent,
    ProductComponent,
    AdminCreateComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng5SliderModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(AppRoutingModule),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  providers: [
    ContactService,
    UserService,
    AdsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
