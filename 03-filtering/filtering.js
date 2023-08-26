function getEvenNumbers(numArr) {
    let newNumArr = [];

    for (let i = 0; i < numArr.length; i++) {
        const element = numArr[i];
        
        if (typeof element !== "number") {
            return; 
        } else if (element % 2 === 0) {
            newNumArr.push(element);
        }
    }

    return newNumArr;
}

module.exports = { getEvenNumbers };
