import {getFormDataLog} from "../utils/verifications.js";
import authService from "../services/authService.js";

let keepRefElement = undefined;

const init = (domElement) => {
    keepRefElement = domElement;
    let form = keepRefElement.querySelector('form');
    form.addEventListener('submit', loggUser)
};

const getPage = async () => {
    return keepRefElement
};

const loggUser = async (e) => {
    e.preventDefault();
    let form = e.currentTarget;

    try {
        let currForm = new FormData(form);
        let data = getFormDataLog([currForm.get('email'), currForm.get('password')]);
        await authService.logUser(data);
    } catch (err) {
        alert(err)
    } finally {
        form.reset();
    }

};

let loginPage = {
    init, getPage
};

export default loginPage;