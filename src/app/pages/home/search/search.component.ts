import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
//import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  hideTitle = true;
  isShow = false;

  //Slider
  value: number = 1950;
  options: Options = {
    floor: 1950,
    ceil: 2019
  };

  constructor() { }

  ngOnInit() {
  }

  hideBrandTitleFunc() {
    this.hideTitle = false;
  }
}
