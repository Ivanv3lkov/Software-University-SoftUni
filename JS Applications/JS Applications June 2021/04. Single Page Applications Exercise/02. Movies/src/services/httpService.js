import auth from "./authService.js";

// no try catch here this time so we can handle the consequences of the request failing in the code
// i.e. if the logout request fails we don't want to execute the next step - clearing localStorage
// if this function is in a try catch we'll alert for the problem, but the code after the request
// will continue as normal and clear the local storage, even though we didn't actually manage to logout
export async function jsonRequest(url, method, body, isAuthorized, skipResult) {
    let headers = {};

    if(method === undefined){
        method = 'Get';
    }

    if(['post','put','patch'].includes(method.toLowerCase())) {
        headers['Content-Type'] = 'application/json';
    }

    if (isAuthorized) {
        headers['X-Authorization'] = auth.getAuthToken();
    }

    let options = {
        headers,
        method
    };

    if (body !== undefined) {
        options.body = JSON.stringify(body);
    }

    let response = await fetch(url, options);

    if (!response.ok) {
        let message = await response.text();
        throw new Error(`${response.status}: ${response.statusText}\n${message}`);
    }

    let result = undefined;
    if(!skipResult){
        result = await response.json();
    }

    return result;
}