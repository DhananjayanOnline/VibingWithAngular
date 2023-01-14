import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent {

  constructor(private service:CalcService){}

  result:number = 0

  n1:number = 0
  n2:number = 0

  subtraction(){
    let data = {
      "num1":this.n1,
      "num2":this.n2
    }

    this.service.performSubtraction(data).then(res=> res.json()).then(data=> this.result=data.Result)
  }
}
