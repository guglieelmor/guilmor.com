import { Component, AfterViewInit  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContatoSiteComponent } from '../../dialog/dialog-contato-site/dialog-contato-site.component';

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

  openDialogContato() {
    const dialogRef = this.dialog.open(DialogContatoSiteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
