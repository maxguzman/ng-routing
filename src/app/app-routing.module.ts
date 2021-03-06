import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from "app/signin/signin.component";
import { HomeComponent } from "app/home/home.component";
import { MoenchComponent } from "app/moench/moench.component";

const routes: Routes = [
  // pathMatch is just a precaution
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'moench/:floor', component: MoenchComponent },
  // if user puts another path manually on url
  { path: '**', redirectTo: 'home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

