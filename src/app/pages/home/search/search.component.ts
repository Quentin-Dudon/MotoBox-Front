import { Component, OnInit, Input, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';
import { Options } from 'ng5-slider';
import _ from 'lodash';

@Pipe({
  name: 'removeDuplicateBrand'
})
export class RemoveDuplicateBrandPipe implements PipeTransform {

  transform(value: any): any {
    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'brand');
    }
    return value;
  }
}

@Pipe({
  name: 'removeDuplicateModel'
})
export class RemoveDuplicateModelPipe implements PipeTransform {

  transform(value: any): any {
    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'model');
    }
    return value;
  }
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() ads;
  @Output() filterValues = new EventEmitter<any>();

  formValues = new Object();

  hideTitle = true;
  isShow = false;
  selectedBrand = '';
  selectedModel = '';

  //Slider
  sliderValue: number = 2019;
  sliderOptions: Options = {
    floor: 1950,
    ceil: 2019
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.formValues['brandName'] = this.selectedBrand;
    this.formValues['modelName'] = this.selectedModel;
    this.formValues['yearName'] = this.sliderValue;
    this.filterValues.emit(this.formValues);
  }
}
