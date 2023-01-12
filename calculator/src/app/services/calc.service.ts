import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  performAddition(data:any){
    let options = {
      "method": "post",
      "body": JSON.stringify(data),
      "headers":{
        "content-type": "application/json"
      }
    }
    
    return fetch("http://127.0.0.1:8000/add", options)
  }

  performSubtraction(data:any){
    let options = {
      "method": "post",
      "body": JSON.stringify(data),
      "headers":{
        "content-type": "application/json"
      }
    }
    
    return fetch("http://127.0.0.1:8000/sub", options)
  }

  performFactorial(data:any){
    let options = {
      "method": "post",
      "body": JSON.stringify(data),
      "headers": {
        "content-type": "application/json"
      }
    }

    return fetch("http://127.0.0.1:8000/fact", options)
  }

}
