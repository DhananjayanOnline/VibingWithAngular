import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

import { FormsModule } from '@angular/forms';
import { MultiplicationComponent } from './multiplication/multiplication.component'

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    AdditionComponent,
    SubtractionComponent,
    MultiplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
