import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';


@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {

  constructor(private service:CalcService){ }

  result:number = 0

  addnumbers(element1:any, element2:any){
    console.log(`Numbers are ${element1.value} and ${element2.value}`);

    let n1 =+ element1.value
    let n2 =+ element2.value

    let data = {
      "num1":n1,
      "num2":n2
    }

    this.service.performAddition(data).then(res=> res.json()).then(data=> this.result=data.Result)
    
  }
}
