import {Component, ViewChild} from '@angular/core';
import {Email} from '../../models/email';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-email-reader-list',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './email-reader-list.html',
  styleUrl: './email-reader-list.css'
})
export class EmailReaderList {

  currentEmail: Email;
  @ViewChild('emailForm') emailForm: any;

  emailList : Email[];

  constructor() {
    // init object
    this.currentEmail = {
      author: '',
      destinatory: '',
      subject: '',
      body: ''
    };
    this.emailList = [];
  }

  send() {
    window.alert("The email " + this.currentEmail.subject + " has been sent to " + this.currentEmail.destinatory)
    this.emailList.push({...this.currentEmail}); // copy of the email
    this.clean();
  }

  clean() {
    this.emailForm.reset();
  }

}
