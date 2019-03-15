import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {
  @Output() add = new EventEmitter<FormGroup>();
  @Output() isValid = new EventEmitter<boolean>();

  roleForm;
  loading = false;

  constructor(fb: FormBuilder) {
    // -------------- FORMBUILDER -------------- //
    this.roleForm = fb.group({
      isJunkyard: false,
    });
  }

  ngOnInit() {
  }

  // -------------- GETTERS -------------- //
  get isJunkyard() {
    return (this.roleForm.get('isJunkyard') as FormControl);
  }

  handleJunkyard(val) {
    console.log(val);
    this.isJunkyard.setValue(val);
  }

  sendForm(valid: boolean) {
    this.isValid.emit(valid);

    if (!valid) {
      return;
    }
    this.add.emit(this.roleForm.getRawValue());
  }
}
