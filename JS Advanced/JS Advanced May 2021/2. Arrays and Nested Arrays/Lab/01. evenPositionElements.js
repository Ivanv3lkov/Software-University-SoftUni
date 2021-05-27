function evenPositionElement(arr) {
    const result = arr.filter((el, index) => index % 2 == 0).join(' ');
    return result;
}

console.log(evenPositionElement(['20', '30', '40', '50', '60']));