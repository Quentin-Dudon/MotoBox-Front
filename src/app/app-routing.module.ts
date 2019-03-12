import {Routes} from '@angular/router';

// COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutComponent } from './pages/about/about.component';
import {LoginComponent} from './pages/login/login.component';
import {SigninComponent} from './pages/signin/signin.component';

export const AppRoutingModule: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent, outlet: 'modal' },
  { path: 'signin', component: SigninComponent, outlet: 'modal' }
];
