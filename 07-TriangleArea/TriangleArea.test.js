const {TriangleArea} = require("./TriangleArea");

describe("TriangleArea function:",()=>{
test('should calculate the area valid triangle', () => {
    const result = TriangleArea(3, 4, 5);
    expect(result).toBe(6);
  });
test('should return undefined ', () => {
    const invalidResult1 = TriangleArea(0, 0, 0);
    const invalidResult2 = TriangleArea(-2, 4, 5);
    const invalidResult3 = TriangleArea('a', 'b', 'c');

    expect(invalidResult1).toBeUndefined();
    expect(invalidResult2).toBeUndefined();
    expect(invalidResult3).toBeUndefined();
  });         
})