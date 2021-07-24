import auth from "../services/authService.js";

let section = undefined;
let navLinkClass = undefined;

function initiliaze(domElement, linkClass) {
    section = domElement;
    navLinkClass = linkClass;
    let form = section.querySelector('form');
    form.addEventListener('submit', registerUser);
}

async function getView() {
    return section;
}

async function registerUser(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');
    let repeatPassword = formData.get('repeatPassword');


    if (email === '' ||
        password === '' ||
        (password.length < 6) ||
        password !== repeatPassword) {
        alert('Fields must not be empty and passwords must match');
    }

    let user = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    form.reset();
    auth.register(user);
}

let registerPage = {
    initiliaze,
    getView
};

export default registerPage;