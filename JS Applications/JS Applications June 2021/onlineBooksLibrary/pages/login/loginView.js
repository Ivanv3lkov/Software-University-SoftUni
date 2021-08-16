import { html, render } from '../../node_modules/lit-html/lit-html.js';

import { container } from '../../app.js';
import { loginUser } from './loginBack.js';

let login = () => html`
 <!-- Login Page ( Only for Guest users ) -->
 <section id="login-page" class="login">
            <form id="login-form" action="" method="" @submit=${loginUser}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>
`;

export default function (context) {
    render(login(), container);
}