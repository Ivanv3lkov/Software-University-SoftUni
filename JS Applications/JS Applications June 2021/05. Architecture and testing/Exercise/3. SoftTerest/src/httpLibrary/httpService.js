import authService from "../services/authService.js";

const httpRequest = async (method, url, isAuthorizedRequest, data = undefined) => {
    const currMethod = method;
    let headers = {};
    let methodWithData = ['POST', 'PUT', 'PATCH'];

    if (methodWithData.includes(currMethod)) {
        headers['Content-Type'] = 'application/json'
    }

    if (isAuthorizedRequest) {
        headers['X-Authorization'] = authService.getToken();
    }

    let requestBody = {
        method: currMethod,
        headers
    }

    if (data !== undefined) {
        requestBody.body = JSON.stringify(data);
    }

    let response = await fetch(url, requestBody);

    if (!response.ok) {
        let message = await response.text();
        throw new Error(`${response.status}: ${response.statusText}\n${message}`);
    }

    let result = undefined;

    if(!url.endsWith('logout')) {
        result = await response.json();
    }
    return result;
};
/**
 * @param url
 * @param isAuthorizedRequest
 * @returns {Promise<any>}
 */
let get = httpRequest.bind(null, 'GET');
/**
 * @param url
 * @param isAuthorizedRequest
 * @param data
 * @returns {Promise<any>}
 */
let post = httpRequest.bind(null, 'POST');
/**
 * @param url
 * @param isAuthorizedRequest
 * @param data
 * @returns {Promise<any>}
 */
let put = httpRequest.bind(null, 'PUT');
/**
 * @param url
 * @param isAuthorizedRequest
 * @returns {Promise<any>}
 */
let del = httpRequest.bind(null, 'DELETE');


export default {
    get, post, put, del
}
