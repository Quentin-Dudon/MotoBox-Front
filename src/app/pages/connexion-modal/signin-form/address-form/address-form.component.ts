import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  @Output() add = new EventEmitter<FormGroup>();
  @Output() isValid = new EventEmitter<boolean>();

  addressForm;
  loading = false;

  constructor(fb: FormBuilder) {
    // -------------- FORMBUILDER -------------- //
    this.addressForm = fb.group({
      street: ['', [
        Validators.required
      ]],
      postalCode: ['', [
        Validators.required,
        Validators.pattern(/^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$/)
      ]],
      city: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  // -------------- GETTERS -------------- //
  get street() {
    return (this.addressForm.get('street') as FormControl);
  }
  get postalCode() {
    return (this.addressForm.get('postalCode') as FormControl);
  }
  get city() {
    return (this.addressForm.get('city') as FormControl);
  }
  get country() {
    return (this.addressForm.get('country') as FormControl);
  }

  // -------------- SUBMIT -------------- //
  sendForm(valid: boolean) {
    this.isValid.emit(valid);

    if (!valid) {
      return;
    }
    this.add.emit(this.addressForm.getRawValue());
  }
}
