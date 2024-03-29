export async function jsonRequest(url, method, body, isAuthorized, skipResult) {
    try {
        let headers = {};

        if (method === undefined) {
            method = 'GET';
        }
       
        if (['POST', 'PUT', 'PATCH'].includes(method.toUpperCase())) {
            headers['Content-Type'] = 'application/json';
        }

        if (isAuthorized) {
            headers['X-Authorization'] = localStorage.getItem('auth_token');
        }

        let options = {
            method,
            headers
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
        if (!skipResult) {
            result = await response.json();
        }

        return result;

    } catch (err) {
        alert(err);
    }
}