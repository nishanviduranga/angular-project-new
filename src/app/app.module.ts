import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavebarComponent } from './component/navebar/navebar.component';
import { ProfileComponent } from './component/profile/profile.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { DirectiveDirective } from './directives/directive.directive';
import { UpdateComponent } from './component/update/update.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { AddstudentComponent } from './component/addstudent/addstudent.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginComponent } from './component/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    ProfileComponent,
    FooterComponent,
    HomeComponent,
    DirectiveDirective,
    UpdateComponent,
    AddstudentComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
