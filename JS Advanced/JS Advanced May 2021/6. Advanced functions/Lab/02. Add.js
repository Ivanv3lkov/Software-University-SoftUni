function solution(number) {
    return function sum(num) {
        return number + num;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));