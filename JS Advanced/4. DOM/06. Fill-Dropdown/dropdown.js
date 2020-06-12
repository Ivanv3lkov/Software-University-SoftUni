function addItem() {
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');
    const text = textInput.value;
    const value = valueInput.value;

    const option = document.createElement('option');
    
    option.textContent = text;
    option.value = value;

    document.getElementById('menu').appendChild(option);

    textInput.value = '';
    valueInput.value = '';
}