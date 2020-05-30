function solve(input) {
    let coins = Number(input.shift());

    let lv = Math.floor(coins);
    let st = Math.floor(coins * 100 - lv * 100);

    let count = 0;

    while (lv > 0) {
        if (lv >= 2) {
            lv -= 2;
            count++;
        } else if (lv >= 1) {
            lv -= 1;
            count++;
        }
    }

    while (st > 0) {
        if (st >= 50) {
            st -= 50;
            count++;
        } else if (st >= 20) {
            st -= 20;
            count++;
        } else if (st >= 10) {
            st -= 10;
            count++;
        } else if (st >= 5) {
            st -= 5;
            count++;
        } else if (st >= 2) {
            st -= 2;
            count++;
        } else if (st >= 1) {
            st -= 1;
            count++;
        }
    }
    console.log(count);
}

solve([1.23]);