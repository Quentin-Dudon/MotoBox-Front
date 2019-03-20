import { Component, OnInit, DoCheck } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ConnexionModalComponent } from '../../pages/connexion-modal/connexion-modal.component';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {
  modalRef: MDBModalRef;
  isLoggedIn: boolean;

  constructor(private modalService: MDBModalService,
              private authService: AuthService,
              private route: Router) { }

  ngDoCheck() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  ngOnInit() {
  }

  openLoginSigninModal() {
    this.modalRef = this.modalService.show(ConnexionModalComponent);
  }

  logout() {
    localStorage.removeItem('MotoBoxToken');
    this.route.navigate(['/']);
  }
}
