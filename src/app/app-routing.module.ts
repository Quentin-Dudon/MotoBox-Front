import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth-guard.service';

// COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
<<<<<<< HEAD
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
=======
>>>>>>> 310db3809ce2381b45c0d7eeb3700a723a8efcf6
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {ConnexionModalComponent} from './pages/connexion-modal/connexion-modal.component';

export const AppRoutingModule: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'profil', component: ProfilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: ConnexionModalComponent, outlet: 'modal' },
  { path: '**', component: NotFoundComponent },
];
