import { Component, AfterViewInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header-site',
  templateUrl: './header-site.component.html',
  styleUrls: ['./header-site.component.scss']
})
export class HeaderSiteComponent implements AfterViewInit{
  public aniLogo: boolean;

  constructor(public dialog: MatDialog){
    this.aniLogo = false;
  }

  ngAfterViewInit() {
    setTimeout(() => {

      this.aniLogo = true;
      
    }, 0)
  }

}
