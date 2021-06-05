function colorize() {
    let tableRows = Array.from(document.querySelectorAll('table tr'));
    tableRows.map((row, index) => index % 2 === 1 ? row.style.backgroundColor = 'Teal' : '')
}