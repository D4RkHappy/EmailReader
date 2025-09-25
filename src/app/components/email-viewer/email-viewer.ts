import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmailService} from '../../services/email-service';
import {Email} from '../../models/email';

@Component({
  selector: 'app-email-viewer',
  imports: [],
  templateUrl: './email-viewer.html',
  styleUrl: './email-viewer.css'
})
export class EmailViewer {
  private route = inject(ActivatedRoute);
  private emailService = inject(EmailService);

  email?: Email;

  constructor() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    if (!isNaN(id)) {
      this.email = this.emailService.getEmailById(id);
    }
  }

}
