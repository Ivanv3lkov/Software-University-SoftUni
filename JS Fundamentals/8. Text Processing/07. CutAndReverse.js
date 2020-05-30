function solve(string) {

    let firstWord = string.substring(0, string.length / 2)
                          .split('')
                          .reverse()
                          .join('');

    let secondWord = string.substring(string.length / 2)
                           .split('')
                           .reverse()
                           .join('');

    console.log(firstWord);
    console.log(secondWord);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');