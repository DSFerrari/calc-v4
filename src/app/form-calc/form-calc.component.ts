import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  sum : number = 0;
  select = document.getElementById("opcoes") as HTMLSelectElement;


  onClicksum(){
    this.sum = this.num1 + this.num2;
  }
  onCLicksubtraction(){
    this.sum = this.num1 - this.num2;
  }
  onCLickmultiplication(){
    this.sum = this.num1 * this.num2;
  }
  onClickdivision(){
    this.sum = this.num1 / this.num2;
  }
  onClickpotentiation(){
    this.sum = this.num1 ** this.num2;
  }
  onCLickrest(){
    this.sum = this.num1 % this.num2;
  }
}
