import createPage from "../pages/createPage.js";
import detailsPage from "../pages/detailsPage.js";
import homePage from "../pages/homePage.js";
import loginPage from "../pages/loginPage.js";
import registerPage from "../pages/registerPage.js";
import dashboardPage from "../pages/dashboardPage.js";
import authService from "../services/authService.js";


let viewMap = {
    'create': async () => await createPage.getPage(),
    'details': async (id) => await detailsPage.getPage(id),
    'dashboard': async () => await dashboardPage.getPage(),
    'home': async () => await homePage.getPage(),
    'login': async () => await loginPage.getPage(),
    'register': async () => await registerPage.getPage(),
    'logout': async () => await authService.logout(),
    'delete': async (id) => await detailsPage.deleteIdea(id),
}

let navLink = undefined;
let callbackFuncFromViewDelegator = undefined; //navigationCallback

const init = (allButtonElements, navSelector, callbackFunc) => {
    allButtonElements.forEach(e => e.addEventListener('click', onClickTriggerAction));
    navLink = navSelector;
    callbackFuncFromViewDelegator = callbackFunc;

};

const onClickTriggerAction = async (e) => {
    let element = e.target.matches(navLink) ? e.target : e.target.closest(navLink);
    let route = element.dataset.route;
    let id = element.dataset.id;
    await  navigateTo(route, id);
};
const navigateTo = async (route, id) => {
    if (viewMap[route]) {
        let viewRespondPromise = viewMap[route](id);
        callbackFuncFromViewDelegator(viewRespondPromise);
    }
};

let viewPort = {
    init, navigateTo, onClickTriggerAction
};

export default viewPort;
