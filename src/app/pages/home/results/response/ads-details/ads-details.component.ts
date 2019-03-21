import { Component, OnInit, Input } from '@angular/core';
import {CartService} from '../../../../../services/cart/cart.service';
import {Succed} from '../../../../../shared/error/succed';

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.component.html',
  styleUrls: ['./ads-details.component.scss']
})
export class AdsDetailsComponent implements OnInit {
  @Input() ad;
  addCartError;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addCart(ad) {
    // this.cartService.create(ad.id, ad).subscribe(
    //   error => {
    //     if (!(error instanceof Succed)) {
    //       this.addCartError = 'Une erreur est survenue lors de l\'ajout au panier, veuillez reesayer.'
    //     }
    //   }
    // );
    this.cartService.localAddProduct(ad);
  }
}
