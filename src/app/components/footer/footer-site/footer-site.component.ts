import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-site',
  templateUrl: './footer-site.component.html',
  styleUrls: ['./footer-site.component.scss']
})
export class FooterSiteComponent {
  public date : Date = new Date();
  public ano : number = this.date.getFullYear(); 
}
