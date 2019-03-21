import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() ads;

  @Output() filterCategory = new EventEmitter<any>();

  formValues = new Object();

  isShowCategory = false;
  bgColor: boolean = true;
  clickValue: string;

  constructor() {
  }

  ngOnInit() {
  }

  getValue() {
    this.clickValue = 'Moteur complet';
    this.formValues['adCategory'] = this.clickValue;
    this.filterCategory.emit(this.formValues);

    console.log(this.clickValue);
  }

  changeColor() {
    this.bgColor = !this.bgColor;
  }


}
