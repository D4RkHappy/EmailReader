import {Component, inject, ViewChild} from '@angular/core';
import {Email} from '../../models/email';
import {FormsModule} from '@angular/forms';
import {EmailService} from '../../services/email-service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-email-with-service',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './email-with-service.html',
  styleUrl: './email-with-service.css'
})
export class EmailWithService {

  currentEmail: Email;
  @ViewChild('emailForm') emailForm: any;
  emailService: EmailService = inject(EmailService);

  showBody: boolean = false;
  filterText: string = '';

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

  updateShowBody() {
    this.showBody = !this.showBody;
  }

  view(id: number) {
    let email = this.emailService.getEmail(id);
    window.alert("From: " + email.subject +
      "\nTo: " + email.destinatory +
      "\nSubject: " + email.subject +
      "\nBody: " + email.body)
  }

  filteredEmails(): Email[] {
    return this.emailService.filterEmails(this.filterText);
  }

}
