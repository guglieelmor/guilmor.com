import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MailService } from 'src/app/services/mail/mail.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  form!: FormGroup;
  submitClicked = false;

  constructor(private formBuilder: FormBuilder) { }

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

  submitForm(){
    this.submitClicked = true;
    if(this.form.valid){
      console.log(this.form.value)

    }
  }
}
