function subtract() {
    const firstNumber = document.querySelector('#firstNumber').value;
    const secondNumber = document.querySelector('#secondNumber').value;
    const result = document.querySelector('#result');
    result.textContent = Number(firstNumber) - Number(secondNumber);
}