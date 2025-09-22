export class Email {
  static idCounter = 0;

  id: number;
  author: string;
  destinatory: string;
  subject: string;
  body: string;

  constructor(author: string, destinatory: string, subject: string, body: string) {
    this.author = author;
    this.destinatory = destinatory;
    this.subject = subject;
    this.body = body;
    this.id = Email.idCounter++;
  }

}



