function sortAsc(arrOfNames) {
    return arrOfNames.sort((a, b) => a.localeCompare(b)).forEach((n, i) => console.log(`${i + 1}.${n}`));
}

sortAsc(["John", "Bob", "Christina", "Ema"]);