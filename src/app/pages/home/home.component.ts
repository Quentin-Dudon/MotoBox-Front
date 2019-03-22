import { Component, OnInit, Input } from '@angular/core';
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
  adsToShow;
  filterValues;
  removeFiltersFunction;
  sendReset;

  constructor(private adsService: AdsService) { }

  ngOnInit() {
    this.ads = [];
    this.adsToShow = [];
    this.adsService.getAds()
      .subscribe(
        response => {
          this.ads = response;
          this.adsToShow = response;
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

  public onFiltered($event) {
    this.sendReset = false;
    console.log('list all adds', $event)

    if (this.filterValues == null) this.filterValues = $event;
    this.filterValues = this.extend(this.filterValues, $event)
    this.adsToShow = this.ads;

    if (this.filterValues.brandName !== '' && this.filterValues.brandName != null) {
      this.adsToShow = this.adsToShow.filter(ad => ad.brand === this.filterValues.brandName);
    }
    if (this.filterValues.modelName !== '' && this.filterValues.modelName != null) {
      this.adsToShow = this.adsToShow.filter(ad => ad.model === this.filterValues.modelName);
    }
    if (this.filterValues.yearName !== '' && this.filterValues.yearName != null) {
      this.adsToShow = this.adsToShow.filter(ad => ad.year == this.filterValues.yearName)
    }
    if (this.filterValues.adCategory !== '' && this.filterValues.adCategory != null) {
      this.adsToShow = this.adsToShow.filter(ad => ad.category == this.filterValues.adCategory)
      console.log('2nd filter', this.ads)
    }
  }

  public removeFiltered() {
    console.log('CLEAR FILTERS');
    this.filterValues = {};
    this.adsToShow = this.ads;
    this.sendReset = true;
    console.log(this.ads)
  }

  private extend(obj, src) {
    Object.keys(src).forEach(function (key) { obj[key] = src[key]; });
    return obj;
  }
}
