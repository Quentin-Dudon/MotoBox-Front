import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from '../../../../shared/validators/username.valitors';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Output() add = new EventEmitter<FormGroup>();
  @Output() isValid = new EventEmitter<boolean>();

  contactForm;
  loading = false;

  constructor(fb: FormBuilder) {
    // -------------- FORMBUILDER -------------- //
    this.contactForm = fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        UsernameValidators.cannotContainSpace
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^((\+)33|0)[1-9](\d{2}){4}$/)
      ]],
    });
  }

  ngOnInit() {
  }

  // -------------- GETTERS -------------- //
  get email() {
    return (this.contactForm.get('email') as FormControl);
  }
  get phone() {
    return (this.contactForm.get('phone') as FormControl);
  }

  sendForm(valid: boolean) {
    this.isValid.emit(valid);

    if (!valid) {
      return;
    }
    this.add.emit(this.contactForm.getRawValue());
  }
}

