import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmailReaderBasic} from './components/email-reader-basic/email-reader-basic';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmailReaderBasic],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmailReader');
}
