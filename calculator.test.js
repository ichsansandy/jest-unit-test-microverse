const Calculator = require('./calculator.js');

const calcFunc = new Calculator();

describe('calculator have ', () => {
  const x = 4;
  const y = 2;

  test('add method that will add two inputs correctly', () => {
    expect(calcFunc.add(x, y)).toBe(6);
  });
  test('substract method that will substract two inputs correctly', () => {
    expect(calcFunc.substract(x, y)).toBe(2);
  });
  test('divide method that will divide two inputs correctly', () => {
    expect(calcFunc.divide(x, y)).toBe(2);
  });
  test('multiply method that will multiply two inputs correctly', () => {
    expect(calcFunc.multiply(x, y)).toBe(8);
  });
});
