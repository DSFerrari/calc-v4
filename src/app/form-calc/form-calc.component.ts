import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  selectedOption: string = '';
  result: number | null = null;
  activeInput: string = '';


  addToNum(value: number) {
    if (this.activeInput === 'num1') {
      if (this.num1 === null) {
        this.num1 = value;
      } else {
        this.num1 = parseInt(this.num1.toString() + value.toString());
      }
    } else if (this.activeInput === 'num2') {
      if (this.num2 === null) {
        this.num2 = value;
      } else {
        this.num2 = parseInt(this.num2.toString() + value.toString());
      }
    }
  }

  clearNums() {
    if (this.activeInput === 'num1') {
      this.num1 = 0;
    } else if (this.activeInput === 'num2') {
      this.num2 = 0;
    }
  }

  handleNum1KeyDown(event: KeyboardEvent) {
    const key = event.key;
    if (!isNaN(Number(key))) {
      if (this.num1 === null) {
        this.num1 = Number(key);
      } else {
        this.num1 = parseInt(this.num1.toString() + key);
      }
    } else if (key === 'Backspace') {
      this.num1 = Math.floor(this.num1 / 10);
    }
  }

  handleNum2KeyDown(event: KeyboardEvent) {
    const key = event.key;
    if (!isNaN(Number(key))) {
      if (this.num2 === null) {
        this.num2 = Number(key);
      } else {
        this.num2 = parseInt(this.num2.toString() + key);
      }
    } else if (key === 'Backspace') {
      this.num2 = Math.floor(this.num2 / 10);
    }
  }

  handleInputFocus(fieldName: string) {
    this.activeInput = fieldName;
  }

  calculate() {
    const flash = document.getElementById('flash');
    if (flash !== null) {
      flash.style.opacity = '1';
      setTimeout(() => {
        flash.style.opacity = '0';
      }, 200);
    } else {
      console.error("Elemento com ID 'flash' não encontrado.");
    }
    const audio = new Audio();
    audio.src = '../assets/som.mp3';
    audio.load();
    audio.play();
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
