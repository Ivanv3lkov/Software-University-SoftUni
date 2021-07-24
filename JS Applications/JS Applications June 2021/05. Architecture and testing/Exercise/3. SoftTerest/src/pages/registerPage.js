import {getFormDataLog} from "../utils/verifications.js";
import authService from "../services/authService.js";

let keepRefElement = undefined;

const init = (domElement) => {
    keepRefElement = domElement;
    let form = keepRefElement.querySelector('form');
    form.addEventListener('submit', registerUser);
};

const getPage = async () => {
    return keepRefElement
};
const registerUser = async (e) => {
    e.preventDefault();
    let form = e.currentTarget;

    try {
        let currForm = new FormData(form);
        let data = getFormDataLog([currForm.get('email'), currForm.get('password'), currForm.get('repeatPassword')]);
        await authService.regUser(data);
    } catch (err) {
        alert(err)
    } finally {
        form.reset();
    }

};
let registerPage = {
    init, getPage
};

export default registerPage;