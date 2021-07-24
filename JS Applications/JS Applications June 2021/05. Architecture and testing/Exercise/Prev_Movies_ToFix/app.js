//1. setup sections
//2. add data to html in order to work with html correctly
//3. create logic for showing views - routing 

import addMoviePage from "./pages/addMovie.js";
import editMoviePage from "./pages/editMovie.js";
import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import movieDetailsPage from "./pages/movieDetails.js";
import nav from "./pages/nav.js";
import registerPage from "./pages/register.js";
import viewChanger from "./viewChanger.js";
import viewFinder from "./viewFinder.js";

setup();

async function setup(){
    //setup html page login
    //setup html page register
    //setup html page logout??? - maybe only logic
    //setup html page homepage
    //setup html page add movie
    //setup html page movie details
    //setup html page edit movie
    //setup html page likes?? - maybe only logic
    //setup html page delete?? - maybe only logic

    let linkClass = 'link';
    let linkSelector = `.${linkClass}`;

    loginPage.initiliaze(document.getElementById('form-login'));
    registerPage.initiliaze(document.getElementById('form-sign-up'));
    homePage.initiliaze(document.getElementById('home-page'), linkClass);
    addMoviePage.initiliaze(document.getElementById('add-movie'));
    movieDetailsPage.initiliaze(document.getElementById('movie-details'), linkClass);
    editMoviePage.initiliaze(document.getElementById('edit-movie'));

    nav.initialize(document.querySelector('nav'));

    let appElement = document.getElementById('main');

    viewChanger.initiliaze(appElement, '.view');
    viewFinder.initiliaze(document.querySelectorAll(linkSelector), linkSelector, viewChanger.changeView);

    viewFinder.navigateTo('home');
}


