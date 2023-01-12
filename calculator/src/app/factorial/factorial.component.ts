import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent {

  constructor(private service:CalcService){}

  inpt:number = 0
  result = 0
  fac = 1

  fact(){

    let n = this.inpt
    let data = {
      "num":n
    }
    
    this.service.performFactorial(data).then(res=> res.json()).then(data=> this.result=data.Result)
  }
}
