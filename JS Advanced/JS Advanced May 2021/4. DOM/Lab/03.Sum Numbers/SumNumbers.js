function calc() {
    let firstNum = Number(document.querySelector('#num1').value);
    let secondNum = Number(document.querySelector('#num2').value);
    let sum = document.querySelector('#sum');
    sum.value = firstNum + secondNum;
}
