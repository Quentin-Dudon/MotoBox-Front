import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import {ConnexionModalComponent} from '../../pages/connexion-modal/connexion-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  ngOnInit() {
  }

  openLoginSigninModal() {
    this.modalRef = this.modalService.show(ConnexionModalComponent);
  }
}
