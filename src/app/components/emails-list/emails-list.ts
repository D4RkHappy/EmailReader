import {Component, inject} from '@angular/core';
import {EmailService} from '../../services/email-service';
import {Email} from '../../models/email';
import {Router} from '@angular/router';

@Component({
  selector: 'app-emails-list',
  imports: [],
  templateUrl: './emails-list.html',
  styleUrl: './emails-list.css'
})
export class EmailsList {

  emailService: EmailService = inject(EmailService);
  router: Router = inject(Router);
  filterText: string = '';

  filteredEmails(): Email[] {
    return this.emailService.filterEmails(this.filterText);
  }

  viewEmail(id: number) {
    this.router.navigate(['/view/', id]);
  }

  deleteEmail(id: number) {
    this.emailService.deleteEmail(id);
  }

  goToForm() {
    this.router.navigate(['/form']);
  }

}
