import {AbstractControl, ValidationErrors} from '@angular/forms';

export class PasswordValidators {

  static passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const psw = control.get('password').value;
    const confirmPsw = control.get('confirm_password').value;

    if (psw !== confirmPsw) {
      control.get('confirm_password').setErrors( {passwordsMatch: true} );
      return {passwordsMatch: true};
    }
    return null;
  }
}
