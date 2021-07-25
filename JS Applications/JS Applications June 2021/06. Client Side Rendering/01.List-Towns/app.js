import { render } from './../node_modules/lit-html/lit-html.js';
import { allTownsTemplate } from './templates/townTemplates.js';

const rootDivElement = document.getElementById('root');
const townsForm = document.querySelector('#towns-form');

townsForm.addEventListener('submit', displayTowns);

function displayTowns(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);
    let townsString = formData.get('towns');
    let towns = townsString.split(', ');

    render(allTownsTemplate(towns), rootDivElement);
}
