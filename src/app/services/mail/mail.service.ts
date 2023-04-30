import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private currentDate = new Date();
  private host = 'http://127.0.0.1:2000/send';

  constructor(private http: HttpClient) {
    this.currentDate.toLocaleDateString()
  }

  send(data: any): Observable<any> {
    return this.http.post(this.host, {
      "to": "guilmor.softwares@gmail.com",
      "from": "contato@guilmor.com",
      "subject": `<CONTATO VIA SITE> - ${data.email}`,
      "text":
        `
        Qual tipo do seu projeto? - ${data.projeto}

        Qual serviços que você precisa? - ${data.servico}

        Seu nome - ${data.name}

        Seu e-mail - ${data.email}

        Conte-nos mais sobre sua ideia - ${data.ideia}

        Data de envio - ${this.currentDate}
         
         `
    });
  }
}
