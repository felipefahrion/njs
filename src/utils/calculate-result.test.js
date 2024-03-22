const { calculateResult } = require('./calculate-result');

describe('Calculate result', () => {
  it('should return correct result for addition', () => {
    const result = calculateResult('addition', 3, 5);
    expect(result).toBe(8);
  });

  it('should return correct result for subtraction', () => {
    const result = calculateResult('subtraction', 5, 3);
    expect(result).toBe(2);
  });

  it('should return correct result for multiplication', () => {
    const result = calculateResult('multiplication', 3, 5);
    expect(result).toBe(15);
  });

  it('should return correct result for remainder', () => {
    const result = calculateResult('remainder', 5, 3);
    expect(result).toBe(2);
  });

  it('should return correct result for division', () => {
    const result = calculateResult('division', 10, 2);
    expect(result).toBe(5);
  });

  it('should return null for any operation', () => {
    const result = calculateResult('somethins', 10, 2);
    expect(result).toBeNull();
  });
});
