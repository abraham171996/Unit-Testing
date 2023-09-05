let allTask = [

]
let doneTask = []
function addTask(task,bool){
    if(typeof task !== "string" || typeof bool !== "boolean"){
        return;
    }
    else{
        allTask.push({task,bool})
        return allTask
    }
}

function deleteTask(id) {
    if (typeof id !== "number") {
        return;
    } else {
        if (id >= 0 && id < allTask.length) {
            allTask.splice(id, 1);
            
        }
        return allTask
    }
}

function markTaskAsDone(id) {
    if (typeof id !== "number") {
        return;
    } else {
        if (id >= 0 && id < allTask.length) {
            doneTask.push(allTask[id]);
        }
        return doneTask;
    }
}


module.exports = {addTask,deleteTask,markTaskAsDone}