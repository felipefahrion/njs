const  calculateResult = require('../src/utils/calculate-result');

describe('Calculate result', () => {
    it('should return correct result for addition', () => {
        const result = calculateResult('addition', 2, 2);
        expect(result).toBe(4);
    });

    it('should return correct result for subtraction', () => {
        const result = calculateResult('subtraction', 2, 2);
        expect(result).toBe(0);
    });

    it('should return correct result for multiplication', () => {
        const result = calculateResult('multiplication', 2, 2);
        expect(result).toBe(4);
    });

    it('should return correct result for remainder', () => {
        const result = calculateResult('remainder', 2, 2);
        expect(result).toBe(0);
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
