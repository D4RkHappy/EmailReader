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

  getEmailById(id: number): Email | undefined {
    return this.listEmail.find(e => e.id === id);
  }

  addEmail(email: Email) {
    this.listEmail.push(email);
  }

  deleteEmail(id: number) {
    const idx = this.listEmail.findIndex(e => e.id === id);
    if (idx !== -1) {
      this.listEmail.splice(idx, 1);
    }

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
