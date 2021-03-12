import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { DatabaseComponent } from './components/database/database.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignoutComponent } from './components/signout/signout.component';
import {AuthGuard} from './auth/auth.guard'

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"database", canActivate:[AuthGuard], component:DatabaseComponent},
  {path:"login", component:LoginComponent},
  {path:"signout", component:SignoutComponent},
  {path:"form", component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
