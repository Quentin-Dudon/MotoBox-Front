import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {
  @Output() add = new EventEmitter<FormGroup>();
  @Output() isValid = new EventEmitter<boolean>();

  personalForm;
  loading = false;

  constructor(fb: FormBuilder) {
    // -------------- FORMBUILDER -------------- //
    this.personalForm = fb.group({
      // civility: ['', [
      //   Validators.required,
      //   Validators.pattern('Mr|Mme')
      // ]],
      firstName: ['', [
        Validators.required,
      ]],
      lastName: ['', [
        Validators.required,
      ]],
    });
  }

  ngOnInit() {
  }

  // -------------- GETTERS -------------- //
  // get civility() {
  //   return (this.personalForm.get('civility') as FormControl);
  // }
  get firstName() {
    return (this.personalForm.get('firstName') as FormControl);
  }
  get lastName() {
    return (this.personalForm.get('lastName') as FormControl);
  }

  sendForm(valid: boolean) {
    this.isValid.emit(valid);

    if (!valid) {
      return;
    }
    this.add.emit(this.personalForm.getRawValue());
  }
}
