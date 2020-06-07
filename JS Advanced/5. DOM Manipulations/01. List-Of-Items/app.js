function addItem() {
    let text = document.getElementById('newItemText').value;
    let itemsList = document.getElementById('items');
    let li = document.createElement('li');
    
    if (text.length === 0) {
        return;
    };

    li.textContent = text;
    itemsList.appendChild(li)

    document.getElementById('newItemText').value = '';
}