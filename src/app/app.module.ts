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
import { PanierComponent } from './pages/cart/panier.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/home/search/search.component';
import { ResultsComponent } from './pages/home/results/results.component';
import { FiltersComponent } from './pages/home/results/filters/filters.component';

// ROUTING
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

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
    LoginComponent,
    SigninComponent,
    SearchComponent,
    ResultsComponent,
    PanierComponent,
    FiltersComponent,
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
