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
  @Output() currentFormValid = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  pushValueToParent($event: FormGroup) {
    this.currentFormValue.emit($event);
  }

  pushStateToParent($event: boolean) {
    this.currentFormValid.emit($event);
  }
}
