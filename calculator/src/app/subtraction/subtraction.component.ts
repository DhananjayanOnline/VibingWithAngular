import { Component } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent {

  result:number = 0

  num1:number = 0
  num2:number = 0

  subtraction(){
    this.result = this.num1 - this.num2
  }
}
