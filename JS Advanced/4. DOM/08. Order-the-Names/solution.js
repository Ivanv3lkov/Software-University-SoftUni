function solve() {
    let addButton = document.querySelector('button');
    let inputTextElement = document.querySelector('input');
    let listItemElements = document.querySelectorAll('ol li');
 
    addButton.addEventListener('click', function () {

        let inputName = inputTextElement.value;
 
        if (inputName) {
            let currentName = '';
            currentName += inputName[0].toUpperCase() + inputName.slice(1);
 
            // for (let i = 1; i < inputName.length; i++) {
            //     currentName += inputName[i].toLowerCase();
            // }
 
            let index = currentName.charCodeAt(0) - 65;
 
            if (listItemElements[index].textContent.length === 0) {
                listItemElements[index].textContent += currentName;
            } else {
                listItemElements[index].textContent += ', ' + currentName;
            }
 
            inputTextElement.value = '';
        }
    })
}