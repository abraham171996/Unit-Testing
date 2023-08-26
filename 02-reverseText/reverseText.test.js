const {reverseText} = require("./reverseText")

describe("Reverses function:",()=>{
    test("reverses a string correctly",()=>{
        const result = reverseText("Hello Code");
        expect(result).toBe("edoC olleH")
    })
    test("returns undefined for non-string", () => {
        const nonString = [123, null, undefined, {}, [], true, false];
    
        nonString.forEach(elem => {
            const result = reverseText(elem);
            expect(result).toBeUndefined();
        });
    });
})
