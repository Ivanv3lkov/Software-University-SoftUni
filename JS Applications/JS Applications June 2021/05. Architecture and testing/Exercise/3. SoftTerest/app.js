import homePage from "./src/pages/homePage.js";
import loginPage from "./src/pages/loginPage.js";
import registerPage from "./src/pages/registerPage.js";
import dashboardPage from "./src/pages/dashboardPage.js";
import detailsPage from "./src/pages/detailsPage.js";
import createPage from "./src/pages/createPage.js";
import navigation from "./src/runners/nav.js";
import viewFinder from "./src/runners/viewPort.js";
import viewDelegator from "./src/viewDelegator.js";



const startEngine = () => {
    homePage.init(document.querySelector('#homePage'));
    loginPage.init(document.querySelector('#loginPage'));
    registerPage.init(document.querySelector('#registerPage'));
    dashboardPage.init(document.querySelector('#dashboard-holder'));
    detailsPage.init(document.querySelector('#detailsPage'));
    createPage.init(document.querySelector('#createPage'));
    navigation.init(document.querySelector('#navBar'));

    viewDelegator.init(document.querySelector('#app'),'.view');
    viewFinder.init(document.querySelectorAll('.link'), '.link', viewDelegator.changeView);
    viewFinder.navigateTo('home');
};
startEngine();