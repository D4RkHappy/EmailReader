import {Component, inject, ViewChild} from '@angular/core';
import {Email} from '../../models/email';
import {EmailService} from '../../services/email-service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-email-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './email-form.html',
  styleUrl: './email-form.css'
})
export class EmailForm {

  currentEmail: Email;
  @ViewChild('emailForm') emailForm: any;
  emailService: EmailService = inject(EmailService);

  constructor() {
    // init object
    this.currentEmail = new Email('','','','');
  }

  send() {
    window.alert("The email " + this.currentEmail.subject + " has been sent to " + this.currentEmail.destinatory)
    this.emailService.addEmail({...this.currentEmail}); // copy of the email
    this.clean();
  }

  clean() {
    this.emailForm.reset();
  }

}
