const { getEvenNumbers } = require('./filtering');

describe("GetEvenNumbers function:", () => {
    test('should return an array of even numbers', () => {
        const result = getEvenNumbers([1, 2, 3, 4, 5, 6]);
        expect(result).toEqual([2, 4, 6]);
    });

    test('should skip non-number elements', () => {
        const result = getEvenNumbers([1, 'hello', 2, {}, 3, 4, 'world']);
        expect(result).toBeUndefined();
    });

    test('should an empty array', () => {
        const result = getEvenNumbers([]);
        expect(result).toEqual([]);
    });
});
