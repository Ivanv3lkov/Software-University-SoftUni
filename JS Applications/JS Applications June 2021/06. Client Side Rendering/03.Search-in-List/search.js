import { render } from './../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';
import { townsTemplate } from './templates/townsTemplates.js';

let townsDiv = document.getElementById('towns');
let baseTowns = towns.map(t => ({name: t}));

render(townsTemplate(baseTowns), townsDiv);

let resultDiv = document.getElementById('result');

let searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click', searchHandler);

function searchHandler() {
   let searchInput = document.getElementById('searchText');
   let searchText = searchInput.value.toLowerCase();

   let allTowns = towns.map(t => ({ name: t }));
   let matchedTowns = allTowns.filter(t => t.name.toLowerCase().includes(searchText));
   matchedTowns.forEach(t => t.class = 'active');

   render(townsTemplate(allTowns), townsDiv);
   resultDiv.textContent = `${matchedTowns.length} matches found`;
}
