import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderSiteComponent } from './components/header/header-site/header-site.component';
import { FooterSiteComponent } from './components/footer/footer-site/footer-site.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteComponent } from './pages/site/site.component';
import { FirstSiteComponent } from './components/section/first-site/first-site.component';
import { LoaderSiteComponent } from './components/section/loader-site/loader-site.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSiteComponent,
    FooterSiteComponent,
    LoginComponent,
    SiteComponent,
    FirstSiteComponent,
    LoaderSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
