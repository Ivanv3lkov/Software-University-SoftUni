function addItem() {
    let ulElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
   
    if (inputElement.value) {
        let newLi = document.createElement('li');
        newLi.textContent = inputElement.value;
        let a = document.createElement('a');
        a.textContent = '[Delete]';
        a.setAttribute('href', '#');
        newLi.appendChild(a);
        newLi.addEventListener('click', (e) => {
            e.currentTarget.remove();
        });
        ulElement.appendChild(newLi);
    
        inputElement.value = '';
    }
}