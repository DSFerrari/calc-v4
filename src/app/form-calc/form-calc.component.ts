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
  selectedOption: string = '';
  result: number | null = null;


  calculate() {
    switch (this.selectedOption) {
      case 'Somar':
        this.result = this.num1 + this.num2;
        break;
      case 'Dividir':
        this.result = this.num1 / this.num2;
        break;
      case 'Subtrair':
        this.result = this.num1 - this.num2;
        break;
      case 'Multiplicar':
        this.result = this.num1 * this.num2;
        break;
      case 'Elevar':
        this.result = Math.pow(this.num1, this.num2);
        break;
      case 'Resto da divisão':
        this.result = this.num1 % this.num2;
        break;
      default:
        this.result = null;
    }
}
}
