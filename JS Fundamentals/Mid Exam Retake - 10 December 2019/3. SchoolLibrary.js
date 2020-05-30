function solve(input) {
    let shelf = input.shift().split('&');

    for (let book of input) {
        if (book === 'Done') {
            break;
        }

        let tokens = book.split(' | ');

        if (tokens[0] === 'Add Book') {
            let bookName = tokens[1];
            addBook(bookName);
        } else if (tokens[0] === 'Take Book') {
            let bookName = tokens[1];
            takeBook(bookName);
        } else if (tokens[0] === 'Swap Books') {
            let bookOne = tokens[1];
            let bookTwo = tokens[2];
            swapBooks(bookOne, bookTwo);
        } else if (tokens[0] === 'Insert Book') {
            let bookName = tokens[1];
            insertBook(bookName);
        } else if (tokens[0] === 'Check Book') {
            let index = Number(tokens[1]);
            checkBook(index);
        }
    }

    console.log(shelf.join(', '));

    function addBook(bookName) {
        let isExists = shelf.includes(bookName);

        if (!isExists) {
            shelf.unshift(bookName);
        }
    }

    function takeBook(bookName) {
        let indexOfBook = shelf.indexOf(bookName);

        if (indexOfBook !== -1) {
            shelf.splice(indexOfBook, 1);
        }
    }

    function swapBooks(bookOne, bookTwo) {
        let indexOfBookOne = shelf.indexOf(bookOne);
        let indexOfBookTwo = shelf.indexOf(bookTwo);

        if (indexOfBookOne !== -1 && indexOfBookTwo !== -1) {
            shelf[indexOfBookOne] = bookTwo;
            shelf[indexOfBookTwo] = bookOne;
        }
    }

    function insertBook(bookName) {
        shelf.push(bookName);
    }

    function checkBook(index) {
        if (index >= 0 && index < shelf.length) {
            console.log(shelf[index]);
        }
    }
}

solve([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
    ''
]);