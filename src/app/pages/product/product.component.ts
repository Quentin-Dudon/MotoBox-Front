import { AdsService } from './../../services/ads/ads.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  adDetail;

  constructor(private route: ActivatedRoute, private adsService: AdsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.adsService.getAd(this.id).subscribe(res => {
      this.adDetail = res;
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
