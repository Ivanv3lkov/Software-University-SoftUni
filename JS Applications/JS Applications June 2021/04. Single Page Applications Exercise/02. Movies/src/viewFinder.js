import addMoviePage from "./pages/addMovie.js";
import editMoviePage from "./pages/editMovie.js";
import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import movieDetailsPage from "./pages/movieDetails.js";
import registerPage from "./pages/register.js";
import auth from "./services/authService.js";

let sections = {
    //each of these functions will produce a view
    'home': async () => await homePage.getView(),
    'register': async () => await registerPage.getView(),
    'login': async () => await loginPage.getView(),
    'add-movie': async () => await addMoviePage.getView(),
    'edit': async (id) => await editMoviePage.getView(id),
    'details': async (id) => await movieDetailsPage.getView(id),
    'logout': async () => await auth.logout(),
    'delete': async (id) => await movieDetailsPage.deleteMovie(id),
    'like': async (id) => await movieDetailsPage.likeMovie(id)
};

let getViewCallback = undefined;
let linkRouteSelector = undefined;

export function initialize(linkElements, linkSelector, callback) {
    linkRouteSelector = linkSelector;
    linkElements.forEach(el => el.addEventListener('click', navigationHandler));
    getViewCallback = callback;
}

export function navigationHandler(e) {
    let element = e.target.matches(linkRouteSelector)
        ? e.target
        : e.currentTarget.closest(linkRouteSelector);
    if (element.dataset.route !== undefined) {
        let [route, id] = element.dataset.route.split('/');
        // console.log(route);
        // console.log(id);
        navigateTo(route, id);
    }
}

export function navigateTo(route, id) {
    if (sections[route] !== undefined) {
        let viewPromise = sections[route](id);
        getViewCallback(viewPromise);
    }
}

export function redirectTo(route, id) {
    if (sections[route] !== undefined) {
        let viewPromise = sections[route](id);
        //unnecessary for this solution, but usefull to know in which page/view we are
        location.hash = `/${route}${id !== undefined ? `/${id}` : ''}`;
        return viewPromise;
    }
}

let viewFinder = {
    navigateTo,
    redirectTo,
    navigationHandler,
    initialize
}

export default viewFinder;

