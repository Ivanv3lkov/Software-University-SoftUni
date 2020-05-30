function solve(input) {
    let income = Number(input.shift());
    let months = Number(input.shift());
    let privateAmount = Number(input.shift());

    let unexpectedCosts = income * 0.30;
    let savedMoneyPerMonth = income - (privateAmount + unexpectedCosts);

    let totalSavedMoney = savedMoneyPerMonth * months;

    console.log(`She can save ${((savedMoneyPerMonth / income) * 100).toFixed(2)}%`);
    console.log(`${totalSavedMoney.toFixed(2)}`);
}
solve(["1500","3","800"]);