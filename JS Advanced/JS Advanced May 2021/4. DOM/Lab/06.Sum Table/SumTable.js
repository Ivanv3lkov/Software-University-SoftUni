function sumTable() {
    let costs = Array.from(document.querySelectorAll('td:nth-child(2)'));
    let sum = costs.pop();
    let totalSum = costs.reduce((acc, currValue) => acc + Number(currValue.textContent), 0);
    sum.textContent = totalSum;
}