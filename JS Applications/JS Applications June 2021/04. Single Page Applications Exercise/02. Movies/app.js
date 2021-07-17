import registerPage from './src/pages/register.js';
import nav from './src/nav.js';
import homePage from './src/pages/home.js';
import loginPage from './src/pages/login.js';
import addMoviePage from './src/pages/addMovie.js';
import movieDetailsPage from './src/pages/movieDetails.js';
import editMoviePage from './src/pages/editMovie.js';
import viewFinder from './src/viewFinder.js';
import auth from './src/services/authService.js';

let appElement = undefined;
setupApp();

function setupApp() {
    let appSelector = '#app';
    //make sure we start with a clean localStorage
    auth.cleanStorage();
    appElement = document.querySelector(appSelector);
    homePage.initialize(document.querySelector('#home-page'));
    registerPage.initialize(document.querySelector('#form-sign-up'));
    loginPage.initialize(document.querySelector('#form-login'));
    addMoviePage.initialize(document.querySelector('#add-movie'));
    movieDetailsPage.initialize(document.querySelector('#movie-example'), 'link');
    editMoviePage.initialize(document.querySelector('#edit-movie'));
    nav.initialize(document.querySelector('nav'));
    viewFinder.initialize(document.querySelectorAll('.link'), '.link', changeView);

    viewFinder.navigateTo('home');
}

async function changeView(viewPromise) {
    let view = await viewPromise;
    [...appElement.children].forEach(el => el.remove());
    appElement.appendChild(view);
}