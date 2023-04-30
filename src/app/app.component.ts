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
    console.clear();
    console.log(`%c
    -----------------------------------------------------------------------------
    Version: 3.0.0.000
    Author: Guilherme <GULLIVER> Oliveira, contato@guilmor.com
    Copyright, GUILMOR - Soluções em Software
    (https://www.guilmor.com/)
    -----------------------------------------------------------------------------
    `,  'font-size: 20px; color: red;');
    console.log(`%c The original Apple Macintosh (referred to now as the "Mac Classic").`, 'font-size: 15px; color: orange;');
    console.log(`
                       __________________________
               __..--/".'                        '.
       __..--""      | |                          |
      /              | |                          |
     /               | |    ___________________   |
    ;                | |   :__________________/:  |
    |                | |   |                 '.|  |
    |                | |   |                  ||  |
    |                | |   |                  ||  |
    |                | |   |                  ||  |
    |                | |   |                  ||  |
    |                | |   |                  ||  |
    |                | |   |                  ||  |
    |                | |   |                  ||  |
    |                | |   |______......-----"\|  |
    |                | |   |_______......-----"   |
    |                | |                          |
    |                | |                          |
    |                | |                  ____----|
    |                | |_____.....----|#######|---|
    |                | |______.....----""""       |
    |                | |                          |
    |. ..            | |   ,                      |
    |... ....        | |  (c ----- """           .'
    |..... ......  |\|_|    ____......------"""|"
    |. .... .......| |""""""                   |
    '... ..... ....| |                         |
      "-._ .....  .| |                         |
          "-._.....| |             ___...---"""'
              "-._.| | ___...---"""
                  """""`);


  }
}
