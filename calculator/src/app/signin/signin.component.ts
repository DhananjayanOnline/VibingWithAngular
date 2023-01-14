import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  form = new FormGroup({
    "username": new FormControl("", [Validators.required]),
    "password": new FormControl("", [Validators.required])
  })

  get username(){
    return this.form.get("username")
  }

  get password(){
    return this.form.get("password")
  }

  authendicate(){
    console.log(this.form.value);
    
  }
}
