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

  emailList : Email[];

  constructor() {
    // init object
    this.currentEmail = new Email('','','','');
    this.emailList = [];
  }

  send() {
    window.alert("The email " + this.currentEmail.subject + " has been sent to " + this.currentEmail.destinatory)
    this.emailList.push(this.currentEmail);
    this.clean();
  }

  clean() {
    this.emailForm.reset();
  }

}
