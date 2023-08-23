import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HeaderSiteComponent } from './components/header/header-site/header-site.component';
import { FooterSiteComponent } from './components/footer/footer-site/footer-site.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteComponent } from './pages/site/site.component';
import { FirstSiteComponent } from './components/section/first-site/first-site.component';
import { LoaderSiteComponent } from './components/section/loader-site/loader-site.component';
import { AboutComponent } from './pages/site/about/about.component';
import { SecundSiteComponent } from './components/section/secund-site/secund-site.component';
import { ContactComponent } from './pages/site/contact/contact.component';
import { PrivacyPolicyComponent } from './components/dialog/privacy-policy/privacy-policy.component';

import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { EmailComponent } from './components/dialog/email/email.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

const cookieConfig: NgcCookieConsentConfig = {
  "cookie": {
    "domain": "guilmor.com"
  },
  "position": "bottom-left",
  "theme": "block",
  "palette": {
    "popup": {
      "background": "#dfdfdf",
      "text": "#000000",
      "link": "#ffffff"
    },
    "button": {
      "background": "#000000",
      "text": "#ffffff",
      "border": "transparent"
    }
  },
  "type": "info",
  "content": {
    "message": "Este site usa cookies para garantir que você obtenha a melhor experiência em nosso site.",
    "dismiss": "ENTENDI E FECHAR",
    "deny": "",
    "link": "",
    "href": "https://cookiesandyou.com",
    "policy": "Cookie Policy"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderSiteComponent,
    FooterSiteComponent,
    SiteComponent,
    FirstSiteComponent,
    LoaderSiteComponent,
    AboutComponent,
    SecundSiteComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatChipsModule,
    MatButtonModule,
    HttpClientModule,
    MatDividerModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
