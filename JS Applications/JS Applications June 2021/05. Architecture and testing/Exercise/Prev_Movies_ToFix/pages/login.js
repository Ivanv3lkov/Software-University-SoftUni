import auth from "../services/authService.js";
import { jsonRequest } from "../helpers/httpService.js";
import viewFinder from "../viewFinder.js";
import nav from "./nav.js";

let section = undefined;

function initiliaze(domElement){
    section = domElement;
    let form = section.querySelector('#login-form');
    form.addEventListener('submit', loginUser);
}

async function getView(){
    return section;
}

async function loginUser(e){
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let user = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    form.reset();
    await auth.login(user);
}

let loginPage = {
    initiliaze,
    getView
};

export default loginPage;