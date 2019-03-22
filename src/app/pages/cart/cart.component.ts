import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {Succed} from '../../shared/error/succed';
import {NotFoundError} from '../../shared/error/not-found-error';
import {ServerError} from '../../shared/error/server-error';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  ads: any;
  error: string;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.error = '';
    this.getCart();
  }

  // -------------- GET ADS -------------- //
  private async getCart() {
    // From Database
    // TODO : decommenter  apres creation DB cart
    // const dbCart = await this.cartService.get().subscribe(
    //   response => response,
    //   error => this.handleError(error)
    // );
    // const localCart = this.cartService.localGet();

    // this.ads = (this.error !== '') ? {} : this.removeDuplicatesCarts(dbCart, localCart);

    // TODO: supprimer apres creation DB cart

    // From localStorage
    this.ads = await this.cartService.localGet();
  }

  private removeDuplicatesCarts(dbCart, localCart) {
    const uniqueDbCarts = dbCart.map((cart) => {
      if (!localCart.includes(cart)) {
        return cart;
      }
    });
    return {...localCart, ...uniqueDbCarts};
  }

  // -------------- REMOVE AD -------------- //
  public removeAd(id: any): void {
    // Form Database
    // TODO : decommenter  apres creation DB cart
    // this.cartService.delete(id).subscribe(
    //   error => {
    //     if (!(error instanceof Succed)) {
    //       this.error = 'Une erreur s\'est produite lors de la suppression';
    //     }
    //   });

    // From localStorage
    const index = this.ads.findIndex(ad => ad.id === id);
    this.ads.splice(index, 1);
    this.cartService.localDeleteProduct(id, index);
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
