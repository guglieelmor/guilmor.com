import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderSiteComponent } from './components/header/header-site/header-site.component';
import { FooterSiteComponent } from './components/footer/footer-site/footer-site.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteComponent } from './pages/site/site.component';
import { FirstSiteComponent } from './components/section/first-site/first-site.component';
import { LoaderSiteComponent } from './components/section/loader-site/loader-site.component';
import { AboutComponent } from './pages/site/about/about.component';
import { DialogContatoSiteComponent } from './components/dialog/dialog-contato-site/dialog-contato-site.component';
import { SecundSiteComponent } from './components/section/secund-site/secund-site.component';
import { ContactComponent } from './pages/site/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSiteComponent,
    FooterSiteComponent,
    SiteComponent,
    FirstSiteComponent,
    LoaderSiteComponent,
    AboutComponent,
    DialogContatoSiteComponent,
    SecundSiteComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatChipsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
