import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptFundamentalsComponent } from './javascript-fundamentals.component';

fdescribe('JavascriptFundamentalsComponent', () => {
  let component: JavascriptFundamentalsComponent;
  let fixture: ComponentFixture<JavascriptFundamentalsComponent>;


  beforeEach(() => {
    component = new JavascriptFundamentalsComponent();

  });

  it('should add two numbers', () => {
    const result = component.addTwoNumbers(1, 2);
    expect(3).toEqual(result);
  });

  it('should calculate factorial for given number', () => {
    const result = component.calculateFactorialForGivenNumber(3);
    expect(6).toEqual(result);
  });

  fit('should calculate the sum of the given number', () => {
    const result = component.getSumOfNnumbersUsingForLoop(12);
    expect(78).toEqual(result);
  });
});
