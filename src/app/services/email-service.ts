import { Injectable } from '@angular/core';
import {Email} from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  listEmail: Email[];

  constructor() {
    this.listEmail = [];
    this.listEmail.push(new Email(
      'emailfrom1@gmail.com',
      'emailto1@gmail.com',
      'Hello world',
      'Hello!'
  ))
    this.listEmail.push(new Email(
      'emailfrom2@gmail.com',
      'emailto2@gmail.com',
      'Hello my friend',
      'How are you?'
    ))
  }

  getEmailList(): Email[] {
    return this.listEmail;
  }

  getEmail(id: number) : Email {
    return this.listEmail[id];
  }

  addEmail(email: Email) {
    this.listEmail.push(email);
  }

  clearEmailList() {
    this.listEmail = [];
  }

  filterEmails(query: string): Email[] {
    const q = (query || '').trim().toLowerCase();
    if (!q) return this.listEmail;
    return this.listEmail.filter(e =>
      (e.author || '').toLowerCase().includes(q) ||
      (e.destinatory || '').toLowerCase().includes(q) ||
      (e.subject || '').toLowerCase().includes(q) ||
      (e.body || '').toLowerCase().includes(q)
    );
  }

}
