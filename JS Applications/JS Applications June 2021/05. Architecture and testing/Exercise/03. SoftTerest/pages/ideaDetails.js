import { ce } from "../helpers/htmlHelpers.js";
import auth from "../services/authService.js";
import ideaService from "../services/ideasService.js";
import viewFinder from "../viewFinder.js";

let section = undefined;
let navLinkClass = undefined;


function initiliaze(domElement, linkClass) {
    section = domElement;
    navLinkClass = linkClass;

}

async function getView(id) {
    let ideaDetails = await ideaService.getIdea(id);
    [...section.children].forEach(el => el.remove());

    let htmlIdea = createHtmlIdea(ideaDetails);
    section.appendChild(htmlIdea);
    return section;
}

function createHtmlIdea(idea) {
    //          <img class="det-img" src="./images/dinner.jpg" />
    //         <div class="desc">
    //             <h2 class="display-5">Dinner Recipe</h2>
    //             <p class="infoType">Description:</p>
    //             <p class="idea-description">There are few things as comforting as heaping bowl of pasta at the end of a long
    //                 day. With so many easy pasta recipes out there, there's something for every palate to love. That's why
    //                 pasta
    //                 makes such a quick, easy dinner for your family—it's likely to satisfy everyone's cravings, due to its
    //                 versatility.</p>
    //         </div>
    //         <div class="text-center">
    //             <a class="btn detb" href="#">Delete</a>
    //         </div>

    let ideaImg = ce('img', { class: 'det-img', src: `${idea.img}` });

    let titleHeading = ce('h2', { class: 'display-5' }, idea.title);
    let descriptionLabelP = ce('p', { class: 'infoType' }, 'Description:');
    let descriptionP = ce('p', { class: 'idea-description' }, idea.description);

    let descDiv = ce('div', { class: 'desc' }, titleHeading, descriptionLabelP, descriptionP);

    let textCenterDiv = ce('div', { class: 'text-center' });
    if (auth.getUserId() === idea._ownerId) {
        let deleteButton = ce('a',
            { class: `btn detb ${navLinkClass}`, 'data-route': 'delete', 'data-id': `${idea._id}`, href: '#' }, 'Delete');
        deleteButton.addEventListener('click', viewFinder.changeViewHandler);
        textCenterDiv.appendChild(deleteButton);
    }

    let fragment = document.createDocumentFragment();
    fragment.append(ideaImg, descDiv, textCenterDiv);
    return fragment;
}

async function deleteIdea(id) {
    let deleteResult = await ideaService.deleteIdea(id);
    viewFinder.navigateTo('dashboard');
}

let ideaDetailsPage = {
    initiliaze,
    getView,
    deleteIdea
};

export default ideaDetailsPage;