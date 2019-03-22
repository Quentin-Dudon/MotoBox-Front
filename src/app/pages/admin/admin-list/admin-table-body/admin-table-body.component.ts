import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-admin-table-body',
  templateUrl: './admin-table-body.component.html',
  styleUrls: ['./admin-table-body.component.scss']
})
export class AdminTableBodyComponent implements OnInit {
  @Input() ad;
  @Output() removeAd = new EventEmitter();
  @Output() editAd = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeProduct(id: any) {
    this.removeAd.emit(id);
  }

  editProduct(id: any) {
    this.editAd.emit(id);
  }
}
