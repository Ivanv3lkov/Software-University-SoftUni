import auth from "../services/authService.js";

let section = undefined;
let navLinkClass = undefined;

function initiliaze(domElement, linkClass) {
    section = domElement;
    navLinkClass = linkClass;
    let form = section.querySelector('form');
    form.addEventListener('submit', loginUser);
}

async function getView() {
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