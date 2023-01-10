import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {

  result:number = 0

  addnumbers(element1:any, element2:any){
    console.log(`Numbers are ${element1.value} and ${element2.value}`);

    let num1 =+ element1.value
    let num2 =+ element2.value

    this.result = num1+num2
    
    
  }
}
