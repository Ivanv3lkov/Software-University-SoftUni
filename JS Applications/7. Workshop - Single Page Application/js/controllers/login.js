import { login as apiLogin } from '../data.js';
import { showInfo, showError } from './notification.js';

export default async function login() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        loginForm: await this.load('./templates/user/loginForm.hbs'),
    };

    this.partial('./templates/user/loginPage.hbs', this.app.userData);
}

export async function loginPost() {
    try {
        const result = await apiLogin(this.params.username, this.params.password);
        if (result.hasOwnProperty('errorData')) {
            const error = new Error(result.errorData);
            Object.assign(error, result);
            throw error;
        }

        // преди да редиректнем да не забравим, да запаметим the credentials на the current user
        this.app.userData.username = result.username;
        this.app.userData.userId = result.objectId;

        showInfo(`Logged in as ${result.username}`);

        this.redirect('#/home');
    } catch (err) {
        console.error(err);
        showError(err.message);
    }
}