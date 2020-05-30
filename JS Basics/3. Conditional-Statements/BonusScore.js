function bonusScore(input) {
    let number = Number(input.shift());
    let bonusPoints;
    
if (number <= 100 ) {
     bonusPoints = 5;
} else if (number > 100 && number <= 1000) {
     bonusPoints = number * 0.20  
} else {
     bonusPoints = number * 0.10;
}

if (number % 2 === 0) {
     bonusPoints = bonusPoints + 1;
} else if (number % 10 === 5) {
     bonusPoints = bonusPoints + 2;
}

console.log(bonusPoints);
console.log(number + bonusPoints);  
}

bonusScore( ['20']);