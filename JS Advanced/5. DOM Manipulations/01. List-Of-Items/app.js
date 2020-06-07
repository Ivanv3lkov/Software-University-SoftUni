function addItem() {
    let text = document.getElementById('newItemText').value;
    let listOfItems = document.getElementById('items');

    if (text.length === 0) {
        return;
    };
    let li = document.createElement('li');
    li.textContent = text;
    listOfItems.appendChild(li);

    document.getElementById('newItemText').value = '';
}