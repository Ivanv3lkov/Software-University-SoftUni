function solution(num1) {
    return function (num2) {
        return num1 + num2;
    };
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

