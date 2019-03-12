import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  hideTitle = true;
  isShow = false;

  constructor() { }

  ngOnInit() {
  }

  hideBrandTitleFunc() {
    this.hideTitle = false;
  }
}
