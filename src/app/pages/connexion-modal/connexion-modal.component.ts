import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {MDBModalRef} from 'angular-bootstrap-md';
import {Router} from '@angular/router';

import {NotFoundError} from '../../shared/error/not-found-error';
import {AccessDeniedError} from '../../shared/error/access-denied-error';
import {ServerError} from '../../shared/error/server-error';
import {AppError} from '../../shared/error/app-error';
import {Succed} from '../../shared/error/succed';

@Component({
  selector: 'connexion-modal',
  templateUrl: './connexion-modal.component.html',
  styleUrls: ['./connexion-modal.component.scss']
})
export class ConnexionModalComponent implements OnInit {
  loginErrorMessage: string;
  signinErrorMessage: string;

  isLogin = false;
  isJunkyard: false;

  constructor(public modalRef: MDBModalRef,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  // -------------- IS LOGIN OR SIGNIN ? -------------- //
  public isLoginConnexion() {
    this.isLogin = true;
  }

  public isSigninConnexion() {
    this.isLogin = false;
  }

  // -------------- SUBMIT FORM -------------- //
  private userLogin(credentials): void {
    // console.log('OBJ_PARTAGE', JSON.stringify(credentials));
    this.userService.login(credentials)
      .subscribe(
        token => {
          const value = token.headers.get('Authorization');
          localStorage.setItem('MotoBoxToken', value);
          this.modalRef.hide();
          this.router.navigate([this.router.url]);
        },
        (error: AppError) => {
          this.handleError(error, true);
        });
  }

  public userSignin(user): void {
    // console.log('OBJ_PARTAGE', JSON.stringify(user));
    this.userService.create(user).subscribe(
      response => {},
      (error: AppError) => {
        this.handleError(error, false);
      });
  }

  // -------------- ERRORS -------------- //
  private handleError(error, isLogin) {
    let message = '';
    console.log('ERROR ::', error);
    console.log('Status ::', error.status);
    if (error instanceof Succed) {
      return;
    }
    if (error instanceof NotFoundError) { // utilisateur non trouvée ;
      message = 'L\'utilisateur demandé n\'existe pas.';
    } else if (error.status instanceof AccessDeniedError) { // acces refusé
      message = 'Acces refusé.';
    } else if (error.status instanceof ServerError) { // serveur KO
      message = 'le serveur n\'a pas répondu, veuillez réessayer ulterieurement.';
    } else { // others
      message = 'Une erreur inattendue s\'est produite, veuillez réessayer.';
    }
    if (isLogin) {
      this.loginErrorMessage = message;
    } else {
      this.signinErrorMessage = message;
    }
  }
}
