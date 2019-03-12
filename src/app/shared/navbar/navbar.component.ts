import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openLoginSigninModal() {
    console.log('open modal');
    // this.modalRef = this.modalService.show(AddAccesComponent, {class: 'modal-lg'});
    // this.modalRef.content.onClose = (newAcces) => {
    //   this.modalRef.hide();
    //   this.accesses.unshift(newAcces);
  }

}
