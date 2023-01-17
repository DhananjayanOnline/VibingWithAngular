import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm = new FormGroup({
    'username': new FormControl("", [Validators.required]),
    'password': new FormControl("", [Validators.required])
  })

  get username(){
    return this.LoginForm.get('username')
  }

  get password(){
    return this.LoginForm.get('password')
  }

  authenticate(){
    console.log(this.LoginForm.value);
    
  }

}
