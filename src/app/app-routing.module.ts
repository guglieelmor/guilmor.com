import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { SiteComponent } from './pages/site/site.component';

const routes: Routes = [
  {
    path: "",
    component: SiteComponent 
  },
  {
    path: "login",
    component: LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
