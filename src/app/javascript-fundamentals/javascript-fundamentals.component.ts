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
}
