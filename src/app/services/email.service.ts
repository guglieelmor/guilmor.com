import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private sendGridApiKey = '';
  private sendGridBaseUrl = 'https://api.sendgrid.com/v3/mail/send';

  constructor() { }

  sendEmail(to: string, from: string, subject: string, message: string): Promise<any> {

    const xhr = new XMLHttpRequest();
    xhr.open('POST', this.sendGridBaseUrl, true);
    xhr.setRequestHeader('Authorization', `Bearer ${this.sendGridApiKey}`);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 202) {
        console.log('Email enviado com sucesso!');
      }
    };

    const data = {
      personalizations: [
        {
          to: [
            {
              email: to
            }
          ]
        }
      ],
      from: {
        email: from
      },
      subject: subject,
      content: [
        {
          type: 'text/plain',
          value: message
        }
      ]
    };

    const jsonData = JSON.stringify(data);

    xhr.send(jsonData);

    return new Promise<any>((resolve, reject) => {
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };

      xhr.onerror = () => {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      };
    });
  }
}
