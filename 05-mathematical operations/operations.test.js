const { add,subtract,multiply,divide} = require('./operations');

describe("Add function:", () => {
    test('should add positive numbers', () => {
        const result = add(3, 5);
        expect(result).toBe(8);
    });

    test('should add negative numbers', () => {
        const result = add(-3, -5);
        expect(result).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
        const result = add(3, -5);
        expect(result).toBe(-2);
    });

    test('should add zero to a number', () => {
        const result = add(10, 0);
        expect(result).toBe(10);
    });

    test('should add numbers with decimal points', () => {
        const result = add(2.5, 3.5);
        expect(result).toBeCloseTo(6);
    });
    test('should add numbers and string', () => {
        const result = add(2, "3");
        expect(result).toBe("23");
    });
});

describe("Subtract function:",()=>{
    test('should subtract positive numbers', () => {
        const result = subtract(5,3);
        expect(result).toBe(2);
    });
    test('should subtract positive numbers', () => {
        const result = subtract(3, 5);
        expect(result).toBe(-2);
    });
    test('should subtract negative numbers', () => {
        const result = subtract(-3, -5);
        expect(result).toBe(2);
    });
    test('should subtract positive and negative numbers', () => {
        const result = subtract(3, -5);
        expect(result).toBe(8);
    });
    test('should subtract zero to a number', () => {
        const result = subtract(10, 0);
        expect(result).toBe(10);
    });
    test('should subtract numbers with decimal points', () => {
        const result = subtract(3.5, 2.5);
        expect(result).toBeCloseTo(1);
    });
    test('should subtract numbers and string', () => {
        const result = subtract(2, "3");
        expect(result).toBe(NaN);
    });
})

describe("Multiply function:",()=>{
    test('should multiply positive numbers', () => {
        const result = multiply(5,3);
        expect(result).toBe(15);
    });
    test('should multiply negative numbers', () => {
        const result = multiply(-5,-3);
        expect(result).toBe(15);
    });
    test('should multiply positive and negative numbers', () => {
        const result = multiply(-5,3);
        expect(result).toBe(-15);
    });
    test('should multiply zero to a numbers', () => {
        const result = multiply(5,0);
        expect(result).toBe(0);
    });
    test('should multiply numbers and string', () => {
        const result = multiply(5,"3");
        expect(result).toBe(15);
    });
})

describe("Divide function:",()=>{
    test('should divide positive numbers', () => {
        const result = divide(6,3);
        expect(result).toBe(2);
    });
    test('should divide negative numbers', () => {
        const result = divide(-6,-3);
        expect(result).toBe(2);
    });
    test('should divide positive and negative numbers', () => {
        const result = divide(6,-3);
        expect(result).toBe(-2);
    });
    test('should divide zero to a numbers', () => {
        const result = divide(6,0);
        expect(result).toBe(Infinity);
    });
    test('should divide numbers and string', () => {
        const result = divide(6,"2");
        expect(result).toBe(3);
    });
    test('should divide Infinity and positive numbers', () => {
        const result = divide(6,Infinity);
        expect(result).toBe(0);
    });
    test('should divide Infinity and positive numbers', () => {
        const result = divide(Infinity,6);
        expect(result).toBe(Infinity);
    });
    test('should divide Infinity and negative numbers', () => {
        const result = divide(-6,Infinity);
        expect(result).toBe(-0);
    });
    test('should divide Infinity and negative numbers', () => {
        const result = divide(Infinity,-6);
        expect(result).toBe(-Infinity);
    });
})