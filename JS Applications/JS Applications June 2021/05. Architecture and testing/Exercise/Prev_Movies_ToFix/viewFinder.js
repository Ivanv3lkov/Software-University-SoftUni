
//1. add data to html in order to be able to select links
//2. add data to html links that keeps information for changing view 
//3. addEventListener to links

import auth from "./services/authService.js";
import addMoviePage from "./pages/addMovie.js";
import editMoviePage from "./pages/editMovie.js";
import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import movieDetailsPage from "./pages/movieDetails.js";
import registerPage from "./pages/register.js";


// lots of magic strings
let views = {
    'home': async () => await homePage.getView(),
    'login': async () => await loginPage.getView(),
    'register': async () => await registerPage.getView(),
    'movie-details': async (id) => await movieDetailsPage.getView(id),
    'logout': async () => await auth.logout(),
    'like': async(id) => await movieDetailsPage.like(id),
    'add-movie': async () => await addMoviePage.getView(),
    'edit-movie': async (id) => await editMoviePage.getView(id),
    'delete': async(id) => await movieDetailsPage.deleteMovie(id)
};

let navLinkSelector = undefined;
let navigationCallback = undefined;

function initiliaze(allLinkElements, linkSelector, callback) {
    allLinkElements.forEach(a => a.addEventListener('click', changeViewHandler));
    navLinkSelector = linkSelector;
    navigationCallback = callback;
}

export async function changeViewHandler(e) {
    // uh-oh magic strings
    let element = e.target.matches(navLinkSelector)
        ? e.target
        : e.target.closest(navLinkSelector);
    let route = element.dataset.route;
    let id = element.dataset.id;
    navigateTo(route, id);
}

export async function navigateTo(route, id) {
    console.log(route);
    if (views.hasOwnProperty(route)) {
        let viewPromise = views[route](id);
        // magic strings here too :( , also can this be extracted?
        navigationCallback(viewPromise);
    }
}

let viewFinder = {
    initiliaze,
    navigateTo,
    changeViewHandler,
};

export default viewFinder;