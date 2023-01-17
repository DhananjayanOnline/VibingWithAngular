import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcomService {

  constructor() { }

  getToken(data:any){
    let options={
      "method": "post",
      "body": JSON.stringify(data),
      "headers": {
        "content-type": "application/json"
      }
    }
    return fetch("localhost:8000/jwt/token/", options)
  }
}
