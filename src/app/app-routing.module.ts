import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {HomeComponent} from "./component/home/home.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {UpdateComponent} from "./component/update/update.component";
import {AddstudentComponent} from "./component/addstudent/addstudent.component";



const routes: Routes = [
  {path :'' ,component :LoginComponent},
  {path :'home', component: HomeComponent},
  {path :'login', component: LoginComponent},
  {path: 'addstudent', component: AddstudentComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'update' ,component:UpdateComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
