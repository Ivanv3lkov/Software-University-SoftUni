function dayOfWeek(dayOfWeek) {
    let obj = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    }
    let result = obj[dayOfWeek];
    return result == undefined ? 'error' : obj[dayOfWeek];
}

console.log(dayOfWeek('Monday'));
