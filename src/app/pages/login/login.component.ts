import {Component, OnInit} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

import {UsernameValidators} from '../../shared/validators/username.valitors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form;
  isLogin = false;

  // modal
  onClose: any;
  errorMessage: any;
  loading = false;

  constructor(public modalRef: MDBModalRef, private fb: FormBuilder) {
      this.form = this.fb.group({
        civility: [''],
        firstName: [''],
        lastName: [''],
        isJunkyard: false,
        email: [''],
        password: [''],
        phone: [''],
        street: [''],
        postalCode: [''],
        city: [''],
        country: [''],
      });
  }

  ngOnInit() {
  }

  public getLoginForm() {
    this.isLogin = true;
    console.log('isLogin', this.isLogin);

    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        UsernameValidators.cannotContainSpace
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
      ]],
    });
  }


  public getSigninForm() {
    this.isLogin = false;
    console.log('isLogin', this.isLogin);

    this.form = this.fb.group({
      civility: ['', [
        Validators.required,
        Validators.pattern('/^(Mr|Mme)$/')
      ]],
      firstName: ['', [
        Validators.required,
        UsernameValidators.cannotContainSpace
      ]],
      lastName: ['', [
        Validators.required,
        UsernameValidators.cannotContainSpace
      ]],
      isJunkyard: false,
      email: ['', [
        Validators.required,
        Validators.email,
        UsernameValidators.cannotContainSpace
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/),
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^((\+)33|0)[1-9](\d{2}){4}$/)
      ]],
      street: ['', [
        Validators.required
      ]],
      postalCode: ['', [
        Validators.required,
        Validators.pattern(/^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$/)
      ]],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  public submit() {
    console.log('USER SUBMIT', this.form.value);
    this.loading = true;

    if (this.isLogin) {
      this.login(this.form.value);
    } else {
      this.signin(this.form.value);
    }
  }

  private login(user) {
    console.log('OBJ_PARTAGE', JSON.stringify(user));

    // TODO : DECOMMENTER APRES AVOIR FAIT LE SERVICE
    // this.loginService.login(user).toPromise().then((val) => {
    //   console.log(val.errors);
    //   if (!val.errors) { /* Si la requete est OK */
    //     localStorage.setItem('currentUser', JSON.stringify(val.data.user))
    //     // on change la route
    //     this.router.navigate([getRoute('users').path]);
    //   }
    // });

  }

  private signin(user) {
    console.log('OBJ_PARTAGE', JSON.stringify(user));

    // this.loginService.login(user).toPromise().then((val) => {
    //   console.log(val.errors);
    //   if (!val.errors) { /* Si la requete est OK */
    //     localStorage.setItem('currentUser', JSON.stringify(val.data.user))
    //     // on change la route (si il faut)
    //     this.router.navigate([getRoute('users').path]);
    //   }
    // });
  }


  // GETTERS && SETTERS
  get civility() {
    return (this.form.get('civility') as FormControl);
  }
  get firstName() {
    return (this.form.get('firstName') as FormControl);
  }
  get lastName() {
    return (this.form.get('lastName') as FormControl);
  }
  get isJunkyard() {
    return (this.form.get('isJunkyard') as FormControl);
  }
  get email() {
    return (this.form.get('email') as FormControl);
  }
  get password() {
    return (this.form.get('password') as FormControl);
  }
  get phone() {
    return (this.form.get('phone') as FormControl);
  }
  get street() {
    return (this.form.get('street') as FormControl);
  }
  get postalCode() {
    return (this.form.get('postalCode') as FormControl);
  }
  get city() {
    return (this.form.get('city') as FormControl);
  }
  get country() {
    return (this.form.get('country') as FormControl);
  }
}
