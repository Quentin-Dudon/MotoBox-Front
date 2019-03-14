import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  isShowCategory = false;
  bgColor: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  changeColor() {
    this.bgColor = !this.bgColor;
  }
}
