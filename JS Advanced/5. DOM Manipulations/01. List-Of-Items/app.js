function addItem() {
    let text = document.getElementById('newItemText').value;
    let itemsList = document.getElementById('items');

    if (text.length === 0) {
        return;
    };
    let li = document.createElement('li');
    li.textContent = text;
    itemsList.appendChild(li)

    document.getElementById('newItemText').value = '';
}