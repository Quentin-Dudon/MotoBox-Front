import { Component, OnInit } from '@angular/core';
import data from '../../../../../assets/mocks/ads.json';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  mockAds = data;

  constructor() { }

  ngOnInit() {
  }

}
