import { ce } from "../helpers/htmlHelpers.js";
import ideaService from "../services/ideasService.js";
import viewFinder from "../viewFinder.js";

let section = undefined;
let navLinkClass = undefined;
let noIdeasHeading = undefined;

function initiliaze(domElement, linkClass) {
    section = domElement;
    navLinkClass = linkClass;
    noIdeasHeading = section.querySelector('#no-ideas');
}

async function getView() {
    let ideas = await ideaService.getAllIdeas();

    [...section.children].forEach(el => el.remove());
    let ideasHtml = ideas.map(x => createHtmlIdea(x));
    if(ideas.length > 0){
        section.append(...ideasHtml);
        noIdeasHeading.remove();
    } else {
        section.appendChild(noIdeasHeading);
    }
    return section;
}

function createHtmlIdea(idea) {
    // <div class="card overflow-hidden current-card details idea" style="width: 20rem; height: 18rem;">
    //             <div class="card-body">
    //                 <p class="card-text">Dinner Recipe</p>
    //             </div>
    //             <img class="card-image" src="./images/dinner.jpg" alt="Card image cap">
    //             <a class="btn" href="#">Details</a>
    //         </div>

    let titleP = ce('p', { class: 'card-text' }, idea.title);
    let cardBodyDiv = ce('div', { class: 'card-body' }, titleP);

    let ideaImage = ce('img', { class: 'card-image', src: `${idea.img}`, alt: 'Card image cap' });
    let detailsButton = ce('a', { class: `btn ${navLinkClass}`, href: '#', 'data-route': 'details', 'data-id': `${idea._id}` }, 'Details');
    detailsButton.addEventListener('click', viewFinder.changeViewHandler);

    let ideaDiv = ce('div', {class: 'card overflow-hidden current-card details idea', style:"width: 20rem; height: 18rem;"},
    cardBodyDiv, ideaImage, detailsButton);

    return ideaDiv;
}

let dashboardPage = {
    initiliaze,
    getView
};

export default dashboardPage;