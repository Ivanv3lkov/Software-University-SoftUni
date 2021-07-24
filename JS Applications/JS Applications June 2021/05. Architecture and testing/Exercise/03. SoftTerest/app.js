import createIdeaPage from "./pages/createIdea.js";
import dashboardPage from "./pages/dashboard.js";
import homePage from "./pages/home.js";
import ideaDetailsPage from "./pages/ideaDetails.js";
import loginPage from "./pages/login.js";
import nav from "./pages/nav.js";
import registerPage from "./pages/register.js";
import viewChanger from "./viewChanger.js";
import viewFinder from "./viewFinder.js";

setup();

async function setup(){
    let linkClass = 'link';
    let linkSelector = `.${linkClass}`;

    loginPage.initiliaze(document.getElementById('login-page'));
    registerPage.initiliaze(document.getElementById('register-page'));
    homePage.initiliaze(document.getElementById('home-page'), linkClass);
    createIdeaPage.initiliaze(document.getElementById('create-page'));
    ideaDetailsPage.initiliaze(document.getElementById('details-page'), linkClass);
    dashboardPage.initiliaze(document.getElementById('dashboard-holder'), linkClass);

    nav.initialize(document.querySelector('nav'));

    let appElement = document.getElementById('app');

    viewChanger.initiliaze(appElement, '.view');
    viewFinder.initiliaze(document.querySelectorAll(linkSelector), linkSelector, viewChanger.changeView);

    viewFinder.navigateTo('home');
}


