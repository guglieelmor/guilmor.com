import { Component } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'guilmor';
  
  constructor(private ccService: NgcCookieConsentService) {
    console.table(`
    -----------------------------------------------------------------------------
    Version: 3.0.0.000
    Author: Guilherme <GULLIVER> Oliveira, contato@guilmor.com
    Copyright, GUILMOR - Soluções em Software
    (https://www.guilmor.com/)
    -----------------------------------------------------------------------------
    `);
  }
}
