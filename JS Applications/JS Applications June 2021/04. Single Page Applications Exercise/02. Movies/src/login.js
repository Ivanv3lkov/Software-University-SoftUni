import { router } from "./router.js";
import { domEL, reqUrls, setUserToken, clearData, validateData, serverResponse, errorHandler } from "./helpers.js";
import { navigation } from "./navigation.js";

const form = domEL['form-login'].querySelector('form')
let rowData = form.querySelectorAll('input')
form.addEventListener('submit', (e => {
    e.preventDefault();

    new FormData(e.target);
}));

form.addEventListener('formdata', (e => {
    onCLickLogin([...e.formData.entries()]
        .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {}));
}));

function renderLogin() {
    const fragment = document.createDocumentFragment()
    fragment.appendChild(navigation())
    fragment.append(domEL['form-login'])
    return fragment
}

export function login() {
    domEL['main'].innerHTML = ''
    domEL['main'].appendChild(renderLogin())
}

async function onCLickLogin(x) {
    const body = JSON.stringify(validateData(x))
    const data = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body
    }
    try{
        const x = await fetch(reqUrls['login'], data)
        .then(serverResponse)
        .then(r => r.json())

        if(x){
            setUserToken(x)
            clearData(rowData)
            router('/home')
        }

    } catch (e){
        alert('Whrong email or password!')
        errorHandler(e)
    }
}
