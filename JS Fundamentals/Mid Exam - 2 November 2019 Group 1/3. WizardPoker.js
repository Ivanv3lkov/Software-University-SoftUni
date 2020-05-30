function solve(input) {
    let arsenal = input.shift().split(':');
    let command = input.shift();
    let cards = [];

    while (command !== 'Ready') {

        let tokens = command.split(' ');

        if (tokens[0] === 'Add') {
            let cardName = tokens[1];
            add(cardName);
        } else if (tokens[0] === 'Insert') {
            let cardName = tokens[1];
            let index = Number(tokens[2]);
            insert(cardName, index);
        } else if (tokens[0] === 'Remove') {
            let cardName = tokens[1];
            remove(cardName);
        } else if (tokens[0] === 'Swap') {
            let firstCard = tokens[1];
            let secondCard = tokens[2];
            swap(firstCard, secondCard);
        } else if (tokens[0] === 'Shuffle') {
            cards.reverse();
        }

        command = input.shift();
    }

    console.log(cards.join(' '));

    function add(cardName) {
        let isExists = arsenal.includes(cardName);

        if (isExists) {
            cards.push(cardName);
            return cards;
        } else {
            console.log('Card not found.');
        }
    }

    function insert(cardName, index) {
        let isExists = arsenal.includes(cardName);

        if (isExists && index >= 0 && index < cards.length) {
            cards.splice(index, 0, cardName)
            return cards;
        } else {
            console.log('Error!');
        }
    }

    function remove(cardName) {
        let indexOfCard = cards.indexOf(cardName);

        if (indexOfCard !== -1) {
            cards.splice(indexOfCard, 1);
        } else {
            console.log('Card not found.');
        }
    }

    function swap(cardOne, cardTwo) {
        let indexOfCardOne = cards.indexOf(cardOne);
        let indexOfCardTwo = cards.indexOf(cardTwo);

        cards[indexOfCardOne] = cardTwo;
        cards[indexOfCardTwo] = cardOne;
    }
}

solve([
    'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Add Pop',
    'Add Exodia',
    'Add Aso',
    'Remove Wrath',
    'Add SineokBqlDrakon',
    'Shuffle deck',
    'Insert Pesho 0',
    'Ready'
]);