const { addTask, deleteTask, markTaskAsDone } = require('./todo');
let result;
let doneTask = [];

describe("AddTask function:", () => {
   
    test('should add a task', () => {
       result =  addTask("Buy Apple", false);
       expect(result.length).toBe(1);
    });

    test('should not add task', () => {
       result =  addTask(42, true);
        expect(result).toBeUndefined();
    });
});

describe("DeleteTask function:", () => {

    test('should delete a task', () => {
       result =  deleteTask(0);
        expect(result.length).toBe(0);
    });

    test('should not delete task', () => {
       result =  deleteTask("notANumber");
        expect(result).toBeUndefined();
    });
});

describe("MarkTaskAsDone function:", () => {

    // test('should mark a task as done', () => {
    //    doneTask=  markTaskAsDone(0);
    //     expect(doneTask.length).toBe(1);
    // });

    test('should not mark task as done', () => {
       result =  markTaskAsDone("notANumber");
        expect(doneTask).toHaveLength(0);
    });

    test('should not mark task as done', () => {
        markTaskAsDone(5);
        expect(doneTask).toHaveLength(0);
    });
});
