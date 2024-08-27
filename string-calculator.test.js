const StringCalculator = require('./index');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

  test('should return the number for a single number', () => {
    expect(calculator.add("1")).toBe(1);
  });

  test('should return the sum of two numbers', () => {
    expect(calculator.add("1,5")).toBe(6);
  }); 

  test('should handle multiple numbers', () => {
    expect(calculator.add("1,2,3,4,5")).toBe(15);
  });  

  test('should handle new lines between numbers', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });  

  test('should support custom delimiters', () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  }); 
  
  // test('should throw an exception for negative numbers', () => {
  //   expect(() => calculator.add("-1,2")).toThrow("negative numbers not allowed -1");
  // });

  // test('should throw an exception with all negative numbers', () => {
  //   expect(() => calculator.add("2,-4,3,-5")).toThrow("negative numbers not allowed -4,-5");
  // });
  
});