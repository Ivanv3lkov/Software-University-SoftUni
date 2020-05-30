function solve(input) {
    let n = Number(input.shift());

    let totalSum = 0;
    let counter = 0;

    while (counter < n) {
        let grade = Number(input.shift());
        counter++
        totalSum += grade;
    }

    console.log((totalSum / counter).toFixed(2));
}

solve(['2', '6', '4']);