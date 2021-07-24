import createIdeaPage from "./pages/createIdea.js";
import dashboardPage from "./pages/dashboard.js";
import homePage from "./pages/home.js";
import ideaDetailsPage from "./pages/ideaDetails.js";
import loginPage from "./pages/login.js";
import registerPage from "./pages/register.js";
import auth from "./services/authService.js";

let views = {
    'home': async () => await homePage.getView(),
    'login': async () => await loginPage.getView(),
    'register': async () => await registerPage.getView(),
    'details': async (id) => await ideaDetailsPage.getView(id),
    'logout': async () => await auth.logout(),
    'create': async () => await createIdeaPage.getView(),
    'dashboard': async () => await dashboardPage.getView(),
    'delete': async(id) => await ideaDetailsPage.deleteIdea(id)
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