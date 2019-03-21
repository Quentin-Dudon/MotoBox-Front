import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {
  @Input() ad;
  @Output() removeAd = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeProduct(id: any) {
    this.removeAd.emit(id);
  }
}
