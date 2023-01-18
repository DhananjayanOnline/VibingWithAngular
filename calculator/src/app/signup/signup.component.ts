import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  form = new FormGroup({
    "firstname": new FormControl("", Validators.required),
    "lastname": new FormControl("", Validators.required),
    "email": new FormControl("", [Validators.required, Validators.email]),
    "username": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
  })

  get lastname(){
    return this.form.get("lastname")
  }

  get email(){
    return this.form.get("email")
  }

  get username(){
    return this.form.get("username")
  }

  get password(){
    return this.form.get("password")
  }
  

  register(){
    console.log(this.form.value);
    
  }

}
