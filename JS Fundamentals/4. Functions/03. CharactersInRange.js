function charactersInRange(firstCh, secondCh) {
    let start = firstCh.charCodeAt(0);
    let end = secondCh.charCodeAt(0);
    let result = '';

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let i = start + 1; i < end; i++) {
        result += `${String.fromCharCode(i)} `; //or result += String.fromCharCode(i) + ' ';
    }

    console.log(result);
}

charactersInRange('C', '#');


