import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrivacyPolicyComponent } from '../../dialog/privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-footer-site',
  templateUrl: './footer-site.component.html',
  styleUrls: ['./footer-site.component.scss']
})
export class FooterSiteComponent {
  public date : Date = new Date();
  public ano : number = this.date.getFullYear(); 

  constructor(public dialog: MatDialog) {}

  openDialogPrivacyPolicy() {
    const dialogRef = this.dialog.open(PrivacyPolicyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
