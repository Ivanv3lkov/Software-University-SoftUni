function solve() {
    let [bookInput, yearInput, priceInput] = document.querySelectorAll('input');
    let totalProfitHeader = Array.from(document.querySelectorAll('h1'))[1];
    let [oldShelf, newShelf] = Array.from(document.querySelectorAll('.bookShelf'));
    let addBtn = document.querySelector('button');
    let totalSum = 0;

    addBtn.addEventListener('click', addBook);

    function addBook(e) {
        e.preventDefault();
        let title = bookInput.value;
        let year = Number(yearInput.value);
        let price = Number(priceInput.value);

        if (title !== '' && year > 0 && price > 0) {
            if (year >= 2000) {
                createBook(false, title, year, price, newShelf);
            } else {
                createBook(true, title, year, price, oldShelf);
            }
        }
    }

    function createBook(isOld, title, year, price, shelf) {
        price = isOld ? price * 0.85 : price;
        let bookElement = document.createElement('div');
        let p = document.createElement('p');
        let buyBtn = document.createElement('button');

        bookElement.classList.add('book');
        p.textContent = `${title} [${year}]`;
        buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;

        buyBtn.addEventListener('click', function(e) {
            totalSum += price;
            this.parentNode.parentNode.removeChild(this.parentNode);
            totalProfitHeader.textContent = `Total Store Profit: ${totalSum.toFixed(2)} BGN`;
        })

        bookElement.appendChild(p);
        bookElement.appendChild(buyBtn);

        if (!isOld) {
            let moveBtn = document.createElement('button');
            moveBtn.textContent = 'Move to old section';
            bookElement.appendChild(moveBtn);
            
            moveBtn.addEventListener('click', function() {
                this.parentNode.parentNode.removeChild(this.parentNode);
                createBook(true, title, year, price, oldShelf)
            })
        }

        shelf.appendChild(bookElement);
    }
}