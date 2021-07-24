import auth from "../services/authService.js";
import { ce } from "../helpers/htmlHelpers.js";
import viewFinder from "../viewFinder.js";
import homePage from "./home.js";
import movieService from "../services/movieService.js";
import likesService from "../services/likesService.js";

let section = undefined;
let navLinkClass = undefined;

function initiliaze(domElement, linkClass) {
    section = domElement;
    navLinkClass = linkClass;
}

async function getView(id) {
    let movieDetail = await movieService.getMovie(id);
    console.log(movieDetail);

    let movieContainer = section.querySelector('#movie-details-container');
    [...movieContainer.children].forEach(x => x.remove());
    let userId = auth.getUserId();
    // should all these requests run one after the other?
    let userLikesArr = await likesService.getUserLikes(id);
    let movieLikes = await likesService.getMovieLikes(id);
    console.log(movieLikes);
    let movieDetails = createMovieDetails(movieDetail, userLikesArr.length > 0, movieLikes);
    movieContainer.appendChild(movieDetails);
    return section;
}

async function like(movieId) {
    let body = { movieId: movieId };
    let result = await likesService.likeMovie(body);
    // redirecting will reload the page, making all requests again
    return movieDetailsPage.getView(movieId);
}

async function deleteMovie(movieId) {
    try {
        let deleteResult = await movieService.deleteMovie(movieId);
        // is it the movie details job to know about other pages?
        return homePage.getView();
    } catch (err) {
        console.error(err);
        alert(err);
    }
}

function createMovieDetails(movie, hasLiked, likes) {
    let movieHeading = ce('h1', undefined, `Movie title: ${movie.title}`);

    let movieImage = ce('img', { class: 'img-thumbnail', src: movie.img, alt: 'Movie' });
    let imageDiv = ce('div', { class: 'col-md-8' }, movieImage);

    let descriptionHeading = ce('h3', { class: 'my-3' }, 'Movie Description');
    let descriptionP = ce('p', undefined, movie.description);
    // maybe some of these magic strings can be extracted
    let deleteBtn = ce('a', { class: `btn btn-danger ${navLinkClass}`, 'data-route': 'delete', 'data-id': `${movie._id}`, href: `#/delete/${movie._id}` }, 'Delete');
    deleteBtn.addEventListener('click', viewFinder.changeViewHandler);
    let editBtn = ce('a', { class: `btn btn-warning ${navLinkClass}`, 'data-route': 'edit-movie', 'data-id': `${movie._id}`, href: `#/edit/${movie._id}` }, 'Edit');
    editBtn.addEventListener('click', viewFinder.changeViewHandler);
    let likeBtn = ce('a', { class: `btn btn-primary ${navLinkClass}`, 'data-route': 'like', 'data-id': `${movie._id}`, href: `#/like/${movie._id}` }, 'Like');
    likeBtn.addEventListener('click', viewFinder.changeViewHandler);
    let likesSpan = ce('span', { class: 'enrolled-span likes' }, `Liked: ${likes}`);
    let descriptionDiv = ce('div', { class: 'col-md-4 text-center' },
        descriptionHeading, descriptionP);

    let isOwner = auth.getUserId() === movie._ownerId;
    if (isOwner) {
        descriptionDiv.appendChild(deleteBtn);
        descriptionDiv.appendChild(editBtn);
    }

    if (!hasLiked && !isOwner) {
        descriptionDiv.appendChild(likeBtn);
    }

    descriptionDiv.appendChild(likesSpan);

    let movieDiv = ce('div', { class: 'row bg-light text-dark movie-details', 'data-id': `${movie._id}` },
        movieHeading, imageDiv, descriptionDiv);

    return movieDiv;
}

let movieDetailsPage = {
    initiliaze,
    getView,
    like,
    deleteMovie
};

export default movieDetailsPage;