function addItem() {
    let ulElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let newLi = document.createElement('li');
    newLi.textContent = inputElement.value;
    ulElement.appendChild(newLi);

    inputElement.value = '';
}