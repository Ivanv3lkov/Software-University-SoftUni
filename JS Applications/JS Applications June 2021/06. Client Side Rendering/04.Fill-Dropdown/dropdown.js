import { render } from './../node_modules/lit-html/lit-html.js';
import { allOptionsTemplate } from './templates/optionTemplates.js';

let menuSelect = document.getElementById('menu');
let inputField = document.getElementById('itemText');

let addOptionForm = document.getElementById('add-option-form');
addOptionForm.addEventListener('submit', addItem);

let submitButton = document.getElementById('submit');
submitButton.disabled = true;

loadOptions();

let options = [];

async function loadOptions() {
    let optionsResponse = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    let optionsObj = await optionsResponse.json();
    options = Object.values(optionsObj);
    render(allOptionsTemplate(options), menuSelect);
    submitButton.disabled = false;
}

async function addItem(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let text = formData.get('text');

    if (!text) {
        return;
    }

    let newOption = { text };

    let createResponse = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newOption)
    });

    if (createResponse.ok) {
        let createdOption = await createResponse.json();
        let isOptionExists = options.find(option => option.text === createdOption.text);
        if (isOptionExists) {
            inputField.classList.add('error');
            alert('This option already exists in the section! Please enter a new option!');
        } else {
            inputField.classList.remove('error');
            inputField.value = '';
            options.push(createdOption);
        }
        render(allOptionsTemplate(options), menuSelect);
    }
}