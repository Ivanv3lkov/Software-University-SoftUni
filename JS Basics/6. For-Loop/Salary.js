function solve(input) {
    let tabsCount = Number(input.shift());
    let salary = Number(input.shift());

    for (let i = 0; i < tabsCount; i++) {
        let siteName = input[i];

        if (siteName == 'Facebook') {
            salary -= 150;
        } else if (siteName == 'Instagram') {
            salary -= 100;
        } else if (siteName == 'Reddit') {
            salary -= 50;
        }

        if (salary <= 0) {
            break;
        }
    }
    if (salary > 0) {
        console.log(salary);
    } else {
        console.log('You have lost your salary.');
    }
}

solve([10,750,'Facebook','Dev.bg','Instagram','Facebook','Reddit','Facebook','Facebook']);