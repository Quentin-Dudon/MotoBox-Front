import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() ads;

  @Output() filterCategory = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onFiltered($event) {
    console.log('yolo')
    this.filterCategory.emit($event)
  }
}
