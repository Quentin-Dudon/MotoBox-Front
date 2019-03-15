import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordValidators} from '../../../../shared/validators/password.valitors';

@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {
  @Output() add = new EventEmitter<FormGroup>();
  @Output() isValid = new EventEmitter<boolean>();

  passwordForm;
  loading = false;

  constructor(fb: FormBuilder) {
    // -------------- FORMBUILDER -------------- //
    this.passwordForm = fb.group({
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/),
      ]],
      confirm_password: ['', [
        Validators.required,
      ]],
    }, {
      validator: PasswordValidators.passwordsMatch
    });
  }

  ngOnInit() {
  }
  // -------------- GETTERS -------------- //
  get password() {
    return (this.passwordForm.get('password') as FormControl);
  }

  get confirm_password() {
    return (this.passwordForm.get('confirm_password') as FormControl);
  }

  sendForm(valid: boolean) {
    this.isValid.emit(valid);

    if (!valid) {
      return;
    }
    this.add.emit(this.passwordForm.getRawValue());
  }
}
