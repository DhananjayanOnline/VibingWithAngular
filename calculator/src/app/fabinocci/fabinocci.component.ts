import { Component } from '@angular/core';

@Component({
  selector: 'app-fabinocci',
  templateUrl: './fabinocci.component.html',
  styleUrls: ['./fabinocci.component.css']
})
export class FabinocciComponent {
  num:number = 0
  result:any = []

  fib(){
    let a=0, b=1, c, series=[a,b]

    for(let i=2;i<this.num;i++){
      c = a+b
      series.push(c)
      a=b
      b=c
    }
    this.result = series
  }
}
