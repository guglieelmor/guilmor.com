import { Component, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-header-site',
  templateUrl: './header-site.component.html',
  styleUrls: ['./header-site.component.scss']
})
export class HeaderSiteComponent implements AfterViewInit{
  public aniLogo: boolean;

  constructor(){
    this.aniLogo = false;
  }

  ngAfterViewInit() {
    setTimeout(() => {

      this.aniLogo = true;
      
    }, 0)
  }
}
