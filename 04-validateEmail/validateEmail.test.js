const {validateEmail} = require('./validateEmail');

describe("ValidateEmail function:",()=>{
    test('should valid email', () => {
        const result = validateEmail("test@example.com");
        expect(result).toBe(true)
    })
    test('should invalid email', () => {
        const result = validateEmail("user@.com");
        expect(result).toBe(false)
    })
})