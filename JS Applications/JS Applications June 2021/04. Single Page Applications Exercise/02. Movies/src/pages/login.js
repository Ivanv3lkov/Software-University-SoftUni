import viewFinder from "../viewFinder.js";
import auth from "../services/authService.js";

let section = undefined;

export function initialize(domSection) {
    section = domSection;
    let form = section.querySelector('form');
    form.addEventListener('submit', sendLoginRequest);
}

export function getView() {
    return section;
}

async function sendLoginRequest(e) {
    e.preventDefault();
    try {
        let form = e.target;
        let formData = new FormData(form);

        let email = formData.get('email');
        let password = formData.get('password');
        let loginUser = {
            email,
            password
        };

        await auth.login(loginUser);
        form.reset();
        viewFinder.navigateTo('home');
    } catch (err) {
        console.error(err);
        alert(err);
    }
}

let loginPage = {
    initialize,
    getView
}

export default loginPage;