import { Component, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  
  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
      }
    }

  constructor(private fb: FormBuilder, private contactService: ContactService) {

    this.contactForm = this.fb.group({
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormLastname': ['', Validators.required],
      'contactFormFirstname': ['', Validators.required],
      'contactFormMessage': ['', Validators.required]
      });
    }
  
    onSubmit() {
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
