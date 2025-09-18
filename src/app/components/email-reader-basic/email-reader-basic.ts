import {Component, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Email} from '../../models/email';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-email-reader-basic',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './email-reader-basic.html',
  styleUrl: './email-reader-basic.css'
})
export class EmailReaderBasic {

  currentEmail: Email;
  @ViewChild('emailForm') emailForm: any;

  constructor() {
    // init object
    this.currentEmail = {
      author: '',
      destinatory: '',
      subject: '',
      body: ''
    };
  }

  send() {
    window.alert("From: " + this.currentEmail.author  + "\n" +
      "To: " + this.currentEmail.destinatory + "\n" +
      "Subject: " + this.currentEmail.subject + "\n" +
      "Mail: " + this.currentEmail.body);
    this.clean();
  }

  clean() {
    this.emailForm.reset();
  }

}
