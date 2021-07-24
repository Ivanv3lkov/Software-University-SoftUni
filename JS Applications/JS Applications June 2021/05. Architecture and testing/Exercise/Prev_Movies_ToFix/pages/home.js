import auth from "../services/authService.js";
import { ce } from "../helpers/htmlHelpers.js";
import { jsonRequest } from "../helpers/httpService.js";
import viewFinder from "../viewFinder.js";
import movieService from "../services/movieService.js";

let section = undefined;
let navLinkClass = undefined;

function initiliaze(domElement, linkClass) {
    section = domElement;
    navLinkClass = linkClass;
}

async function getView() {
    let movies = await movieService.getAllMovies();
    console.log(movies);

    let moviesHtml = movies.map(m => createHtmlMovie(m));

    let movieContainer = section.querySelector('#movie-container');
    movieContainer.querySelectorAll('.movie').forEach(el => el.remove());

    movieContainer.append(...moviesHtml);
    // movieContainer.innerHTML = moviesHtml;
    // movieContainer.querySelectorAll('.link')
    //     .forEach(l => l.addEventListener('click', viewFinder.changeViewHandler));
    return section;
}

let homePage = {
    initiliaze,
    getView
};

function createHtmlMovie(movie) {
    let movieImg = ce('img', { class: 'card-img-top', src: movie.img, alt: 'Card image cap', width: '400' });
    let cardBodyDiv = ce('div', { class: 'card-body' }, ce('h4', { class: 'card-title' }, movie.title));

    let detailsButton = ce('button', { type: 'button', class: 'btn btn-info' }, 'Details');
    let linkAnchor = ce('a', { class: `${navLinkClass}`, "data-route": `movie-details`, 'data-id': `${movie._id}`, href: `#/details/${movie._id}` });
    if(auth.isLoggedIn()){
        linkAnchor.appendChild(detailsButton);
    }
    linkAnchor.addEventListener('click', viewFinder.changeViewHandler);
    let cardFooterDiv = ce('div', { class: 'card-footer' }, linkAnchor);

    let movieCardDiv = ce('div', { class: 'card mb-4 movie' }, movieImg, cardBodyDiv, cardFooterDiv);
    return movieCardDiv;
}

export default homePage;