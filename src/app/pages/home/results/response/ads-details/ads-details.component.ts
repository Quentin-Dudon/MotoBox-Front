import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.component.html',
  styleUrls: ['./ads-details.component.scss']
})
export class AdsDetailsComponent implements OnInit {

  @Input() ad;
  constructor() { }

  ngOnInit() {
  }

}
