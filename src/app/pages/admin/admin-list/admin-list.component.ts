import {Component, OnInit} from '@angular/core';
import {AdsService} from '../../../services/ads/ads.service';

import {Succed} from '../../../shared/error/succed';
import {NotFoundError} from '../../../shared/error/not-found-error';
import {ServerError} from '../../../shared/error/server-error';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
  ads: any;
  error: string;

  constructor(private adsService: AdsService, private router: Router) {
  }

  ngOnInit() {
    this.getUserAds();
  }

  private async getUserAds() {

    // await this.adsService.getUserAds().subscribe( // remplacer la ligne ci-dessous par celle-ci
    await this.adsService.getAds().subscribe(
      response => {
        this.ads = response;
      },
      error => this.handleError(error)
    );
    console.log('MES ADS', this.ads);
  }

  addAd() {
    console.log('ajouter');
    this.router.navigate([`admin/create`]);
  }
  editAd(id) {
    console.log('modifier');
    this.router.navigate([`admin/edit/${id}`]);
  }
  removeAd(id) {
    console.log('supprimer', id);
    this.adsService.delete(id).subscribe( error => this.handleError(error));
  }

  // -------------- GET ERRORS TYPE -------------- //
  private handleError(error) {
    let message = '';
    if (error instanceof Succed) {
      return;
    }
    if (error instanceof NotFoundError) {
      message = 'Le panier est vide.';
    } else if (error.status instanceof ServerError) { // serveur KO
      message = 'le serveur n\'a pas répondu, veuillez réessayer ulterieurement.';
    } else { // others
      message = 'Une erreur inattendue s\'est produite, veuillez réessayer.';
    }
    this.error = message;
  }
}
