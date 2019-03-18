import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-response',
  templateUrl: './bar-response.component.html',
  styleUrls: ['./bar-response.component.scss']
})
export class BarResponseComponent implements OnInit {
  @Input() mockAds;
  constructor() { }

  ngOnInit() {
  }

}
