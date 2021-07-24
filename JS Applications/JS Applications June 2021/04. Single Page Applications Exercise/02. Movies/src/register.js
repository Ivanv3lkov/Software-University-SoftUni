import { router } from "./router.js";
import {
    domEL, validateUserRegister,
    setUserToken, clearData,
    reqUrls, serverResponse, errorHandler
} from "./helpers.js";
import { navigation } from "./navigation.js";

const form = domEL['form-sign-up'].querySelector('form')
let rowData = form.querySelectorAll('input')

form.addEventListener('submit', (e => {
    e.preventDefault();
    new FormData(e.target);
}));

form.addEventListener('formdata', (e => {
    onClickRegister([...e.formData.entries()]
        .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {}))
}));

function renderRegister() {
    const fragment = document.createDocumentFragment()
    fragment.appendChild(navigation())
    fragment.append(domEL['form-sign-up'])

    return fragment
}

function register() {
    domEL['main'].innerHTML = ''
    domEL['main'].appendChild(renderRegister())
}

async function onClickRegister(x) {
    const body = JSON.stringify(validateUserRegister(x))
    const data = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body
    }
    try {
        const x = await fetch(reqUrls['register'], data)
            .then(serverResponse)
            .then(r => r.json())
        if (x) {
            setUserToken(x)
            clearData(rowData)
            router('/home')
        }
    } catch (e) {
        errorHandler(e)
    }

}

export { register }