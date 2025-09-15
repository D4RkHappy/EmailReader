import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Email} from '../../models/email';

@Component({
  selector: 'app-email-reader-basic',
  imports: [
    FormsModule
  ],
  templateUrl: './email-reader-basic.html',
  styleUrl: './email-reader-basic.css'
})
export class EmailReaderBasic {

  currentEmail: Email;

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
    this.currentEmail = {
      author: '',
      destinatory: '',
      subject: '',
      body: ''
    }
  }

}
