function solve(input) {
    let tabsCount = Number(input.shift());
    let salary = Number(input.shift());

    for (let i = 0; i < tabsCount; i++) {
        let siteName = input[i];

        switch (siteName) {
            case 'Facebook': {
                salary -= 150;
                break;
            } case 'Instagram': {
                salary -= 100;
                break;
            } case 'Reddit': {
                salary -= 50;
        }
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

solve([10, 750, 'Facebook', 'Dev.bg', 'Instagram', 'Facebook', 'Reddit', 'Facebook', 'Facebook']);
