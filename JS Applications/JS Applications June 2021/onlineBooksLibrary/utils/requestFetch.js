import { isAuthorized } from './authValidate.js';

export { get, pos, put, del };

function request(method, urlLink, data, isAuth) {

    let options = {};

    if (method !== 'GET') {
        options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
    }

    if (isAuth) {
        options.headers['X-Authorization'] = isAuthorized();
    }

    return fetch(urlLink, options)
        .then(response => {
            return response.json();
        });
}

let get = request.bind(null, 'GET');
let pos = request.bind(null, 'POST');
let put = request.bind(null, 'PUT');
let del = request.bind(null, 'DELETE');