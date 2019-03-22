import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { sendRequest } from 'selenium-webdriver/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() ads;
  @Input() sendReset;

  @Output() filterCategory = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onFiltered($event) {
    console.log('yolo')
    this.filterCategory.emit($event)
  }
}
