function solve() {
    function makeElement(type, text) {
        let element = document.createElement(type);
        if (text !== null) {
            element.textContent = text;
        }
        return element;
    }

    const form = document.getElementById('container');
    const [nameInput, hallInput, ticketPriceInput, onScreenButton] = Array.from(form.children);
    const moviesOnScreen = document.querySelector('#movies > ul');
    const moivesInArchive = document.querySelector('#archive > ul');
    const clearButton = document.querySelector('#archive > button');

    onScreenButton.addEventListener('click', onScreenFunc);

    function onScreenFunc(e) {
        e.preventDefault();

        if (nameInput.value === '' || hallInput.value === '' || isNaN(Number(ticketPriceInput.value)) || ticketPriceInput.value.trim() === '') {
            return;
        }

        const movie = nameInput.value;
        const hall = hallInput.value;
        const ticketPrice = Number(ticketPriceInput.value);

        const li = makeElement('li');
        const span = makeElement('span', movie);
        li.appendChild(span);

        const strongOne = makeElement('strong', `Hall: ${hall}`);
        li.appendChild(strongOne);

        const div = makeElement('div');
        const strongTwo = makeElement('strong', ticketPrice.toFixed(2));
        div.appendChild(strongTwo);

        const input = makeElement('input');
        input.setAttribute('placeholder', 'Tickets Sold');
        div.appendChild(input);

        const archiveButton = makeElement('button', 'Archive');
        div.appendChild(archiveButton);

        li.appendChild(div);
        moviesOnScreen.appendChild(li);

        nameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = '';

        archiveButton.addEventListener('click', archiveFunc);

        function archiveFunc() {
            const ticketsSoldInput = div.children[1].value;

            if (isNaN(Number(ticketsSoldInput)) || ticketsSoldInput.trim() === '') {
                return;
            }
            moviesOnScreen.removeChild(li);
            const totalAmountOfSoldTickets = Number(ticketsSoldInput) * ticketPrice;
            
            li.removeChild(div);
            li.lastChild.remove();
            li.appendChild(makeElement('strong', `Total amount: ${totalAmountOfSoldTickets.toFixed(2)}`));
            li.appendChild(makeElement('button', 'Delete'));

            li.children[2].addEventListener('click', deleteArchive);

            moivesInArchive.appendChild(li);

            clearButton.addEventListener('click', deleteArchive )

            function deleteArchive() {
                moivesInArchive.removeChild(li);
            }
        } 
    }
}
