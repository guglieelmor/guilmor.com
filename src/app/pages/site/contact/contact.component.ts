import { Component } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private emailService: EmailService) {}

  sendEmail() {
    const to = 'contato@guilmor.com';
    const from = 'guilmor.softwares@gmail.com';
    const subject = 'Assunto do email';
    const message = 'Corpo do email';

    this.emailService.sendEmail(to, from, subject, message)
      .then(() => {
        console.log('Email enviado com sucesso!');
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
