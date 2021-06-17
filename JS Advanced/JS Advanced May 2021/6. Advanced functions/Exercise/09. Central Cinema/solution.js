function solve() {
    let [nameInput, hallInput, ticketPriceInput, onScreenButton] = Array.from(document.querySelector('#container').children);
    let moviesOnScreenUlElement = document.querySelector('#movies > ul');
    let archivedMoviesUlElement = document.querySelector('#archive > ul');
    let clearButton = document.querySelector('#archive > button');

    onScreenButton.addEventListener('click', onScreenHandler);

    function onScreenHandler(e) {
        e.preventDefault();
        if (nameInput.value.trim() === '' || hallInput.value.trim() === '' || ticketPriceInput.value === '' || isNaN(Number(ticketPriceInput.value))) {
            return;
        }
        let name = nameInput.value;
        let hall = hallInput.value;
        let price = Number(ticketPriceInput.value);

        let li = createElement('li');
        let span = createElement('span', name);
        let strongOne = createElement('strong', `Hall: ${hall}`);
        li.appendChild(span);
        li.appendChild(strongOne);

        let div = createElement('div');
        let strongTwo = createElement('strong', price.toFixed(2));
        let input = createElement('input');
        input.setAttribute('placeholder', 'Tickets Sold');
        let archiveButton = createElement('button', 'Archive');
        div.appendChild(strongTwo);
        div.appendChild(input);
        div.appendChild(archiveButton);

        li.appendChild(div);
        moviesOnScreenUlElement.appendChild(li);

        archiveButton.addEventListener('click', archiveHandler);

        function archiveHandler(e) {
            if (input.value.trim() == '' || isNaN(Number(input.value.trim()))) {return;}

            let totalAmount = Number(div.children[0].textContent) * Number(div.children[1].value);
            let currentLi = e.target.parentElement.parentElement;
            currentLi.removeChild(div);
            currentLi.children[1].textContent = `Total amount: ${totalAmount.toFixed(2)}`;
            currentLi.appendChild(createElement('button', 'Delete'));
            currentLi.children[2].addEventListener('click', deleteHandler);
            clearButton.addEventListener('click', clearAllHandler);

            moviesOnScreenUlElement.removeChild(li);
            archivedMoviesUlElement.appendChild(currentLi);

            function deleteHandler(e) {
                e.target.parentElement.remove();
            }

            function clearAllHandler() {
                Array.from(archivedMoviesUlElement.children).forEach(li => {
                    li.remove();
                })
            }
        }
        nameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = '';
    }

    function createElement(type, text) {
        let element = document.createElement(type);

        if (text) {
            element.textContent = text;
        }

        return element;
    }
}