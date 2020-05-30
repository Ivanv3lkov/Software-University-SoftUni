function reverse(n, numbers) {
   let newArray = [];

    for (let i = 0; i < n; i++) {
        newArray[i] = numbers[i];
    }

    console.log(newArray.reverse().join(' '));
}

reverse(3, [10, 20, 30, 40, 50]);