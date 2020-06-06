function solve() {
    const pad = document.getElementsByClassName('keys')[0];   
    const display = document.getElementById('expressionOutput');
    const result = document.getElementById('resultOutput');
    const clearButton = document.getElementsByClassName('clear')[0];

    pad.addEventListener('click', compute);
    clearButton.addEventListener('click', clear);

    let operators = ['+', '-', '*', '/'];

    let operations = {
        '+': (num1, num2) => Number(num1) + Number(num2),
        '-': (num1, num2) => Number(num1) - Number(num2),
        '*': (num1, num2) => Number(num1) * Number(num2),
        '/': (num1, num2) => Number(num1) / Number(num2)
    }

    function compute(e) {
        let value = e.target.value;

        if (!value) {
            return;
        }

        if (value === '=') {
            let params = display.textContent.split(' ').filter(x => x !== '');

            if (params[2] !== undefined) {
                result.textContent = operations[params[1]](params[0], params[2]);
                return;
            }
            result.textContent = 'NaN';
            return;
        }
        
        if (operators.includes(value)) {
            display.textContent = display.textContent + ` ${value} `;
            return;
        }
        display.textContent = display.textContent + value;
    };

    function clear() {
        display.textContent = '';
        result.textContent = '';
    }
}