function addItem() {
    const [newItemTextElement, newItemValueElement] = document.getElementsByTagName('input');
    if (!newItemTextElement.value || !newItemValueElement.value) {return}
    let menu = document.getElementById('menu');
    let option = document.createElement('option');
    option.textContent = newItemTextElement.value;
    option.value = newItemValueElement.value;
    menu.appendChild(option);
    
    newItemTextElement.value = '';
    newItemValueElement.value = '';
}