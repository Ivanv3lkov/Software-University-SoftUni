function metricConverter(input) {
    let number = Number(input.shift());
    let fromUnit = input.shift();
    let inUnit = input.shift();
    let resultInM;

    if (fromUnit === 'mm') {
        resultInM = number * 0.001;
    } else if ( fromUnit === 'cm') {
        resultInM = number * 0.01;
    } else {
        resultInM = number;
    }
    let result;
    if (inUnit === 'mm') {
        result = resultInM * 1000;
    } else if (inUnit === 'cm') {
        result = resultInM * 100;
    } else {
        result = resultInM;
    }
    console.log(result.toFixed(3));
}

metricConverter(['45', 'cm', 'mm']);