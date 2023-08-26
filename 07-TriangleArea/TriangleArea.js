function TriangleArea(a, b, c) {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
      return;
    } 
    if (a <= 0 || b <= 0 || c <= 0) {
      return;
    } else {
      const perimeter = (a + b + c) / 2;
      const area = Math.sqrt(
        perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c)
      );
      return area;
    }
  
    
  }
module.exports = {TriangleArea}