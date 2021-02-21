import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-fundamentals',
  templateUrl: './javascript-fundamentals.component.html',
  styleUrls: ['./javascript-fundamentals.component.css']
})
export class JavascriptFundamentalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addTwoNumbers(a: number, b: number): number {
    return a + b;
  }

  calculateFactorialForGivenNumber(n: number): number {
    let factorial = 1
    for (let i = n; i >= 1; i--) {
      factorial = factorial * i;
    }
    return factorial;

  }
  getSumOfNnumbersUsingWhileLoop(n: number): number {
    let sum = 0;
    let i = 0;
    while (i <= n) {
      sum = sum + i;
      i = i + 1;
    }
    return sum;
  }

  getSumOfNnumbersUsingForLoop(n: number): number {
    let sum = 0;
    let i = 0;
    for (; i <= n;) {
      sum = sum + i;
      i = i + 1;
      console.log("The sum is " + sum);
    }
    return sum;
  }
  getMathTableUsingForLoop(n: number): Array<number> {
    const values = new Array<number>();
    let mul = 0;
    let i = 1;
    for (; i <= 20; i++) {
      mul = n * i;
      values.push(mul);
      console.log(n + " X " + i + " = " + mul);
    }
    return values;
  }

}


