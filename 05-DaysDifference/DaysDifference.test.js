const {getDaysDifference} = require("./DaysDifference");

describe("GetDaysDifference function:",()=>{
    test('should calculate the difference in days', () => {
        const date1 = new Date(2023,8,20); 
        const date2 = new Date(2023,8,25); 

        const result = getDaysDifference(date2, date1); 

        expect(result).toBe(5); 
    });
    test('should calculate the difference in days with string', () => {
        const date1 = new Date('2023-08-20'); 
        const date2 = new Date('2023-08-25'); 

        const result = getDaysDifference(date2, date1); 

        expect(result).toBe(5);
    });
})