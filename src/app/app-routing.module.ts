import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteComponent } from './pages/site/site.component';
import { AboutComponent } from './pages/site/about/about.component'; 
import { ContactComponent } from './pages/site/contact/contact.component';

const routes: Routes = [
  {
    path: "",
    component: SiteComponent 
  },
  {
    path: "sobre",
    component: AboutComponent 
  },
  {
    path: "contato",
    component: ContactComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
