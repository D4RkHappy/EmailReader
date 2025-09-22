import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmailReaderBasic} from './components/email-reader-basic/email-reader-basic';
import {EmailReaderList} from './components/email-reader-list/email-reader-list';
import {EmailWithService} from './components/email-with-service/email-with-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmailReaderBasic, EmailReaderList, EmailWithService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmailReader');
}
