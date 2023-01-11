import { Component } from '@angular/core';

@Component({
  selector: 'app-prime-number',
  templateUrl: './prime-number.component.html',
  styleUrls: ['./prime-number.component.css']
})
export class PrimeNumberComponent {
  num:number = 0
  result:any = ""

  prime(){
    let flag:boolean = true
    for(let i=2; i<this.num; i++){
      if(this.num % i ===0){
        flag = false
        break
      }
    }

    if(flag==true){
      this.result = `${this.num} is a prime number`
    }else{
      this.result = `${this.num} is not a prime number`
    }
  }

  

}
