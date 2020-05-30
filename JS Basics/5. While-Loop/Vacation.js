function solve(input) {
    let holidayMoney = Number(input.shift());
    let initialSum = Number(input.shift());

   
    let spendDays = 0;
    let allDays = 0;

    while (spendDays < 5 && initialSum < holidayMoney) {
        let action = input.shift();
        let currentSum = Number(input.shift());
        allDays++;
        if (action == 'save') {
            initialSum += currentSum;
            spendDays = 0;
        } else if (action == 'spend') {
            spendDays++;
            initialSum -= currentSum;
            if (initialSum < 0) {
                initialSum = 0;
            }
        }
    }
    if (initialSum >= holidayMoney) {
        console.log(`You saved the money for ${allDays} days.`);
    } else if (spendDays == 5) {
        console.log(`You can't save the money.`);
        console.log(allDays);
    }
}

solve([
    '110',   '60',    'spend',
    '10',    'spend', '10',
    'spend', '10',    'spend',
    '10',    'spend', '10'
  ]
  );