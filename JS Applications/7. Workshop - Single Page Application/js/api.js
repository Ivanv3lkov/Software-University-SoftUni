export default class API {
    constructor(appId, apiKey, beginRequest, endRequest) {
        this.appId = appId;
        this.apiKey = apiKey;
        this.endpoints = {
            REGISTER: "users/register",
            LOGIN: "users/login",
            LOGOUT: "users/logout",
        };
        this.beginRequest = () => {
            if (beginRequest) {
                beginRequest;
            }
        };

        this.endRequest = () => {
            if (endRequest) {
                endRequest;
            }
        };
    }

    // member functions of this class

    host(endpoint) {
        return `https://api.backendless.com/${this.appId}/${this.apiKey}/${endpoint}`;
    }

    // facade (the below functionality)

    getOptions(headers) {
        const token = localStorage.getItem('userToken');

        const options = { headers: headers || {} };

        if (token !== null) {
            Object.assign(options.headers, { 'user-token': token });
        }

        return options;
    }

    // decorator patterns

    async get(endpoint) {
        const options = this.getOptions();

        if (endpoint !== this.endpoints.LOGOUT) {
            this.beginRequest();
            const result = (await fetch(this.host(endpoint), options)).json();
            this.endRequest();
            return result;
        } else { return; }
    }

    async post(endpoint, body) {
        const options = this.getOptions({ 'Content-Type': "application/json" });

        options.method = "POST";
        options.body = JSON.stringify(body);

        this.beginRequest();
        const result = (await fetch(this.host(endpoint), options)).json();
        this.endRequest();

        return result;
    }

    async put(endpoint, body) {
        const options = this.getOptions({ 'Content-Type': "application/json" });

        options.method = "PUT";
        options.body = JSON.stringify(body);

        this.beginRequest();
        const result = (await fetch(this.host(endpoint), options)).json();
        this.endRequest();

        return result;
    }

    async delete(endpoint) {
        const options = this.getOptions();

        options.method = "DELETE";

        this.beginRequest();
        const result = (await fetch(this.host(endpoint), options)).json();
        this.endRequest();

        return result;
    }

    // ordinary functionality

    async register(username, password) {
        return this.post(this.endpoints.REGISTER, { username, password });
    }

    async login(username, password) {
        const result = await this.post(this.endpoints.LOGIN, { login: username, password });

        localStorage.setItem('userToken', result['user-token']);
        localStorage.setItem('username', result.username);
        localStorage.setItem('userId', result.objectId);

        return result;
    }

    async logout() {
        const result = this.get(this.endpoints.LOGOUT);
        localStorage.removeItem('userToken');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        return result;
    }
}