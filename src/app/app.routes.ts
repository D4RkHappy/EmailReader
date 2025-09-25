import { Routes } from '@angular/router';
import {EmailViewer} from './components/email-viewer/email-viewer';
import {EmailsList} from './components/emails-list/emails-list';
import {EmailForm} from './components/email-form/email-form';

export const routes: Routes = [
  { path: 'list', component: EmailsList },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'view/:id', component: EmailViewer },
  { path: 'form', component: EmailForm }
];
