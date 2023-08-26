let resultDate;

function getDaysDifference(date1, date2) {
    const timeDifference = date1 - date2;
    const daysDifference = Math.abs(timeDifference / (1000 * 60 * 60 * 24));
    resultDate = daysDifference;
    return resultDate
}

module.exports = {getDaysDifference}