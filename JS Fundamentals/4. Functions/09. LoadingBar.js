function loadingBar(number) {
    let bar = [];

    function visualize(num) {
        let percentsCount = num / 10;
        let dotsCount = 10 - percentsCount;
        bar.push('%'.repeat(percentsCount));
        bar.push('.'.repeat(dotsCount));

        return `[${bar[0] + bar[1]}]`;
    }

    if (number === 100) {
        console.log('100% Complete!');
        console.log(visualize(number));
    } else {
        console.log(`${number}% ${visualize(number)}`);
        console.log('Still loading...');  
    }
}

loadingBar(90);