function solve(input) {
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let validDate = input[0].match(pattern);

    for (let date of validDate) {
        if (date.includes('/')) {
             [day, month, year] = date.split('/');
        } else if (date.includes('-')) {
             [day, month, year] = date.split('-');
        } else if (date.includes('.')) {
             [day, month, year] = date.split('.');
        }
     
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`); 
    }
}

solve([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
]);
