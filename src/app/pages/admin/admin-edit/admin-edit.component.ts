import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {
  editAdminForm;

  constructor(fb: FormBuilder) {
    // -------------- FORMBUILDER -------------- //
    this.editAdminForm = fb.group({
      // description
      title: [''],
      description: [''],
      imageUrl: [''],
      // ad details
      brand: [''],
      model: [''],
      category: [''],
      year: [''],
      // place and price
      location: [''], // recuperer la location du user connecté ???
      price: ['']
    });
  }

  ngOnInit() {
  }



  submitForm() {
  }

  // -------------- GETTERS -------------- //
  get title() {
    return (this.editAdminForm.get('title') as FormControl);
  }
  get description() {
    return (this.editAdminForm.get('description') as FormControl);
  }
  get imageUrl() {
    return (this.editAdminForm.get('imageUrl') as FormControl);
  }

  get brand() {
    return (this.editAdminForm.get('brand') as FormControl);
  }
  get model() {
    return (this.editAdminForm.get('model') as FormControl);
  }
  get category() {
    return (this.editAdminForm.get('category') as FormControl);
  }
  get year() {
    return (this.editAdminForm.get('year') as FormControl);
  }
  get location() {
    return (this.editAdminForm.get('location') as FormControl);
  }
  get price() {
    return (this.editAdminForm.get('price') as FormControl);
  }
}
