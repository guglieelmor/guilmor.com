import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderSiteComponent } from './components/header/header-site/header-site.component';
import { FooterSiteComponent } from './components/footer/footer-site/footer-site.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteComponent } from './pages/site/site.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSiteComponent,
    FooterSiteComponent,
    LoginComponent,
    SiteComponent
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
