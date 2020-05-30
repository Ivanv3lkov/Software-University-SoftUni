function solve(num, power) {
    result = 1;

    for (let i = 0; i < power; i++) {
        result *= num;
    }
    
    return result;
}

solve(2, 8);