import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent {
  inpt:number = 0
  result = 0
  fac = 1

  fact(){
    for(let i=1; i<=this.inpt; i++){
      this.fac=this.fac*i
    }

    this.result=this.fac
  }
}
