import authService from "../services/authService.js";


let keepRefElement = undefined;

const init = (domElement) => {
    keepRefElement = domElement;
    if (authService.isLoggedIn()) {
        loginUserView();
    } else {
        logoutUserView();
    }
};


const loginUserView = () => {
    let usersElements = keepRefElement.querySelectorAll('.user');
    let guestsElements = keepRefElement.querySelectorAll('.guest');
    Array.from(usersElements).forEach(e => e.classList.remove('hidden'));
    Array.from(guestsElements).forEach(e => e.classList.add('hidden'));
};
const logoutUserView = () => {
    let usersElements = keepRefElement.querySelectorAll('.user');
    let guestsElements = keepRefElement.querySelectorAll('.guest');
    Array.from(usersElements).forEach(e => e.classList.add('hidden'));
    Array.from(guestsElements).forEach(e => e.classList.remove('hidden'));
};

let navigation = {
    init,loginUserView,logoutUserView
};

export default navigation;