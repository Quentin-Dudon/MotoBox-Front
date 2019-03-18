import {Component, OnInit} from '@angular/core';
import {AuthService} from './../../services/auth.service';
import {MDBModalRef} from 'angular-bootstrap-md';

@Component({
  selector: 'connexion-modal',
  templateUrl: './connexion-modal.component.html',
  styleUrls: ['./connexion-modal.component.scss']
})
export class ConnexionModalComponent implements OnInit {
  isLogin = false;
  isJunkyard: false;

  // modal
  onClose: any;
  errorMessage: any;
  loading = false;

  constructor(public modalRef: MDBModalRef,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.setToken();
  }

  // -------------- IS LOGIN OR SIGNIN ? -------------- //
  public isLoginConnexion() {
    this.isLogin = true;
  }
  public isSigninConnexion() {
    this.isLogin = false;
  }
  // -------------- SUBMIT FORM -------------- //
  private submitLogin(user) {
    console.log('OBJ_PARTAGE', JSON.stringify(user));
    // TODO : DECOMMENTER APRES AVOIR FAIT LE SERVICE
    // this.loginService.login(user).toPromise().then((val) => {
    //   console.log(val.errors);
    //   if (!val.errors) { /* Si la requete est OK */
    //     localStorage.setItem('currentUser', JSON.stringify(val.data.user))
    //     // on change la route
    //     this.router.navigate([getRoute('users').path]);
    //   }
    // });
  }
  public submitSignin(user) {
    console.log('OBJ_PARTAGE', JSON.stringify(user));
    // this.loginService.login(user).toPromise().then((val) => {
    //   console.log(val.errors);
    //   if (!val.errors) { /* Si la requete est OK */
    //     localStorage.setItem('currentUser', JSON.stringify(val.data.user))
    //     // on change la route (si il faut)
    //     this.router.navigate([getRoute('users').path]);
    //   }
    // });
  }
}
