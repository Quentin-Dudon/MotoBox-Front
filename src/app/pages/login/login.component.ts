import {Component, OnInit} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupFormModalName = new FormControl('', Validators.required);
  signupFormModalEmail = new FormControl('', Validators.email);
  signupFormModalPassword = new FormControl('', Validators.required);
  form;

  constructor(public modalRef: MDBModalRef,
              private fb: FormBuilder) {
    this.form = this.fb.group({
      civility: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      isJunkyard: false,
      contacts: this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        phone: [''],
      }),
      address: this.fb.group({
        street: [''],
        postalCode: [''],
        city: [''],
        country: [''],
      }),
    });
  }

  ngOnInit() {
  }

}
