import auth from "../services/authService.js";

let section = undefined;

export function initialize(domSection) {
    section = domSection;
    if (auth.isLoggedIn()) {
        this.loginUser();
    } else {
        this.logoutUser();
    }
}

export function logoutUser() {
    // this one is actually ok, as it is an id, that is unlikely to change,
    // but can still be extracted internally
    let userWelcome = section.querySelector('#user-welcome');
    userWelcome.textContent = 'Welcome, guest';
    // uh-oh more magic strings
    let userLinks = [...section.querySelectorAll('.user')];
    userLinks.forEach(el => el.classList.add('hidden'));
    // uh-oh more magic strings
    let guestLinks = [...section.querySelectorAll('.guest')];
    guestLinks.forEach(el => el.classList.remove('hidden'));
}

export function loginUser() {
    // this one is actually ok, as it is an id, that is unlikely to change,
    // but can still be extracted internally
    let userWelcome = section.querySelector('#user-welcome');
    // can ve extracted but not as important
    userWelcome.textContent = `Welcome, ${auth.getUsername()}`;
    // uh-oh more magic strings
    let userLinks = [...section.querySelectorAll('.user')];
    userLinks.forEach(el => el.classList.remove('hidden'));
    // uh-oh more magic strings
    let guestLinks = [...section.querySelectorAll('.guest')];
    guestLinks.forEach(el => el.classList.add('hidden'));
}

let nav = {
    initialize,
    loginUser,
    logoutUser
};

export default nav;