import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { sendRequest } from 'selenium-webdriver/http';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnChanges {

  @Input() ads;

  @Output() filterCategory = new EventEmitter<any>();

  formValues = new Object();

  isShowCategory = false;
  selectedCategory: string;
  showCategoryMoteur: boolean = false;
  @Input() sendReset;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.sendReset) this.resetCategory();
  }

  toggleFilter(category) {
    if (this.selectedCategory == category) {
      this.selectedCategory = '';
    } else {
      this.selectedCategory = category;
    }
    this.formValues['adCategory'] = this.selectedCategory;
    this.filterCategory.emit(this.formValues);
  }

  resetCategory() {
    this.selectedCategory = '';
  }

  onChangeIcon() {
    this.showCategoryMoteur = !this.showCategoryMoteur;
  }
}
