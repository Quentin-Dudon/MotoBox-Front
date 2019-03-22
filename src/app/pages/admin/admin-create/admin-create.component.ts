import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AdsService } from '../../../services/ads/ads.service';
import { Router } from '@angular/router';
import { HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.scss']
})
export class AdminCreateComponent implements OnInit {
  createAdminForm;

  addForm: FormGroup;

  constructor(
    fb: FormBuilder, 
    private router: Router, 
    private adsService: AdsService) {
    // -------------- FORMBUILDER -------------- //
    this.createAdminForm = fb.group({
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

  async submitForm() {
    await this.adsService.create(this.createAdminForm)
    .subscribe(error => this.handleError(error));
    
    this.router.navigate(['admin'])
  }

  // -------------- GETTERS -------------- //
  get title() {
    return (this.createAdminForm.get('title') as FormControl);
  }
  get description() {
    return (this.createAdminForm.get('description') as FormControl);
  }
  get imageUrl() {
    return (this.createAdminForm.get('imageUrl') as FormControl);
  }

  get brand() {
    return (this.createAdminForm.get('brand') as FormControl);
  }
  get model() {
    return (this.createAdminForm.get('model') as FormControl);
  }
  get category() {
    return (this.createAdminForm.get('category') as FormControl);
  }
  get year() {
    return (this.createAdminForm.get('year') as FormControl);
  }
  get location() {
    return (this.createAdminForm.get('location') as FormControl);
  }
  get price() {
    return (this.createAdminForm.get('price') as FormControl);
  }


  handleError(error) {
    console.log("ERRROR :::", error);
  }
}
