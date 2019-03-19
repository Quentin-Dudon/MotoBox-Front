import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AdsService } from '../../services/ads/ads.service';
import { NotFoundError } from '../../shared/error/not-found-error';
import { AccessDeniedError } from '../../shared/error/access-denied-error';
import { ServerError } from '../../shared/error/server-error';
import { AppError } from '../../shared/error/app-error';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginFormModalEmail = new FormControl('', Validators.email);
  loginFormModalPassword = new FormControl('', Validators.required);

  ads: any;

  constructor(private adsService: AdsService) { }

  ngOnInit() {
    this.ads = [];
    this.adsService.getAds()
      .subscribe(
        response => {
          this.ads = response;
          console.log('ADS :::', this.ads);
        },
        (error: AppError) => {
          this.handleError(error);
        });
  }

  // -------------- ERRORS -------------- //
  private handleError(error) {
    let message = '';
    console.log('ERROR ::', error);
    console.log('Status ::', error.status);

    if (error instanceof NotFoundError) { // utilisateur non trouvée ;
      message = 'Le produit demandé n\'existe pas.';
    } else if (error.status instanceof AccessDeniedError) { // acces refusé
      message = 'Acces refusé.';
    } else if (error.status instanceof ServerError) { // serveur KO
      message = 'le serveur n\'a pas répondu, veuillez réessayer ulterieurement.';
    } else { // others
      message = 'Une erreur inattendue s\'est produite, veuillez réessayer de vous connecter.';
    }
  }
}
