import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmailComponent } from 'src/app/components/dialog/email/email.component';
import { MailService } from 'src/app/services/mail/mail.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  form!: FormGroup;
  submitClicked = false;
  showProgress = false;

  constructor(
    private formBuilder: FormBuilder, 
    private mail: MailService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.submitClicked = false;
    this.form = this.formBuilder.group({
      projeto: new FormControl('', [Validators.required]),
      servico: new FormControl('', [Validators.required]),
      name:    new FormControl('', [Validators.required]),
      email:   new FormControl('', [Validators.required, Validators.email]),
      ideia:   new FormControl('', [Validators.required, Validators.minLength(35)]),

    });
  }

  async submitForm() {
    this.submitClicked = true;
    if(this.form.valid){
      this.showProgress = true;

      try {
        const response = await this.mail.send(this.form.value).toPromise();
        if (response.status == 1) {
          this.openSnackBar('Pronto! Entraremos em contato com você em breve, obrigado!', 'OK');
        } else {
          this.openDialogErrorEmail();
        }
      } catch (error) {
        console.log(error);
        this.openDialogErrorEmail();
      }

      this.showProgress = false;
      this.submitClicked = false;
    }
  }

  openDialogErrorEmail() {
    const dialogRef = this.dialog.open(EmailComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000,
    });

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 4800)
  }
}
