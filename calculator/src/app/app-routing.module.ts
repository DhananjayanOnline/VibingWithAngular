import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { FabinocciComponent } from './fabinocci/fabinocci.component';
import { FactorialComponent } from './factorial/factorial.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { PrimeNumberComponent } from './prime-number/prime-number.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SubtractionComponent } from './subtraction/subtraction.component';


const routes: Routes = [
  {path:"login", component:SigninComponent},
  {path:"addition", component:AdditionComponent},
  {path:"subtraction", component:SubtractionComponent},
  {path:"product", component:MultiplicationComponent},
  {path:"factorial", component:FactorialComponent},
  {path:"prime", component:PrimeNumberComponent},
  {path:"fabinocci", component:FabinocciComponent},
  {path:"signup", component:SignupComponent},
  {path:"", component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
