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

  it('should calculate the sum of the given number', () => {
    const result = component.getSumOfNnumbersUsingForLoop(12);
    expect(78).toEqual(result);

  });

  fit('should calculate the multiplication table of given number', () => {
    const actualArray: Array<number> = component.getMathTableUsingForLoop(2);
    const expectedArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40];
    for (let i = 0; i < actualArray.length; i++) {
      expect(expectedArray[i]).toEqual(actualArray[i]);
    }
    expect(20).toEqual(actualArray.length);
  })
});
