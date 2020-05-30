function tradeCommissions(input) {
    let city = input.shift();
    let sales = Number(input.shift());

    let sumCommission = null;

    if (city == 'Sofia') {
        if (sales >= 0 && sales <= 500) {
            sumCommission = sales * 0.05;
        } else if (sales > 500 && sales <= 1000) {
            sumCommission = sales * 0.07;
        } else if (sales > 1000 && sales <= 10000) {
            sumCommission = sales * 0.08;
        } else if (sales > 10000) {
            sumCommission = sales * 0.12;
        }
    } else if (city == 'Varna') {
        if (sales >= 0 && sales <= 500) {
            sumCommission = sales * 0.045;
        } else if (sales > 500 && sales <= 1000) {
            sumCommission = sales * 0.075;
        } else if (sales > 1000 && sales <= 10000) {
            sumCommission = sales * 0.1;
        } else if (sales > 10000) {
            sumCommission = sales * 0.13;
        }
    } else if (city == 'Plovdiv') {
        if (sales >= 0 && sales <= 500) {
            sumCommission = sales * 0.055;
        } else if (sales > 500 && sales <= 1000) {
            sumCommission = sales * 0.08;
        } else if (sales > 1000 && sales <= 10000) {
            sumCommission = sales * 0.12;
        } else if (sales > 10000) {
            sumCommission = sales * 0.145;
        }
    }
    if (sumCommission) {
        console.log(sumCommission.toFixed(2));
    } else {
        console.log('error')
    }
}

tradeCommissions(['Kaspichan', '-50']);
