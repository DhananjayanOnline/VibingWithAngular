import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { FactorialComponent } from './factorial/factorial.component';
import { PrimeNumberComponent } from './prime-number/prime-number.component';
import { FabinocciComponent } from './fabinocci/fabinocci.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component'

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    AdditionComponent,
    SubtractionComponent,
    MultiplicationComponent,
    FactorialComponent,
    PrimeNumberComponent,
    FabinocciComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
