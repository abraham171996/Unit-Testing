const {CurrencyConverter} = require('./CurrencyConverter');

describe("CurrencyConverter function:",()=>{
    test("should return the correct converted amount", () => {
        const result = CurrencyConverter(100,1.7);
        expect(result).toBe(170);
    });

 
    test("should return undefined", () => {
        const result = CurrencyConverter(-50,1.7);
        expect(result).toBeUndefined();
    });

   
    test("should return undefined", () => {
        const result = CurrencyConverter("not a number", 1.7);
        expect(result).toBeUndefined();
    });

    
    test("should return undefined", () => {
        const result = CurrencyConverter(170,0);
        expect(result).toBeUndefined();
    });

    test("should return a number", () => {
        const result = CurrencyConverter(200,0.8);
        expect(typeof result).toBe("number");
    });
})