import { Component } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent {

  result:Number = 0

  subtraction(number1:any, number2:any){
    let num1 = Number(number1.value)
    let num2 =+ number2.value

    this.result = num1-num2
  }
}
