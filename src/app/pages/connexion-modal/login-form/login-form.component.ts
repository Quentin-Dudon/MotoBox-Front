import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from '../../../shared/validators/username.valitors';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() add = new EventEmitter<FormGroup>();

  loginForm;
  loading = false;

  constructor(fb: FormBuilder) {
    // -------------- FORMBUILDER -------------- //
    this.loginForm = fb.group({
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

  ngOnInit() {
  }

  // -------------- GETTERS -------------- //
  get email() {
    return (this.loginForm.get('email') as FormControl);
  }

  get password() {
    return (this.loginForm.get('password') as FormControl);
  }

  // -------------- SUBMIT -------------- //
  submitForm() {
    this.add.emit(this.loginForm.getRawValue());
  }
}
