import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    contactForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,  private contactService: ContactService, private router: Router) { }


    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            message: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.contactForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }

        alert('Merci ' + this.contactForm.value.firstName + ', votre message a bien été envoyé');
        this.router.navigateByUrl('/');

        // this.contactService.sendMessage(this.contactForm.value).subscribe(() => {
        //   alert('Your message has been sent.');
        //   this.contactForm.reset();
        //   this.disabledSubmitButton = true;
        // }, error => {
        //   console.log('Error', error);
        // });
        this.contactService.sendMessage2(this.contactForm.value);
    }
}
