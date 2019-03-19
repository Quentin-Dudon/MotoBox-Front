import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {
  @Input() add = new EventEmitter<FormGroup>();
  @Input() isValid = new EventEmitter<boolean>();
  @Output() currentFormValue = new EventEmitter<FormGroup>();

  // final form
  form;
  // enable/disabled buttons
  valid;

  constructor() {
  }

  ngOnInit() {
    this.initButtonsStates();
    this.form = {};
    this.valid = {};
  }

  initButtonsStates() {
    this.valid = new Object({
      personal: false,
      contact: false,
      address: false,
      password: false,
      form: false
    });
  }

  setValue($event: FormGroup) {
    Object.keys($event).forEach(eventKey => {
      if (Object.keys(this.form).includes(eventKey)) { // si la clé existe deja
        if (this.form[eventKey] === $event[`${eventKey}`]) { // et que la valeur est identique
          return null; // ne rien faire
        } else {
          this.form[eventKey] = $event[`${eventKey}`]; // sinon remplacer la valeur
        }
      } else {  // si la clé n'existe pas
        this.form = {...this.form, ...$event}; // on rajoute l'objet
      }
    });
  }

  setButtonState($event: boolean, formName: string) {
    // change buttons states
    if (formName === 'personal') {
      this.valid.personal = $event;
    }
    if (formName === 'contact') {
      this.valid.contact = $event;
    }
    if (formName === 'address') {
      this.valid.address = $event;
    }
    if (formName === 'password') {
      this.valid.password = $event;
    }
    if (this.form.isJunkyard) { // Si le user est un vendeur
      this.valid.form = !!(this.valid.personal && this.valid.contact && this.valid.address && this.valid.password);
    } else { // Si le user est un acheteur
      this.valid.form = !!(this.valid.personal && this.valid.contact && this.valid.password);
    }
  }

  // -------------- SUBMIT -------------- //
  submitForm() {
    if (!this.form.isJunkyard) {
      this.removeAddress();
    }
    delete this.form.confirm_password;
    console.log('Envoyé');
    this.currentFormValue.emit(this.form);
  }

  removeAddress() {
    [
      'street',
      'postalCode',
      'city',
      'country'
    ].forEach(e => { delete this.form[e]; });
  }
}
// {
// isJunkyard: false

// firstName: "Yassin"
// lastName: "Assim"
// email: "yass@gmail.com"
// phone: "0998877665"
// password: "qweASD123?"
// }

// {
// isJunkyard: true

// firstName: "Yassin"
// lastName: "ASsim"
// email: "yass@ass.com"
// phone: "0998876576"
// street: "rue baraban"
// postalCode: "69000"
// city: "Lyon"
// country: "France"
// password: "qweASD123?"
// }
